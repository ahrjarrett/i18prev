import * as vi from 'vitest'
import { t } from '@i18prev/i18prev'
import i18next from 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources.en
  }
}

const defaultNS = 'ns1'

const ns1 = {
  title: 'Welcome!',
  description: {
    part1: 'This is just a basic example of how to use i18next with typescript',
    part2: '😉',
  },
  inter: 'interpolated {{val}}',
  interUnescaped: 'interpolated and unescaped {{- val}}',
  some: 'ctx',
  some_me: 'ctx2',
  some_1234: 'ctx3',
  pl_one: 'sing',
  pl_other: '{{count}} plur',
  lastChanged: 'Last changed {{- date}}',
} as const

const ns2 = {
  description: {
    part1:
      'In order to infer the appropriate type for t function, you should use type augmentation to override the Resources type.',
    part2: 'Check out the @types/i18next to see an example.',
  },
} as const

const resources = {
  en: {
    ns1,
    ns2,
  },
} as const

i18next.init({
  lng: 'en',
  debug: false,
  resources,
  defaultNS,
})

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/i18prev❳', () => {
  vi.it('〖⛳️〗› ❲t❳', () => {
    vi.assert.equal(
      t($ => $['ns1:'].description.part1),
      i18next.t('ns1:description.part1'),
    )

    vi.assert.equal(
      t($ => $.description.part2),
      i18next.t('description.part2'),
    )

    vi.assert.equal(
      t($ => $.inter, { val: 'abc' }),
      i18next.t('inter', { val: 'abc' }),
    )

    vi.assert.equal(
      t($ => $.pl_one),
      i18next.t('pl_one'),
    )

    vi.assert.equal(
      t($ => $.interUnescaped, { val: 'abc' }),
      i18next.t('interUnescaped', { val: 'abc' }),
    )

    const date = new Date()

    vi.assert.equal(
      t($ => $.lastChanged, { date }),
      i18next.t('lastChanged', { date }),
    )

    vi.assert.equal(
      t($ => $['ns1:'].description.part1),
      i18next.t('ns1:description.part1'),
    )

    vi.assert.equal(
      t($ => $['ns2:'].description.part1),
      i18next.t('ns2:description.part1'),
    )

    vi.assert.equal(
      t($ => $['ns1:'].inter, { val: 9000 }),
      i18next.t('ns1:inter', { val: 9000 }),
    )

    vi.assert.equal(
      t($ => $['ns1:'].interUnescaped, { val: 9000 }),
      i18next.t('ns1:interUnescaped', { val: 9000 }),
    )

    vi.assert.equal(
      t($ => $['ns1:'].lastChanged, { date }),
      i18next.t('ns1:lastChanged', { date }),
    )

    vi.assert.equal(
      t($ => $.some),
      i18next.t('some',),
    )

    vi.assert.equal(
      t($ => $.some_1234),
      i18next.t('some_1234',),
    )

    vi.assert.equal(
      t($ => $.some_me),
      i18next.t('some_me',),
    )

    vi.assert.equal(
      t($ => $.title),
      i18next.t('title',),
    )

    vi.assert.equal(
      t($ => $['ns1:'].pl_one),
      i18next.t('ns1:pl_one'),
    )

    vi.assert.equal(
      t($ => $['ns1:'].pl_other, { count: 0 }),
      i18next.t('ns1:pl_other', { count: 0 }),
    )

    vi.assert.equal(
      t($ => $['ns1:'].pl_other, { count: 1 }),
      i18next.t('ns1:pl_other', { count: 1 }),
    )

    vi.assert.equal(
      t($ => $['ns1:'].pl_other, { count: 2 }),
      i18next.t('ns1:pl_other', { count: 2 }),
    )

    vi.assert.notEqual(
      t($ => $['ns1:'].pl_other, { count: 1 }),
      i18next.t('ns1:pl_other', { count: 2 }),
    )

    // [i18next]: no TypeError when pluralization is unspecified 😬
    i18next.t('pl_other')

    // @ts-expect-error [i18prev]: this raises a TypeError at compile-time 😌
    t($ => $.pl_other)

    // @ts-expect-error 😌
    t($ => $.pl_other, {})


    vi.expectTypeOf(t($ => $['ns1:'].description.part1)).toEqualTypeOf<
      'This is just a basic example of how to use i18next with typescript'
    >()

    vi.expectTypeOf(t($ => $.description.part2)).toEqualTypeOf<
      // Dear internet: please stop using winking face
      '😉'
    >()

    vi.expectTypeOf(t($ => $.inter, { val: 9000 })).toEqualTypeOf<
      'interpolated 9000'
    >()

    vi.expectTypeOf(t($ => $.pl_one)).toEqualTypeOf<
      'sing'
    >()

    vi.expectTypeOf(t($ => $.interUnescaped, { val: 9000 })).toEqualTypeOf<
      'interpolated and unescaped 9000'
    >()

    vi.expectTypeOf(t($ => $.lastChanged, { date: new Date() })).toEqualTypeOf<
      `Last changed ${string}`
    >()

    vi.expectTypeOf(t($ => $['ns1:'].description.part1)).toEqualTypeOf<
      'This is just a basic example of how to use i18next with typescript'
    >()

    vi.expectTypeOf(t($ => $['ns2:'].description.part1)).toEqualTypeOf<
      'In order to infer the appropriate type for t function, you should use type augmentation to override the Resources type.'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].inter, { val: 9000 })).toEqualTypeOf<
      'interpolated 9000'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].interUnescaped, { val: 9000 })).toEqualTypeOf<
      'interpolated and unescaped 9000'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].lastChanged, { date: '2021-10-22' })).toEqualTypeOf<
      'Last changed 2021-10-22'
    >()

    vi.expectTypeOf(t($ => $.some)).toEqualTypeOf<
      'ctx'
    >()

    vi.expectTypeOf(t($ => $.some_1234)).toEqualTypeOf<
      'ctx3'
    >()

    vi.expectTypeOf(t($ => $.some_me)).toEqualTypeOf<
      'ctx2'
    >()

    vi.expectTypeOf(t($ => $.title)).toEqualTypeOf<
      'Welcome!'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].pl_one)).toEqualTypeOf<
      'sing'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].pl_other, { count: 0 })).toEqualTypeOf<
      '0 plur'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].pl_other, { count: 1 })).toEqualTypeOf<
      '1 plur'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].pl_other, { count: 2 })).toEqualTypeOf<
      '2 plur'
    >()

    vi.expectTypeOf(t($ => $['ns1:'].pl_other, { count: 1 })).toEqualTypeOf<
      '1 plur'
    >()

  })
})
