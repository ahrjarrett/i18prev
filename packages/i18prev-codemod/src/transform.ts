import type * as j from 'jscodeshift'
import { has } from './has.js'

export default function transformer(file: j.FileInfo, api: j.API) {
  const j = api.jscodeshift
  const root = j(file.source)

  const getLambda = (path: string) => {
    const [firstPart, ...rest] = path.split('.')
    let base: j.Identifier | j.MemberExpression = j.identifier('$')

    if (firstPart.includes(':')) {
      const [ns, key] = firstPart.split(':')
      base = j.memberExpression(
        j.memberExpression(base, j.literal(`${ns}:`), true),
        j.identifier(key)
      )
    } else {
      base = j.memberExpression(base, j.identifier(firstPart))
    }

    return rest.reduce((acc, cur) => j.memberExpression(acc, j.identifier(cur)), base as j.MemberExpression)
  }

  // Rewrite imports from "i18next"
  root.find(j.ImportDeclaration, { source: { value: 'i18next' } }).forEach(path => {
    const specifiers = path.node.specifiers || []

    // import i18next from 'i18next' => import * as i18prev from 'i18prev'
    if (specifiers.length === 1 && specifiers[0].type === 'ImportDefaultSpecifier') {
      path.node.specifiers = [
        j.importNamespaceSpecifier(j.identifier('i18prev'))
      ]
      path.node.source.value = 'i18prev'
    }

    // import { t } from 'i18next' => import { t } from 'i18prev'
    else if (specifiers.some(s => s.type === 'ImportSpecifier' && s.imported.name === 't')) {
      path.node.source.value = 'i18prev'
    }

    // import * as i18next from 'i18next' => import * as i18prev from 'i18prev'
    else if (specifiers.length === 1 && specifiers[0].type === 'ImportNamespaceSpecifier' && has('local', 'name')(specifiers[0])) {
      specifiers[0].local.name = 'i18prev'
      path.node.source.value = 'i18prev'
    }
  })

  // Transform t('abc.def') and i18next.t('abc.def')
  root.find(j.CallExpression).forEach(path => {
    const callee = path.node.callee

    const isTCall =
      callee.type === 'Identifier' && callee.name === 't'

    const isI18nextTCall =
      callee.type === 'MemberExpression' &&
      callee.object.type === 'Identifier' &&
      callee.object.name === 'i18next' &&
      callee.property.type === 'Identifier' &&
      callee.property.name === 't'

    if (!isTCall && !isI18nextTCall) return

    const args = path.node.arguments
    if (args.length === 0 || args[0].type !== 'Literal' || typeof args[0].value !== 'string') return

    const key = args[0].value
    const lambda = j.arrowFunctionExpression(
      [j.identifier('$')],
      getLambda(key)
    )

    path.node.arguments[0] = lambda

    // Rewrite i18next.t to i18prev.t
    if (isI18nextTCall && has('object', 'name')(path.node.callee)) {
      path.node.callee.object.name = 'i18prev'
    }
  })

  return root.toSource({ quote: 'double' })
}
