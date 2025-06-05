import i18next from 'i18next'
import type { CustomTypeOptions as Translations, TOptionsBase as i18nextOptions } from 'i18next'

export type OptionsMap = { count: number, date: Date | number | string, val: string | number | boolean }
export type Showable = null | undefined | boolean | bigint | number | string
export interface RevocableProxy<T = unknown> { proxy: T, revoke(): void }
export interface ProxyHandler<T extends {} = {}> extends globalThis.ProxyHandler<T> {}
export type NS<T extends [any]> = `${T[0]}:`
export type t<T extends [any]> = T[0]['resources'][T[0]['defaultNS']] & { [K in (keyof T[0]['resources']) as NS<[K]>]: T[0]['resources'][K] }
export type Selector<S, T> = (t: t<[S]>) => T
export type Interpolated<T extends string = string, Tail extends string = string, Head extends string = string> = `${Head}{{${'' | '- '}${T}}}${Tail}`
export type NotInterpolated<T> = [T] extends [Interpolated] ? never : string
export type Pick_<T, K extends keyof any> = never | { -readonly [P in keyof T as P extends K ? P : never]-?: T[P] }
export type Omit_<T, K extends keyof any> = never | { -readonly [P in keyof T as P extends K ? never : P]: T[P] }
export type toString<T extends [any]> = `${T[0]}`
export type InferOptionKey<T, Out = never> = T extends Interpolated<infer Option, infer Tail> ? InferOptionKey<Tail, Out | Option> : Out
export type InferOptions<T, K extends InferOptionKey<T> = InferOptionKey<T>> = never | (Omit_<i18nextOptions, K> & Pick_<OptionsMap, K>)
export type Coerce<Out extends string, Head extends string, V> = V extends Showable ? `${Out}${Head}${toString<[V]>}` : `${Out}${Head}${string}`
export type Interpolate<
  T extends string,
  Options extends Record<string, unknown>,
  Out extends string = '',
> = T extends `${infer Head}{{- ${infer K extends keyof Options & (string | number)}}}${infer Tail}` ? Interpolate<Tail, Options, Coerce<Out, Head, Options[K]>>
  : T extends `${infer Head}{{${infer K extends keyof Options & (string | number)}}}${infer Tail}` ? Interpolate<Tail, Options, Coerce<Out, Head, Options[K]>>
  : `${Out}${T}`

export function t<
  S extends Translations,
  T extends Interpolated,
  Opt extends InferOptions<T>
>(
  selector: Selector<S, T>,
  options: { [K in keyof Opt]: Opt[K] }
): Interpolate<T, Opt>

export function t<
  S extends Translations,
  T extends NotInterpolated<T>,
  Opt extends InferOptions<T>
>(
  selector: Selector<S, T>,
  options?: { [K in keyof Opt]: Opt[K] }
): T

export function t<
  S extends Translations,
  T extends Interpolated,
  Opt extends InferOptions<T>
>(
  selector: Selector<S, T>,
  options: { [K in keyof Opt]: Opt[K] }
): Interpolate<T, Opt>

export function t(selector: any, options?: any) {
  const { proxy, revoke } = createProxy()
  const { [PATH_KEY]: PATH } = selector(proxy)
  const path = join(PATH)
  return (revoke(), i18next.t(path, options))
}

const PATH_KEY = Symbol.for('@i18prev/i18prev/PATH_KEY')

const join = (xs: (string | number)[]) => xs.reduce<string>(
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
