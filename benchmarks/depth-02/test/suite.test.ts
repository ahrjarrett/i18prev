import * as vi from 'vitest'
import * as i18prev from '@i18prev/i18prev'
import i18next from 'i18next'

import { translations } from "./__generated__/translations.js"

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof translations
  }
}

const resources = {
  en: translations,
}

i18next.init({
  lng: "en",
  resources,
})

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-02❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['cBinyXbind:'].RH),
      // @ts-ignore
      i18next.t('cBinyXbind:RH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['cBinyXbind:'].$$7Wn__),
      // @ts-ignore
      i18next.t('cBinyXbind:$$7Wn__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['cBinyXbind:']._ap),
      // @ts-ignore
      i18next.t('cBinyXbind:_ap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['U:']._7a_),
      // @ts-ignore
      i18next.t('U:_7a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['U:']._$),
      // @ts-ignore
      i18next.t('U:_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['U:'].A_o4),
      // @ts-ignore
      i18next.t('U:A_o4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_d$$__d__:'].v_N),
      // @ts-ignore
      i18next.t('_d$$__d__:v_N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_d$$__d__:'].$_),
      // @ts-ignore
      i18next.t('_d$$__d__:$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_d$$__d__:'].__),
      // @ts-ignore
      i18next.t('_d$$__d__:__'),
    )

  })
})
