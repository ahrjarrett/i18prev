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

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-06❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.Vcall.$$9L5_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.Vcall.$$9L5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.Vcall.$WM_SE),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.Vcall.$WM_SE'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.Vcall._h_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.Vcall._h_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN._$R$.lYT$_38A$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN._$R$.lYT$_38A$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN._$R$.$H),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN._$R$.$H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN._$R$.$__),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN._$R$.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.X7AG$$g.D),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.X7AG$$g.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.X7AG$$g.$Tr4r),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.X7AG$$g.$Tr4r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe.__cmSN.X7AG$$g.B2_Rt),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe.__cmSN.X7AG$$g.B2_Rt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.cZ$k.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.cZ$k.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.cZ$k.aZ),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.cZ$k.aZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.cZ$k._),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.cZ$k._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.D5_$JMN.D_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.D5_$JMN.D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.D5_$JMN._8_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.D5_$JMN._8_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.D5_$JMN.c),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.D5_$JMN.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.ECA.$__defineSe),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.ECA.$__defineSe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.ECA.d$6$_$_m48),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.ECA.d$6$_$_m48'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._ha.ECA.E$VP$N__oW),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._ha.ECA.E$VP$N__oW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7._z7.k),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7._z7.k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7._z7.$__look),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7._z7.$__look'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7._z7.j_uctor),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7._z7.j_uctor'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.Dva.$_cal),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.Dva.$_cal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.Dva.yz$H$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.Dva.yz$H$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.Dva.Ble),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.Dva.Ble'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.e_._ap),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.e_._ap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.e_.Vcj_$1Ia),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.e_.Vcj_$1Ia'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r._C_lookupGe._7.e_.$_0i$jl9$rq),
      // @ts-ignore
      i18next.t('_3_v7T_9:r._C_lookupGe._7.e_.$_0i$jl9$rq'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$O$mJ_$$a._0p$_h$D4),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$O$mJ_$$a._0p$_h$D4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$O$mJ_$$a.Ya__w),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$O$mJ_$$a.Ya__w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$O$mJ_$$a.$$L$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$O$mJ_$$a.$$L$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$z0$5$.vto__),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$z0$5$.vto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$z0$5$.e$5_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$z0$5$.e$5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__.$z0$5$.C$W1),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__.$z0$5$.C$W1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__._liZ9$$._B31s),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__._liZ9$$._B31s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__._liZ9$$.V7$4F_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__._liZ9$$.V7$4F_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$2__._liZ9$$.E$D$3$3),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$2__._liZ9$$.E$D$3$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._.$FJ_$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._.$FJ_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._.H1),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._.H1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._.$$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._pr.$D),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._pr.$D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._pr.e),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._pr.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id._pr._e),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id._pr._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id.e.$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id.e.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id.e.cu),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id.e.cu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.gD$F_5i$4id.e.zB$8),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.gD$F_5i$4id.e.zB$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.uq2.IWY9),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.uq2.IWY9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.uq2.db2_$B$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.uq2.db2_$B$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.uq2.__h),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.uq2.__h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$apply),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$0x_$_v),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$0x_$_v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$$43Ur),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.$Tz$K0_6_9_.$$43Ur'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.Bap.$0),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.Bap.$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.Bap.L_E),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.Bap.L_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.YO1_$_$$.$Li9__H$.Bap._$L1m8gd_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.YO1_$_$$.$Li9__H$.Bap._$L1m8gd_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.h.$ref),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.h.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.h._caller),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.h._caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.h._),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.h._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.A$__.$$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.A$__.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.A$__.X__d),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.A$__.X__d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.A$__._CG_$$8I_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.A$__._CG_$$8I_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.N.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.N.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.N.__4$___1_$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.N.__4$___1_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.V_n8n_6e1en.N.Z$$_i3$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.V_n8n_6e1en.N.Z$$_i3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.Azf$$si_P.h__),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.Azf$$si_P.h__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.Azf$$si_P.B_ic),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.Azf$$si_P.B_ic'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.Azf$$si_P._),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.Azf$$si_P._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C._67473.b),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C._67473.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C._67473.Pd78_),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C._67473.Pd78_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C._67473.Ddc__E91g0),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C._67473.Ddc__E91g0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.e.Tbind),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.e.Tbind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.e._86),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.e._86'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.C.e._),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.C.e._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.u_FB_hasO._2),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.u_FB_hasO._2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.u_FB_hasO.$9g$Y$n),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.u_FB_hasO.$9g$Y$n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.u_FB_hasO.y),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.u_FB_hasO.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.E.Vhv),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.E.Vhv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.E.V),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.E.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.E._P$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.E._P$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.$7U_7I$$l.E$r_T9$),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.$7U_7I$$l.E$r_T9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.$7U_7I$$l.K$7g),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.$7U_7I$$l.K$7g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].r.$Sp_cg_$_.c9_qn.$7U_7I$$l.Ka),
      // @ts-ignore
      i18next.t('_3_v7T_9:r.$Sp_cg_$_.c9_qn.$7U_7I$$l.Ka'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.W$.$d5$$_9$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.W$.$d5$$_9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.W$._caller),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.W$._caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.W$.SFevHQ_3Zx8),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.W$.SFevHQ_3Zx8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al._m$f$$v.v4o__G$V$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al._m$f$$v.v4o__G$V$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al._m$f$$v._y__s7053_$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al._m$f$$v._y__s7053_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al._m$f$$v._to),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al._m$f$$v._to'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.b38_9_.$_aO__$1jt_),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.b38_9_.$_aO__$1jt_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.b38_9_.e$_5ED),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.b38_9_.e$_5ED'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Al.b38_9_.$_5O67),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Al.b38_9_.$_5O67'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.Eu_L0_B_1.__),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.Eu_L0_B_1.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.Eu_L0_B_1.e$91nN),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.Eu_L0_B_1.e$91nN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.Eu_L0_B_1.__Na8__2$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.Eu_L0_B_1.__Na8__2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.thhw$dq_l0.cE1X),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.thhw$dq_l0.cE1X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.thhw$dq_l0.ef$1$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.thhw$dq_l0.ef$1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.thhw$dq_l0.$1_c$$2z$7),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.thhw$dq_l0.$1_c$$2z$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.$8q$._),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.$8q$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.$8q$.B1_3$b83__),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.$8q$.B1_3$b83__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.$$8Crw.$8q$.___proto__),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.$$8Crw.$8q$.___proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.E.Bm),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.E.Bm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.E.n$0),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.E.n$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.E.$U$$w),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.E.$U$$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0._$.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0._$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0._$._$$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0._$._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0._$.A$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0._$.A$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.Y1_ZQ._z_$_l1_j_f),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.Y1_ZQ._z_$_l1_j_f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.Y1_ZQ._n),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.Y1_ZQ._n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.lt$94$S.Z1ref_bind0.Y1_ZQ.$_$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.lt$94$S.Z1ref_bind0.Y1_ZQ.$_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$$V_$60$_A$._),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$$V_$60$_A$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$$V_$60$_A$.b$__$8$__fQ),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$$V_$60$_A$.b$__$8$__fQ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$$V_$60$_A$.V$_$_9$$_5),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$$V_$60$_A$.V$_$_9$$_5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$Z8$_F$_$P$.c$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$Z8$_F$_$P$.c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$Z8$_F$_$P$.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$Z8$_F$_$P$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.$Z8$_F$_$P$.$7CD),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.$Z8$_F$_$P$.$7CD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.W.skey),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.W.skey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.W.ym_y),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.W.ym_y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.$_zis4.W.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.$_zis4.W.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.E97K_P0wx$9._B),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.E97K_P0wx$9._B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.E97K_P0wx$9.j),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.E97K_P0wx$9.j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.E97K_P0wx$9.$__j0Brev70),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.E97K_P0wx$9.$__j0Brev70'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.EvalueOf._3_0_J4c$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.EvalueOf._3_0_J4c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.EvalueOf.$Qs_m_jCC),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.EvalueOf.$Qs_m_jCC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke.EvalueOf.$$a),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke.EvalueOf.$$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke._Vy_0_9__A_.Va),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke._Vy_0_9__A_.Va'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke._Vy_0_9__A_.V$$$DR8$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke._Vy_0_9__A_.V$$$DR8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$.Fke._Vy_0_9__A_.$name),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$.Fke._Vy_0_9__A_.$name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.$M.$__c4),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.$M.$__c4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.$M.I),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.$M.I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.$M._),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.$M._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6._$fDfineSet.c),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6._$fDfineSet.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6._$fDfineSet.$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6._$fDfineSet.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6._$fDfineSet.cF_T_vp),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6._$fDfineSet.cF_T_vp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.ake.G_$i$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.ake.G_$i$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.ake.AF),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.ake.AF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$._$._52__$rN3$6.ake.LUO4BjZNwz),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$._$._52__$rN3$6.ake.LUO4BjZNwz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.J$.x$2Ls$$U),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.J$.x$2Ls$$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.J$.o$bo$$WO_e),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.J$.o$bo$$WO_e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.J$._$$Y_$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.J$._$$Y_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.$a.wK),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.$a.wK'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.$a.B1g$$8),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.$a.B1g$$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P.$a.$j$_f1w$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P.$a.$j$_f1w$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P._.Z),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P._.Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P._.I),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P._.I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.y$$1t_M0$6P._.a),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.y$$1t_M0$6P._.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.qQrd.$w8ha),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.qQrd.$w8ha'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.qQrd.W_TlOlw46),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.qQrd.W_TlOlw46'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.qQrd.v$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.qQrd.v$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.xL$W$$n.ca),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.xL$W$$n.ca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.xL$W$$n.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.xL$W$$n.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.xL$W$$n.$2vB),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.xL$W$$n.$2vB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.d___.aE$_4yus$),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.d___.aE$_4yus$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.d___._HS),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.d___._HS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.w$SH_$$__.d___.e$$MD),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.w$SH_$$__.d___.e$$MD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.$key.a0),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.$key.a0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.$key.$_q_$2),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.$key.$_q_$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.$key._$8),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.$key._$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.d.PoL),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.d.PoL'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.d.f_$0__),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.d.f_$0__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.d.$V$w3qp_$1),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.d.$V$w3qp_$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.m_o$Y0_l5.$__),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.m_o$Y0_l5.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.m_o$Y0_l5.$56Y_C5U2),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.m_o$Y0_l5.$56Y_C5U2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:']._U$.R4.AX4_$H$6.m_o$Y0_l5.$E3V$1),
      // @ts-ignore
      i18next.t('_3_v7T_9:_U$.R4.AX4_$H$6.m_o$Y0_l5.$E3V$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.as$$B.m),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.as$$B.m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.as$$B._LxHkf3JI),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.as$$B._LxHkf3JI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.as$$B.d__v),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.as$$B.d__v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.$$__a_l$5$.$U$6Q$_$$$f),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.$$__a_l$5$.$U$6Q$_$$$f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.$$__a_l$5$.nonstructor),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.$$__a_l$5$.nonstructor'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g.$$__a_l$5$.$j),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g.$$__a_l$5$.$j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g._Q1._),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g._Q1._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g._Q1.Sr__S_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g._Q1.Sr__S_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.g._Q1.b$q),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.g._Q1.b$q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$0__.$83),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$0__.$83'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$0__.$$W$3ut$Vf),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$0__.$$W$3ut$Vf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$0__.k5f$3w),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$0__.k5f$3w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.V9u0$$s$$.d$cN),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.V9u0$$s$$.d$cN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.V9u0$$s$$.$GVC),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.V9u0$$s$$.$GVC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.V9u0$$s$$.cOodU5i_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.V9u0$$s$$.cOodU5i_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$co.x$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$co.x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$co.$key),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$co.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$._J.$co.eB3Is7$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$._J.$co.eB3Is7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.yar.EY$_D__),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.yar.EY$_D__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.yar.R),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.yar.R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.yar._1r),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.yar._1r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.$lI_t7$F_26.Ex0),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.$lI_t7$F_26.Ex0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.$lI_t7$F_26.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.$lI_t7$F_26.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.$lI_t7$F_26.$B7y6ec$E),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.$lI_t7$F_26.$B7y6ec$E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.A_de.VSYn$k),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.A_de.VSYn$k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.A_de.utoString),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.A_de.utoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.C9_$.$.A_de.$0),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.C9_$.$.A_de.$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$5$$$1r__b.$_W),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$5$$$1r__b.$_W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$5$$$1r__b.y$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$5$$$1r__b.y$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$5$$$1r__b.BaE$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$5$$$1r__b.BaE$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.Xap.gm_S_$49),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.Xap.gm_S_$49'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.Xap.P_7LJ),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.Xap.P_7LJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.Xap._E_$_5w$aCH),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.Xap._E_$_5w$aCH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$E_aL9$.dTcW_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$E_aL9$.dTcW_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$E_aL9$.C_$4),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$E_aL9$.C_$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$H.$E_aL9$.c_$__$$U_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$H.$E_aL9$.c_$__$$U_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.baq_6_y.$$_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.baq_6_y.$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.baq_6_y.b),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.baq_6_y.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.baq_6_y.$C),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.baq_6_y.$C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___._$$$Xu.c$85$_E),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___._$$$Xu.c$85$_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___._$$$Xu.r),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___._$$$Xu.r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___._$$$Xu.__O),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___._$$$Xu.__O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.Be5.J),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.Be5.J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.Be5.dHd),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.Be5.dHd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l.$$F$kL___.Be5._),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l.$$F$kL___.Be5._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.__5A.$H_$_Z$__),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.__5A.$H_$_Z$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.__5A.gz4w$37),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.__5A.gz4w$37'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.__5A.fbY),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.__5A.fbY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.jlIo$d$0ch8.$Li$__A_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.jlIo$d$0ch8.$Li$__A_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.jlIo$d$0ch8.WE),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.jlIo$d$0ch8.WE'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$.jlIo$d$0ch8.AC3),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$.jlIo$d$0ch8.AC3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$._C_.D1D$$___8x),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$._C_.D1D$$___8x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$._C_._w4_qZ6_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$._C_._w4_qZ6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$$l._5$$_$._C_.W$__),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$$l._5$$_$._C_.W$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.zQu8$g._),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.zQu8$g._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.zQu8$g.$$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.zQu8$g.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.zQu8$g.EO),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.zQu8$g.EO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.MbbZ3_.GAL),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.MbbZ3_.GAL'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.MbbZ3_.D_1mHIh5hN$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.MbbZ3_.D_1mHIh5hN$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.MbbZ3_.e),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.MbbZ3_.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.T_$4Iqc_$.Zefi),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.T_$4Iqc_$.Zefi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.T_$4Iqc_$.kb_v),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.T_$4Iqc_$.kb_v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w.i__B_3.T_$4Iqc_$.x__def),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w.i__B_3.T_$4Iqc_$.x__def'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r._3$_.$qy_x8sD$$y),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r._3$_.$qy_x8sD$$y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r._3$_.WV),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r._3$_.WV'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r._3$_.N$U),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r._3$_.N$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.eEU_wf9$C._Eu),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.eEU_wf9$C._Eu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.eEU_wf9$C.B),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.eEU_wf9$C.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.eEU_wf9$C._1_E_$xasC),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.eEU_wf9$C._1_E_$xasC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.GQ$._9H$_$tCB_),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.GQ$._9H$_$tCB_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.GQ$.x_B$D$0),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.GQ$.x_B$D$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$_$9r.GQ$.DF__$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$_$9r.GQ$.DF__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.$$.b),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.$$.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.$$.$c$_u2X),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.$$.$c$_u2X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.$$.$1$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.$$.$1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.A_8_.$k_$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.A_8_.$k_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.A_8_.A0m8$$7),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.A_8_.A0m8$$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.A_8_.$),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.A_8_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.eC_qF_u.$8OY$N),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.eC_qF_u.$8OY$N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.eC_qF_u.w),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.eC_qF_u.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_v7T_9:'].U0q8_.$w._$WE_p_709.eC_qF_u.__Dm),
      // @ts-ignore
      i18next.t('_3_v7T_9:U0q8_.$w._$WE_p_709.eC_qF_u.__Dm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.$Tg_l_.Y_C5_E$_),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.$Tg_l_.Y_C5_E$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.$Tg_l_._),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.$Tg_l_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.$Tg_l_._$$A$16c6m1),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.$Tg_l_._$$A$16c6m1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.v__.A$PE$),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.v__.A$PE$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.v__.NN7$L_$),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.v__.NN7$L_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.v__.W$dW),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.v__.W$dW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.B_$$nam.$57$a57$_),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.B_$$nam.$57$a57$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.B_$$nam.____),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.B_$$nam.____'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_.$u$r72$Z__$.B_$$nam._app),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_.$u$r72$Z__$.B_$$nam._app'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.__$.fall$nameeP),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.__$.fall$nameeP'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.__$.A),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.__$.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.__$.S$$b),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.__$.S$$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$._ttconstru._$_x_),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$._ttconstru._$_x_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$._ttconstru.e),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$._ttconstru.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$._ttconstru.$V1P),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$._ttconstru.$V1P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.$argume.vref),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.$argume.vref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.$argume._A4C$192),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.$argume._A4C$192'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._$UU$.$argume.$),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._$UU$.$argume.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._b$_1fv_Yz._1d),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._b$_1fv_Yz._1d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._b$_1fv_Yz.b7),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._b$_1fv_Yz.b7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._b$_1fv_Yz.$$$$RN5_),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._b$_1fv_Yz.$$$$RN5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf.wD_4__s$$.FDKRgGS__b$),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf.wD_4__s$$.FDKRgGS__b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf.wD_4__s$$.AA7r$m),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf.wD_4__s$$.AA7r$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf.wD_4__s$$.mkey),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf.wD_4__s$$.mkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._.g26),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._.g26'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._.$bm$8$),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._.$bm$8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.$3f_._valueOf._.C6),
      // @ts-ignore
      i18next.t('p$:b9__z.$3f_._valueOf._.C6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.a_W.C6p_),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.a_W.C6p_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.a_W.__h),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.a_W.__h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.a_W.j__),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.a_W.j__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.__u4Rj$9.V_3f$$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.__u4Rj$9.V_3f$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.__u4Rj$9.H2$__Z$f$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.__u4Rj$9.H2$__Z$f$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.__u4Rj$9.A6$5$_),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.__u4Rj$9.A6$5$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.AD.c$$$_9),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.AD.c$$$_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.AD.$name),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.AD.$name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.$$$b5_.AD.$vw_7cu),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.$$$b5_.AD.$vw_7cu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.$E_$6__o_.$2$2$L_U1),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.$E_$6__o_.$2$2$L_U1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.$E_$6__o_._CC),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.$E_$6__o_._CC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.$E_$6__o_.$$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.$E_$6__o_.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.A_.x__),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.A_.x__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.A_.___32c$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.A_.___32c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.A_.ib4_K4o$g),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.A_.ib4_K4o$g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.W_8Su._7d$YeD_$iD),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.W_8Su._7d$YeD_$iD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.W_8Su.F1__8P),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.W_8Su.F1__8P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___.h_.W_8Su.t_$V$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___.h_.W_8Su.t_$V$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.L.$3callnat),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.L.$3callnat'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.L.BeM_V),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.L.BeM_V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.L.lMJh_),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.L.lMJh_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.bD4.$_a),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.bD4.$_a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.bD4.e9RN5_),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.bD4.e9RN5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.bD4._D),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.bD4._D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.__re$YJ._roto_$),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.__re$YJ._roto_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.__re$YJ.TF6),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.__re$YJ.TF6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.v___._argum.__re$YJ.A44c1_6l),
      // @ts-ignore
      i18next.t('p$:b9__z.v___._argum.__re$YJ.A44c1_6l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$._key.$6$$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$._key.$6$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$._key.$70__d),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$._key.$70__d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$._key._0DnF),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$._key._0DnF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.$$Y5_$pX2_$.B$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.$$Y5_$pX2_$.B$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.$$Y5_$pX2_$._ref),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.$$Y5_$pX2_$._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.$$Y5_$pX2_$.$8ca),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.$$Y5_$pX2_$.$8ca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.c6____3_t$_.C$y$D$EF_C),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.c6____3_t$_.C$y$D$EF_C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.c6____3_t$_.D$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.c6____3_t$_.D$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.$.c6____3_t$_.XOJ$$$_),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.$.c6____3_t$_.XOJ$$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.aQ.bvalueOf),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.aQ.bvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.aQ.Vv),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.aQ.Vv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.aQ.ctoString),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.aQ.ctoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.$$0$.$6N_5BeD),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.$$0$.$6N_5BeD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.$$0$._i_6_e),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.$$0$._i_6_e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M.$$0$._ha),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M.$$0$._ha'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M._c$U_A$NC.$zb),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M._c$U_A$NC.$zb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M._c$U_A$NC.A_B),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M._c$U_A$NC.A_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$._jVB$s_M._c$U_A$NC._p),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$._jVB$s_M._c$U_A$NC._p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$._.$to),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$._.$to'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$._.Z$_$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$._.Z$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$._._4),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$._._4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.$J$_.L$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.$J$_.L$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.$J$_.c0A$_$8_),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.$J$_.c0A$_$8_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.$J$_.hbintotyp$),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.$J$_.hbintotyp$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.e$_B__N.__),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.e$_B__N.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.e$_B__N.$2i),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.e$_B__N.$2i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].b9__z.yR4__$$.kDq$.e$_B__N._const),
      // @ts-ignore
      i18next.t('p$:b9__z.yR4__$$.kDq$.e$_B__N._const'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_._$_e$.___c__a$$_),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_._$_e$.___c__a$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_._$_e$.b$),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_._$_e$.b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_._$_e$.F$6__$U4_X),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_._$_e$.F$6__$U4_X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$1_uR8_$_L.$1lXFL_),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$1_uR8_$_L.$1lXFL_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$1_uR8_$_L.OB),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$1_uR8_$_L.OB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$1_uR8_$_L.$$T_),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$1_uR8_$_L.$$T_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$$_UBef__.Bvz$),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$$_UBef__.Bvz$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$$_UBef__.T19$___),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$$_UBef__.T19$___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.n9G$_.$$_UBef__.p_6$4EjH112),
      // @ts-ignore
      i18next.t('p$:A1.$5_.n9G$_.$$_UBef__.p_6$4EjH112'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.E.p$2$5$),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.E.p$2$5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.E.l1),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.E.l1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.E.$_L_$T7_y),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.E.$_L_$T7_y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.MF__k.i$RFR$),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.MF__k.i$RFR$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.MF__k.cK),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.MF__k.cK'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.MF__k._$I0l),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.MF__k._$I0l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.k_._7$M$_$$o7),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.k_._7$M$_$$o7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.k_.N8$),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.k_.N8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_.$$9lv_l_z.k_.$G3_2),
      // @ts-ignore
      i18next.t('p$:A1.$5_.$$9lv_l_z.k_.$G3_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.B4A$$$0.c$$L$),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.B4A$$$0.c$$L$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.B4A$$$0.P$$ME3_),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.B4A$$$0.P$$ME3_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.B4A$$$0.V$F$H),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.B4A$$$0.V$F$H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.Q.Ox$),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.Q.Ox$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.Q.___4w$Yp6_),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.Q.___4w$Yp6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.Q.b$$),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.Q.b$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.ol.Cre),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.ol.Cre'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.ol.$r),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.ol.$r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$5_._1A.ol.i),
      // @ts-ignore
      i18next.t('p$:A1.$5_._1A.ol.i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$bd.d_valu__loo),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$bd.d_valu__loo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$bd.U1_A$X5$$),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$bd.U1_A$X5$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$bd.K$h),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$bd.K$h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$$_y42bSn$.q6I3$7iU__g),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$$_y42bSn$.q6I3$7iU__g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$$_y42bSn$._6_),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$$_y42bSn$._6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.$$_y42bSn$.rZ$_Ja27W_),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.$$_y42bSn$.rZ$_Ja27W_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.ZB$aD$_.A_1M4_$8364),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.ZB$aD$_.A_1M4_$8364'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.ZB$aD$_.D$4ESe5T$_q),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.ZB$aD$_.D$4ESe5T$_q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$._.ZB$aD$_.Z_B),
      // @ts-ignore
      i18next.t('p$:A1.$0v$._.ZB$aD$_.Z_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.H8n_5o.$),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.H8n_5o.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.H8n_5o.$Wc_1$_0$p),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.H8n_5o.$Wc_1$_0$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.H8n_5o.L$H),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.H8n_5o.L$H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.$p2$S6$._xspS),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.$p2$S6$._xspS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.$p2$S6$._$$1$2Q$3q_),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.$p2$S6$._$$1$2Q$3q_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v.$p2$S6$._y_),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v.$p2$S6$._y_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v._0D$$A8_$2$.zE$q),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v._0D$$A8_$2$.zE$q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v._0D$$A8_$2$.U$$e$),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v._0D$$A8_$2$.U$$e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.__$v._0D$$A8_$2$.anU_$54im),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.__$v._0D$$A8_$2$.anU_$54im'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._$.__),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._$.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._$._$),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._$._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._$.AiKuM7$),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._$.AiKuM7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._.Lxx4),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._.Lxx4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._.NX$$1St_ty),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._.NX$$1St_ty'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF._.A_$Y),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF._.A_$Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF.gC_35v.U$$9Wv_$_C8),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF.gC_35v.U$$9Wv_$_C8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF.gC_35v.EU0V),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF.gC_35v.EU0V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.$0v$.$_$9_$jyF.gC_35v.$1f$4_6_),
      // @ts-ignore
      i18next.t('p$:A1.$0v$.$_$9_$jyF.gC_35v.$1f$4_6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3.yb_d$O_$v_P.c_n_o__$),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3.yb_d$O_$v_P.c_n_o__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3.yb_d$O_$v_P.$),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3.yb_d$O_$v_P.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3.yb_d$O_$v_P.K),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3.yb_d$O_$v_P.K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._.$a$$_N),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._.$a$$_N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._.$_C$CW_),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._.$_C$CW_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._._),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._z_e8H3.$_$H),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._z_e8H3.$_$H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._z_e8H3._v_V$),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._z_e8H3._v_V$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.dh3._z_e8H3.INQ$TJ),
      // @ts-ignore
      i18next.t('p$:A1.c.dh3._z_e8H3.INQ$TJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i._apply.$2),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i._apply.$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i._apply._$$qwJ),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i._apply._$$qwJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i._apply.__K_$),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i._apply.__K_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.A8.$W),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.A8.$W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.A8.$7$63),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.A8.$7$63'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.A8._),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.A8._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.b_.W),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.b_.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.b_.DZ$yb2_),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.b_.DZ$yb2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.cV80$$0i.b_.Aref),
      // @ts-ignore
      i18next.t('p$:A1.c.cV80$$0i.b_.Aref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C.$3W$D$_D_$),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C.$3W$D$_D_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C._aa),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C._aa'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C.B_),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C.B_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C$1P.z),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C$1P.z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C$1P.H_6w),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C$1P.H_6w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W.C$1P.a3_YJw__ZHS),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W.C$1P.a3_YJw__ZHS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W._y$_I_$zN9.l$u$),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W._y$_I_$zN9.l$u$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W._y$_I_$zN9.e$__v$_$$b),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W._y$_I_$zN9.e$__v$_$$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:'].A1.c.rBi847W._y$_I_$zN9.X800),
      // @ts-ignore
      i18next.t('p$:A1.c.rBi847W._y$_I_$zN9.X800'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.$toString.$9gtbind),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.$toString.$9gtbind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.$toString.$key),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.$toString.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.$toString.D_5_6_),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.$toString.D_5_6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey._al$ameme$._n),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey._al$ameme$._n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey._al$ameme$.E8),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey._al$ameme$.E8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey._al$ameme$.$$),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey._al$ameme$.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.wkey.$_$_),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.wkey.$_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.wkey.U),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.wkey.U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.Ekey.wkey.$$$$c__DB),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.Ekey.wkey.$$$$c__DB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.j._B4),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.j._B4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.j.Eq2_),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.j.Eq2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.j.C2et),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.j.C2et'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.A_3_3.$_4$N$Q9),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.A_3_3.$_4$N$Q9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.A_3_3.V),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.A_3_3.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.A_3_3.$_tUtE7),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.A_3_3.$_tUtE7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.$__.k9$_7$5zx_),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.$__.k9$_7$5zx_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.$__.VDVN3_$6_2f),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.$__.VDVN3_$6_2f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7._7W8$$oQ4Nf.$__._),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7._7W8$$oQ4Nf.$__._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.ABMatoLocal._$$1),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.ABMatoLocal._$$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.ABMatoLocal.$$m),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.ABMatoLocal.$$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.ABMatoLocal.d$x$_$q$1),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.ABMatoLocal.d$x$_$q$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.p$8$P._$c$_bR809),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.p$8$P._$c$_bR809'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.p$8$P.Z$_7),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.p$8$P.Z$_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8.p$8$P._O$Rd$7),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8.p$8$P._O$Rd$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8._80.a1C),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8._80.a1C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8._80.GF),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8._80.GF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf.$7.$$d8._80._$_b$BY),
      // @ts-ignore
      i18next.t('p$:_valueOf.$7.$$d8._80._$_b$BY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.ecI5$_5i_i._N9$$8U__X),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.ecI5$_5i_i._N9$$8U__X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.ecI5$_5i_i.t),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.ecI5$_5i_i.t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.ecI5$_5i_i.V_),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.ecI5$_5i_i.V_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.De.DZ$x),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.De.DZ$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.De.Awc),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.De.Awc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_.De.A2$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_.De.A2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_._H_n_nfLk97.$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_._H_n_nfLk97.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_._H_n_nfLk97.Xu_),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_._H_n_nfLk97.Xu_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.Y_._H_n_nfLk97.e2$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.Y_._H_n_nfLk97.e2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t._$.Wi$ka_H_),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t._$.Wi$ka_H_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t._$._MP$$0R),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t._$._MP$$0R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t._$.C$$B5U_),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t._$.C$$B5U_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.$A$b_8bc_._$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.$A$b_8bc_._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.$A$b_8bc_.x),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.$A$b_8bc_.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.$A$b_8bc_._BQ),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.$A$b_8bc_._BQ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.WE.__Dx3aQ$mx),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.WE.__Dx3aQ$mx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.WE.O2__$3$$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.WE.O2__$3$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.t.WE.U56$y_s$$0),
      // @ts-ignore
      i18next.t('p$:_valueOf._.t.WE.U56$y_s$$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$c_j$K0$7.ad6),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$c_j$K0$7.ad6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$c_j$K0$7.$9$p$),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$c_j$K0$7.$9$p$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$c_j$K0$7.$$K_$$$$n),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$c_j$K0$7.$$K_$$$$n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$$2_strucco._$6$52p__n),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$$2_strucco._$6$52p__n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$$2_strucco.__K3_3$ldD),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$$2_strucco.__K3_3$ldD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.$$2_strucco.xoLocaleStr),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.$$2_strucco.xoLocaleStr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.Ykey.AaJ285__$F),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.Ykey.AaJ285__$F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.Ykey.INt),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.Ykey.INt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._.xZ$.Ykey.$q81_v),
      // @ts-ignore
      i18next.t('p$:_valueOf._.xZ$.Ykey.$q81_v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.c_.x_1_fd),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.c_.x_1_fd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.c_._n0Cl$$$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.c_._n0Cl$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.c_.$e),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.c_.$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_._2.CtoString),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_._2.CtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_._2.$L6U),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_._2.$L6U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_._2.$__),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_._2.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.e.$6V_$ln_$2),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.e.$6V_$ln_$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.e._e),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.e._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.c_6pV$fV_.e.mB__def),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.c_6pV$fV_.e.mB__def'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$_8.pH___look),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$_8.pH___look'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$_8._2),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$_8._2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$_8._ubc),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$_8._ubc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_._._xMER66_j1U),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_._._xMER66_j1U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_._._J$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_._._J$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_._.$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_._.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$$dH.$$_A9_$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$$dH.$$_A9_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$$dH.A$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$$dH.A$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.__5_.$$dH.$0hN$_Gqy),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.__5_.$$dH.$0hN$_Gqy'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.vJw.A1z6o),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.vJw.A1z6o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.vJw._),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.vJw._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.vJw.Y1C10$s1$2v),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.vJw.Y1C10$s1$2v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.q.M__HCG$I1$),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.q.M__HCG$I1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.q.$um),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.q.$um'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.q.k0),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.q.k0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.$D.ad7d),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.$D.ad7d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.$D._E_),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.$D._E_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['p$:']._valueOf._n.vref.$D.W),
      // @ts-ignore
      i18next.t('p$:_valueOf._n.vref.$D.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.a$.hname),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.a$.hname'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.a$.CH_F$4q$$8),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.a$.CH_F$4q$$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.a$.a$yp),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.a$.a$yp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.A$.$name),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.A$.$name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.A$.Zco),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.A$.Zco'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2.A$.D_$Se_Hv),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2.A$.D_$Se_Hv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2._G_.E_8k$e),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2._G_.E_8k$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2._G_.vO),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2._G_.vO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.E$$2._G_.BHnMp3N),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.E$$2._G_.BHnMp3N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.avalueOf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.avalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.gN$l),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.gN$l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.y$4fy_wQK8d),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.$toString.y$4fy_wQK8d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.C9$A),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.C9$A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.$Hz_S),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.$Hz_S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.A$$__$C),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.B_.A$$__$C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h.f_lf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h.f_lf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h._2cL71E),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h._2cL71E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h.$cal),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.f_4BQ6$ba3.a_$$2h.$cal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments.dX$K$._$RU$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments.dX$K$._$RU$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments.dX$K$.$QmedM$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments.dX$K$.$QmedM$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments.dX$K$.e2),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments.dX$K$.e2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._R7.cV3o6_$$g),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._R7.cV3o6_$$g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._R7._d_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._R7._d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._R7.$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._R7.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.z9R3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.z9R3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.$aA),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.$aA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.z9$AE4c1d8),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.t_E$.$arguments._bindmerab.z9$AE4c1d8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.$$._R$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.$$._R$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.$$.d_m),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.$$.d_m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.$$._),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.$$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.N._IsEnume),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.N._IsEnume'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.N.D_68D_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.N.D_68D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.N.$_B),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.N.$_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.cYp.NV9w$zzs_$m),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.cYp.NV9w$zzs_$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.cYp._2$a7$B4_y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.cYp._2$a7$B4_y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.dle.cYp.h$25e$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.dle.cYp.h$25e$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.W.vI),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.W.vI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.W.$23),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.W.$23'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.W.$_S9$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.W.$_S9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.$toL.$valueOf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.$toL.$valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.$toL.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.$toL.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.$toL.d7a),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.$toL.d7a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.C$_.wG_f),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.C$_.wG_f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.C$_._$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.C$_._$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.o_.C$_.$Kref$iLrot),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.o_.C$_.$Kref$iLrot'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.EVProp.Xref___look),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.EVProp.Xref___look'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.EVProp.zf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.EVProp.zf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.EVProp.t_$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.EVProp.t_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.Bk._K),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.Bk._K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.Bk.$1$p),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.Bk.$1$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__.Bk.___l),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__.Bk.___l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__._.vc3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__._.vc3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__._.W_zF$7_x),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__._.W_zF$7_x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_.$_$_$__._.b),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_.$_$_$__._.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$._Wl_$.$19do0_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$._Wl_$.$19do0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$._Wl_$.C$YWWs_R__B),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$._Wl_$.C$YWWs_R__B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$._Wl_$.$$714_8$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$._Wl_$.$$714_8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.Z$$C.$h_5c4),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.Z$$C.$h_5c4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.Z$$C.ZA8),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.Z$$C.ZA8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.Z$$C.__ueO$toS),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.Z$$C.__ueO$toS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.w99.ZF$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.w99.ZF$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.w99.Ez__$vS),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.w99.Ez__$vS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$.w99.rFa9359_CK),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$.w99.rFa9359_CK'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly.d3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly.d3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly._lN),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly._lN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly.$X$O),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.happly.$X$O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.$G$yq_$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.$G$yq_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.dl),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.dl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.$k.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.d66AI$_1_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.d66AI$_1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.A$7_$Ws$J),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.A$7_$Ws$J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.$ref),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.V$40VB$$__z.D0Ei$.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.$St),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.$St'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.ZuEwcalll),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.ZuEwcalll'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.oa$w),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.OO.oa$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call.$0Y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call.$0Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call.w),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call._),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$call._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.$__K_fb4),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.$__K_fb4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.cc2c),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.cc2c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:T_Ed1$Cy3w0.$_j_.$$_Y$$$.$lPd03w$$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.U__look.CM__$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.U__look.CM__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.U__look.__),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.U__look.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.U__look.so),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.U__look.so'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.z.n),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.z.n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.z.y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.z.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.z.v_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.z.v_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$.e_D0C4d$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$.e_D0C4d$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$.E$$k$5),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$.E$$k$5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$._d),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.Y$40h_5.$_O_3_VW$._d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.__i2f_$.w$u__h3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.__i2f_$.w$u__h3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.__i2f_$.ito),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.__i2f_$.ito'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.__i2f_$._y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.__i2f_$._y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.___$CHf_$S.Pb),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.___$CHf_$S.Pb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.___$CHf_$S.$_p_n),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.___$CHf_$S.$_p_n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.___$CHf_$S._C),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.___$CHf_$S._C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.e.$$gbca3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.e.$$gbca3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.e.i),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.e.i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.C.e.$W_x),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.C.e.$W_x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.Z$TDvgd._J),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.Z$TDvgd._J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.Z$TDvgd.$l_2_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.Z$TDvgd.$l_2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.Z$TDvgd.A$v_Jb3$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.Z$TDvgd.A$v_Jb3$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.$._X57$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.$._X57$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.$.D$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.$.D$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.$.lc_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.$.lc_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.C$$f_i.XWA),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.C$$f_i.XWA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.C$$f_i.$_Q),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.C$$f_i.$_Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3.__81X__$_.H5.C$$f_i.ecVY0A),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3.__81X__$_.H5.C$$f_i.ecVY0A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.___._acon),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.___._acon'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.___.WAoaKW$qX),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.___.WAoaKW$qX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.___._$$e2h___$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.___._$$e2h___$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.A._qVj),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.A._qVj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.A.$2bQ79$5_W),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.A.$2bQ79$5_W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.A.$key),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.A.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.$q.$v85Y$z$es_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.$q.$v85Y$z$es_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.$q.Xa___defi),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.$q.Xa___defi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.rm.$q.$__hAJ_NYe1),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.rm.$q.$__hAJ_NYe1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.ER.D),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.ER.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.ER.$valueOf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.ER.$valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.ER.I43),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.ER.I43'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g._X$Yd9.C$0Bp),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g._X$Yd9.C$0Bp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g._X$Yd9.QErY_en__d),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g._X$Yd9.QErY_en__d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g._X$Yd9.Y$aD),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g._X$Yd9.Y$aD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.D1_$_.y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.D1_$_.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.D1_$_.$4c3j),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.D1_$_.$4c3j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.ytpz$0g.D1_$_.$_YyP_7),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.ytpz$0g.D1_$_.$_YyP_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._7Lmr$$.S),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._7Lmr$$.S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._7Lmr$$.a1$7_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._7Lmr$$.a1$7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._7Lmr$$.z0_4),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._7Lmr$$.z0_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._T1p._$Cvd_d_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._T1p._$Cvd_d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._T1p._gYE9$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._T1p._gYE9$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._T1p._$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._T1p._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._eb_ir.A),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._eb_ir.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._eb_ir.$$_6ZVH),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._eb_ir.$$_6ZVH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._$3_.$$zZx._eb_ir.VgK__f26$D),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._$3_.$$zZx._eb_ir.VgK__f26$D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._$C.__57278_2$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._$C.__57278_2$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._$C._),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._$C._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._$C.b8oE$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._$C.b8oE$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._E5.k4_nN),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._E5.k4_nN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._E5.CYsj_A3M),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._E5.CYsj_A3M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString._E5._y_xa1_$$$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString._E5._y_xa1_$$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString.___w.whsW),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString.___w.whsW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString.___w.Ame6$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString.___w.Ame6$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._._toString.___w.qL_Y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._._toString.___w.qL_Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.dS_W7_66.DV_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.dS_W7_66.DV_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.dS_W7_66._e),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.dS_W7_66._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.dS_W7_66._Qe$TLZgf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.dS_W7_66._Qe$TLZgf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b._pro.$Y_v),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b._pro.$Y_v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b._pro.$4M$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b._pro.$4M$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b._pro.$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b._pro.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.p_is._2s),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.p_is._2s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.p_is.Ww),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.p_is.Ww'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.b.p_is.Bkey),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.b.p_is.Bkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.aHz_B.m$$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.aHz_B.m$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.aHz_B.JXs),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.aHz_B.JXs'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.aHz_B.xi),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.aHz_B.xi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.c__de.Q),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.c__de.Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.c__de.hQlSW$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.c__de.hQlSW$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.c__de.d2),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.c__de.d2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.$XWz0$__.Cref),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.$XWz0$__.Cref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.$XWz0$__.d),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.$XWz0$__.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:'].b8_$52$3._.e$l6.$XWz0$__.vEQ__4V2),
      // @ts-ignore
      i18next.t('B5R_$_$$l:b8_$52$3._.e$l6.$XWz0$__.vEQ__4V2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.U6$.dlength_$a),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.U6$.dlength_$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.U6$.BvalueOf),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.U6$.BvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.U6$._Ue$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.U6$._Ue$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.cref.$2K0_$_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.cref.$2K0_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.cref.$$1_p$$n7$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.cref.$$1_p$$n7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS.cref._RX),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS.cref._RX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS._$._v0___),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS._$._v0___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS._$.$jS),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS._$.$jS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.Q_caleS._$._m$9Ue_W),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.Q_caleS._$._m$9Ue_W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.D$$7m$_O$k._g_4$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.D$$7m$_O$k._g_4$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.D$$7m$_O$k.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.D$$7m$_O$k.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.D$$7m$_O$k.$_4_$4H),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.D$$7m$_O$k.$_4_$4H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.a_XG.Kf__N40$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.a_XG.Kf__N40$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.a_XG.A$E3),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.a_XG.A$E3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.a_XG.l$9d4e3ow_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.a_XG.l$9d4e3ow_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.Q32$XnC.$_a_Z3$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.Q32$XnC.$_a_Z3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.Q32$XnC.Y3$$5e),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.Q32$XnC.Y3$$5e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a.a$$.Q32$XnC.$z_A),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a.a$$.Q32$XnC.$z_A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Bo$$c_.xfUA),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Bo$$c_.xfUA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Bo$$c_.$D89I5c_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Bo$$c_.$D89I5c_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Bo$$c_.MZ__m$$Y6),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Bo$$c_.MZ__m$$Y6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw._w_.Y$Od$t),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw._w_.Y$Od$t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw._w_._n1$2Jt_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw._w_._n1$2Jt_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw._w_.$ookuy_$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw._w_.$ookuy_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Wrep.$7$7_Qv$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Wrep.$7$7_Qv$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Wrep.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Wrep.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.$a._Aw.Wrep.a$$P),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.$a._Aw.Wrep.a$$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$$_$O_.$z1),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$$_$O_.$z1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$$_$O_.b),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$$_$O_.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$$_$O_.t00D),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$$_$O_.t00D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.A_8$$rotpr.cx12),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.A_8$$rotpr.cx12'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.A_8$$rotpr.Mpx),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.A_8$$rotpr.Mpx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.A_8$$rotpr.woS),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.A_8$$rotpr.woS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$CERC_$$.$___),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$CERC_$$.$___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$CERC_$$.$V1$Q8cAZ$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$CERC_$$.$V1$Q8cAZ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z._17Z$s_f.$CERC_$$._f),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z._17Z$s_f.$CERC_$$._f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._r$._$C_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._r$._$C_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._r$._eGb),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._r$._eGb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._r$.__on),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._r$.__on'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._$A$X7._),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._$A$X7._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._$A$X7.$G),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._$A$X7.$G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._$A$X7.V_oc),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._$A$X7.V_oc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._2.l_$2),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._2.l_$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._2.C),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._2.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.Mu$$n76O._2.Z1_u$5n$_N),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.Mu$$n76O._2.Z1_u$5n$_N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$.Is56D.yle),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$.Is56D.yle'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$.Is56D.q),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$.Is56D.q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$.Is56D._0$3Kj$P$88),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$.Is56D._0$3Kj$P$88'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._3d.c$3_$$m),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._3d.c$3_$$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._3d._A),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._3d._A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._3d.$$_$1G),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._3d.$$_$1G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._Kg_P_.$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._Kg_P_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._Kg_P_.$__proto__),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._Kg_P_.$__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3._$Il$$_Z.$_o$._Kg_P_.hw0Y),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3._$Il$$_Z.$_o$._Kg_P_.hw0Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.__$2$$.C$2i___),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.__$2$$.C$2i___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.__$2$$.c),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.__$2$$.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.__$2$$.$_x_$V_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.__$2$$.$_x_$V_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.X_7.m9_D_$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.X_7.m9_D_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.X_7._is),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.X_7._is'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.X_7.$1$DO),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.X_7.$1$DO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.$._p0Li3d__$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.$._p0Li3d__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.$.Y70_59_a),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.$.Y70_59_a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._.$._),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._.$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P.ce.V_B$0c_$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P.ce.V_B$0c_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P.ce.p$v__r$_011),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P.ce.p$v__r$_011'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P.ce.K$$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P.ce.K$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._bz_3_94G$.u322cCbD),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._bz_3_94G$.u322cCbD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._bz_3_94G$.X_P),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._bz_3_94G$.X_P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._bz_3_94G$.$RXql$___),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._bz_3_94G$.$RXql$___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._.Yey),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._.Yey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._.Ald$c),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._.Ald$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._2P._.$0g$nM),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._2P._.$0g$nM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.D9.xYc2j),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.D9.xYc2j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.D9._$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.D9._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.D9.$$_36$_W1P$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.D9.$$_36$_W1P$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c86$V__Dj13.B2Yw),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c86$V__Dj13.B2Yw'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c86$V__Dj13.$prototype),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c86$V__Dj13.$prototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c86$V__Dj13.cm1$),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c86$V__Dj13.cm1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c$X6n$$X_6$.E),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c$X6n$$X_6$.E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c$X6n$$X_6$.nA_),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c$X6n$$X_6$.nA_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['B5R_$_$$l:']._3.a._$Ck.c$X6n$$X_6$._$va),
      // @ts-ignore
      i18next.t('B5R_$_$$l:_3.a._$Ck.c$X6n$$X_6$._$va'),
    )

  })
})
