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

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-03❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].u_w.$$g2Z),
      // @ts-ignore
      i18next.t('e_5Nmd:u_w.$$g2Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].u_w.JircnPC$1),
      // @ts-ignore
      i18next.t('e_5Nmd:u_w.JircnPC$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].u_w.$e_P),
      // @ts-ignore
      i18next.t('e_5Nmd:u_w.$e_P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].$c.qbs$9Pp0V__),
      // @ts-ignore
      i18next.t('e_5Nmd:$c.qbs$9Pp0V__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].$c.a_),
      // @ts-ignore
      i18next.t('e_5Nmd:$c.a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].$c.ys$j$4UT),
      // @ts-ignore
      i18next.t('e_5Nmd:$c.ys$j$4UT'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].A2D$$J_30$D._$8_j0__R$),
      // @ts-ignore
      i18next.t('e_5Nmd:A2D$$J_30$D._$8_j0__R$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].A2D$$J_30$D.Dq$),
      // @ts-ignore
      i18next.t('e_5Nmd:A2D$$J_30$D.Dq$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['e_5Nmd:'].A2D$$J_30$D._$_$$Q),
      // @ts-ignore
      i18next.t('e_5Nmd:A2D$$J_30$D._$_$$Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].xkey.n$9$XV$OM),
      // @ts-ignore
      i18next.t('lCC32__$:xkey.n$9$XV$OM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].xkey.hm$_Q_0_),
      // @ts-ignore
      i18next.t('lCC32__$:xkey.hm$_Q_0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].xkey.icall),
      // @ts-ignore
      i18next.t('lCC32__$:xkey.icall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].C_oU.Bf4),
      // @ts-ignore
      i18next.t('lCC32__$:C_oU.Bf4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].C_oU._Qz$c_XX),
      // @ts-ignore
      i18next.t('lCC32__$:C_oU._Qz$c_XX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].C_oU.h$$13L),
      // @ts-ignore
      i18next.t('lCC32__$:C_oU.h$$13L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].$l_.$),
      // @ts-ignore
      i18next.t('lCC32__$:$l_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].$l_._pr),
      // @ts-ignore
      i18next.t('lCC32__$:$l_._pr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['lCC32__$:'].$l_.LtoString),
      // @ts-ignore
      i18next.t('lCC32__$:$l_.LtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$l$LAB.Z_$L),
      // @ts-ignore
      i18next.t('$C:$l$LAB.Z_$L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$l$LAB.qH$_7J_$v_$),
      // @ts-ignore
      i18next.t('$C:$l$LAB.qH$_7J_$v_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$l$LAB.A_W_va),
      // @ts-ignore
      i18next.t('$C:$l$LAB.A_W_va'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$mk._callerg),
      // @ts-ignore
      i18next.t('$C:$mk._callerg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$mk.b_),
      // @ts-ignore
      i18next.t('$C:$mk.b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].$mk.$),
      // @ts-ignore
      i18next.t('$C:$mk.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].H.__TyR$5),
      // @ts-ignore
      i18next.t('$C:H.__TyR$5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].H._a),
      // @ts-ignore
      i18next.t('$C:H._a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$C:'].H.l$s),
      // @ts-ignore
      i18next.t('$C:H.l$s'),
    )

  })
})
