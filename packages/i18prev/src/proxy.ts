import i18next from 'i18next'
import type { CustomTypeOptions as Translations, TOptionsBase as i18nextOptions } from 'i18next'

export interface RevocableProxy<T = unknown> { proxy: T, revoke(): void }
export interface ProxyHandler<T extends {} = {}> extends globalThis.ProxyHandler<T> {}
export type NS<T extends [any]> = `${T[0]}:`
export type t<T extends [any]> =
  & T[0]['resources'][T[0]['defaultNS']]
  & { [K in (keyof T[0]['resources']) as NS<[K]>]: T[0]['resources'][K] }
export type Selector<S, T> = (t: t<[S]>) => T
export type Interpolated = `${string}{{${string}}}${string}`
export type NonInterpolated<T> = [T] extends [Interpolated] ? never : unknown
export type Pluralize<T, N extends number> = T extends `${infer Before}{{count}}${infer After}` ? `${Before}${N}${After}` : T
export type OptionsMap = { count: number, date: Date | number | string, val: string | number | boolean }
export type Pick_<T, K extends keyof any> = never | { -readonly [P in keyof T as P extends K ? P : never]-?: T[P] }
export type Omit_<T, K extends keyof any> = never | { -readonly [P in keyof T as P extends K ? never : P]: T[P] }
export type toString<T extends [any]> = `${T[0]}`
export type InferOptionKey<T>
  = T extends `${string}{{- ${infer Option}}}${string}` ? Option : T extends `${string}{{${infer Option}}}${string}` ? Option : never
export type InferOptions<T, K extends InferOptionKey<T> = InferOptionKey<T>> = never | (Omit_<i18nextOptions, K> & Pick_<OptionsMap, K>)
export type InferReturnType<T, Options extends Record<string, unknown>, Out extends string = ''>
  = T extends `${infer Head}{{${'' | '- '}${infer Option extends keyof Options & (string | number)}}}${infer Tail}`
  ? InferReturnType<
    Tail,
    Options,
    Options[Option] extends string | number | bigint | boolean | null | undefined
    ? `${Out}${Head}${Options[Option]}`
    : `${Out}${Head}${string}`>
  : `${Out}${toString<[T]>}`

const PATH_KEY = Symbol.for('@i18prev/i18prev/PATH_KEY')

export const join = (xs: (string | number)[]) => xs.reduce<string>(
  (acc, cur) => `${acc.endsWith(':') ? acc.slice(0, -':'.length) + ':' : acc.length === 0 ? '' : acc + '.'}${cur}`,
  ''
)

function createProxy(): RevocableProxy {
  let state = Array.of<string>()
  let proxy: RevocableProxy | undefined = undefined
  let handler = Object.create(null)
  handler.get = ((target, key) => {
    const index = Number.parseInt(String(key))
    proxy?.revoke?.()
    proxy = Proxy.revocable(
      Object.assign(target, Object.assign(Object.create(null), { [PATH_KEY]: state })),
      handler
    )
    if (key === PATH_KEY) {
      proxy.revoke()
      return state
    } else {
      proxy.revoke()
      proxy = Proxy.revocable(
        Object.assign(target, Object.assign(Object.create(null), { [PATH_KEY]: state })),
        handler
      )
      Reflect.set(state, state.length, Number.isNaN(index) ? key : index)
      return proxy.proxy
    }
  }) satisfies ProxyHandler['get']
  return Proxy.revocable(Object.create(null), handler)
}

export function t<
  S extends Translations,
  T extends Interpolated,
  Opt extends InferOptions<T>
>(
  selector: Selector<S, T>,
  options: { [K in keyof Opt]: Opt[K] }
): InferReturnType<T, Opt>

export function t<
  S extends Translations,
  T extends NonInterpolated<T>,
  Opt extends InferOptions<T>
>(
  selector: Selector<S, T>,
  options?: { [K in keyof Opt]: Opt[K] }
): T

export function t(selector: any, options?: any) {
  const { proxy, revoke } = createProxy()
  const { [PATH_KEY]: PATH } = selector(proxy)
  const path = join(PATH)
  return (
    revoke(),
    i18next.t(path, options)
  )
}
