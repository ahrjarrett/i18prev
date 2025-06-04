#!/usr/bin/env pnpm dlx tsx
import * as path from 'node:path'
import * as fs from 'node:fs'

import { PATH } from './path'

type Scalar =
  | null
  | boolean
  | number
  | string

type Json<T> =
  | Scalar
  | readonly T[]
  | { [x: string]: T }

type Tree =
  | Scalar
  | readonly Tree[]
  | { [x: string]: Tree }

type Path<T = unknown> = [path: (string | number)[], leaf: T]

const isArray: <T>(src: unknown) => src is readonly T[] = Array.isArray
const isObject = <T>(src: unknown): src is { [x: string]: T } => !!src && typeof src === 'object' && !isArray(src)
const isScalar = (src: unknown): src is Scalar => false
  || src === null
  || typeof src === 'boolean'
  || typeof src === 'number'
  || typeof src === 'string'

function mapObject<const S extends readonly unknown[], T>(
  src: S,
  mapFn: (x: S[number], ix: number, xs: S) => T
): { [K in keyof S]: T }
function mapObject<const S extends { [x: string]: unknown }, T>(
  src: S,
  mapFn: (x: S[keyof S], key: string, xs: S) => T
): { [K in keyof S]: T }
function mapObject(
  src: { [x: string]: unknown },
  mapFn: (src: unknown, ix: any, xs: typeof src) => unknown
) {
  if (Array.isArray(src)) return src.map(mapFn)
  else {
    const keys = Object.keys(src)
    let out: { [x: string]: unknown } = {}
    for (const key of keys) out[key] = mapFn(src[key], key, src)
    return out
  }
}

function map<S, T>(f: (src: S) => T): (x: Json<S>) => Json<T> {
  return (x) => {
    switch (true) {
      default: return x
      case isScalar(x): return x
      case isArray(x): return mapObject(x, f)
      case isObject(x): return mapObject(x, f)
    }
  }
}

function fold<T>(reducer: (json: Json<T>) => T): (json: Tree) => T
function fold<T>(reducer: (json: Json<T>) => T): (json: Json<T>) => T {
  return function loop(value: Json<T>): T {
    return reducer(map(loop)(value as never))
  }
}

function toPaths(src: Json<Path[]>): Path[] {
  switch (true) {
    case isScalar(src): return [[[], src]]
    case isArray(src): return src
      .flatMap((paths, i) => paths.map(([path, leaf]) => [[i, ...path], leaf] satisfies Path))
    case isObject(src): return Object
      .entries(src)
      .flatMap(([k, paths]) => paths.map(([path, leaf]) => [[k, ...path], leaf] satisfies Path))
    default: return src satisfies never
  }
}

function pathsFromTree(tree: Tree): (string | number)[][] {
  return fold(toPaths)(tree).map(([path]) => path)
}

function generateTestHeader(testName: string): string[] {
  return [
    `import * as vi from 'vitest'`,
    `import * as i18prev from '@i18prev/i18prev'`,
    `import i18next from 'i18next'`,
    ``,
    `import { translations } from "./__generated__/translations.js"`,
    ``,
    `declare module "i18next" {`,
    `  interface CustomTypeOptions {`,
    `    resources: typeof translations`,
    `  }`,
    `}`,
    ``,
    `const resources = {`,
    `  en: translations,`,
    `}`,
    ``,
    `i18next.init({`,
    `  lng: "en",`,
    `  resources,`,
    `})`,
    ``,
    `vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-${testName}❳', () => {`,
    `  vi.it('〖⛳️〗› ❲generated test suite❳', () => {`,
  ]
}

function createi18prevAccessor([head, ...tail]: (string | number)[]): string {
  return `['${head}:'].${tail.join('.')}`
}

function createi18nextPath(xs: (string | number)[]): string {
  return xs.reduce<string>(
    (acc, cur) => `${acc.endsWith(':') ? acc.slice(0, -':'.length) + ':' : acc.length === 0 ? '' : acc + '.'}${cur}`,
    ''
  )
}

function generateAssertion(path: string[]): string[] {
  return [
    `    vi.assert.equal(`,
    `      i18prev.t($ => $${createi18prevAccessor(path)}),`,
    `      // @ts-ignore`,
    `      i18next.t('${createi18nextPath([path[0].concat(':'), ...path.slice(1)])}'),`,
    `    )`,
    ``,
  ]
}

function generateAssertions(paths: (string | number)[][]): string[] {
  return paths.flatMap(generateAssertion)
}

function generateTestFooter(): string[] {
  return [
    `  })`,
    `})`,
  ]
}

function generateTestSuite(testName: string, paths: (string | number)[][]): string {
  return ''
    + generateTestHeader(testName).join('\n')
    + '\n'
    + generateAssertions(paths).join('\n')
    + '\n'
    + generateTestFooter().join('\n')
    + '\n'
}

function generateBenchmark(testName: string, path: (string | number)[]): string {
  return [
    `import { bench } from "@arktype/attest"`,
    `import i18next from "i18next"`,
    `import * as i18prev from "@i18prev/i18prev"`,
    `import { translations } from "./__generated__/translations.js"`,
    ``,
    `declare module "i18next" {`,
    `  interface CustomTypeOptions {`,
    `    resources: typeof translations`,
    `  }`,
    `}`,
    ``,
    `const resources = {`,
    `  en: translations,`,
    `}`,
    ``,
    `i18next.init({`,
    `  lng: "en",`,
    `  resources,`,
    `})`,
    ``,
    `bench('〖⛳️〗› ❲i18next❳: generated type-level benchmark', () => {`,
    `  i18next.t('${createi18nextPath([`${path[0]}`.concat(':'), ...path.slice(1)])}')`,
    `}).types()`,
    ``,
    `bench('〖⛳️〗› ❲i18prev❳: generated type-level benchmark', () => {`,
    `  i18prev.t($ => $${createi18prevAccessor(path)})`,
    `}).types()`,
    ``,
  ].join('\n')
}

function main(): void {
  const tree_02: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[2], 'translations.json')).toString('utf8'))
  const tree_03: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[3], 'translations.json')).toString('utf8'))
  const tree_04: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[4], 'translations.json')).toString('utf8'))
  const tree_05: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[5], 'translations.json')).toString('utf8'))
  const tree_06: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[6], 'translations.json')).toString('utf8'))
  const tree_07: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[7], 'translations.json')).toString('utf8'))
  const tree_08: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[8], 'translations.json')).toString('utf8'))
  const tree_09: Tree = JSON.parse(fs.readFileSync(path.join(PATH.benchmarkTranslations[9], 'translations.json')).toString('utf8'))

  const paths_02 = pathsFromTree(tree_02)
  const paths_03 = pathsFromTree(tree_03)
  const paths_04 = pathsFromTree(tree_04)
  const paths_05 = pathsFromTree(tree_05)
  const paths_06 = pathsFromTree(tree_06)
  const paths_07 = pathsFromTree(tree_07)
  const paths_08 = pathsFromTree(tree_08)
  const paths_09 = pathsFromTree(tree_09)

  fs.writeFileSync(PATH.test[2], generateTestSuite('02', paths_02))
  fs.writeFileSync(PATH.test[3], generateTestSuite('03', paths_03))
  fs.writeFileSync(PATH.test[4], generateTestSuite('04', paths_04))
  fs.writeFileSync(PATH.test[5], generateTestSuite('05', paths_05))
  fs.writeFileSync(PATH.test[6], generateTestSuite('06', paths_06))
  fs.writeFileSync(PATH.test[7], generateTestSuite('07', paths_07))
  fs.writeFileSync(PATH.test[8], generateTestSuite('08', paths_08))
  fs.writeFileSync(PATH.test[9], generateTestSuite('09', paths_09))

  fs.writeFileSync(PATH.benchmark[2], generateBenchmark('02', paths_02[0]))
  fs.writeFileSync(PATH.benchmark[3], generateBenchmark('03', paths_03[0]))
  fs.writeFileSync(PATH.benchmark[4], generateBenchmark('04', paths_04[0]))
  fs.writeFileSync(PATH.benchmark[5], generateBenchmark('05', paths_05[0]))
  fs.writeFileSync(PATH.benchmark[6], generateBenchmark('06', paths_06[0]))
  fs.writeFileSync(PATH.benchmark[7], generateBenchmark('07', paths_07[0]))
  fs.writeFileSync(PATH.benchmark[8], generateBenchmark('08', paths_08[0]))
  fs.writeFileSync(PATH.benchmark[9], generateBenchmark('09', paths_09[0]))
}

void main()
