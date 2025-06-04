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

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-07❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.J__51BQ._Y$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.J__51BQ._Y$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.J__51BQ.$_O_2R_nr_E),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.J__51BQ.$_O_2R_nr_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.J__51BQ.Cgd),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.J__51BQ.Cgd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.g$.p_0_3CaF2Ib),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.g$.p_0_3CaF2Ib'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.g$.A),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.g$.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.g$.X),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.g$.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.f$$Y_$.$__l),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.f$$Y_$.$__l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.f$$Y_$.$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.f$$Y_$.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._vep.f$$Y_$.a__$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._vep.f$$Y_$.a__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.mA$__.XdNx$l),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.mA$__.XdNx$l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.mA$__.W),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.mA$__.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.mA$__.e_9_fy62$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.mA$__.e_9_fy62$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC._V_GQ_.vz_Y),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC._V_GQ_.vz_Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC._V_GQ_._),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC._V_GQ_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC._V_GQ_._bv),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC._V_GQ_._bv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.w.$$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.w.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.w.x$$6_$_2RM),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.w.x$$6_$_2RM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c.$BC.w.bprope),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c.$BC.w.bprope'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.B.S5),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.B.S5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.B.ztoString),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.B.ztoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.B.__1),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.B.__1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._._z_OLk__C$v.$ca),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._._z_OLk__C$v.$ca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._._z_OLk__C$v.aP_VF0),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._._z_OLk__C$v.aP_VF0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._._z_OLk__C$v.$0),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._._z_OLk__C$v.$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.$9D$_w3._e),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.$9D$_w3._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.$9D$_w3.__),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.$9D$_w3.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.c._.$9D$_w3.dJ_X),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.c._.$9D$_w3.dJ_X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.X_6.a_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.X_6.a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.X_6._fB),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.X_6._fB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.X_6.Z2_$$c_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.X_6.Z2_$$c_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$_CY.O),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$_CY.O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$_CY._b),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$_CY._b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$_CY.vSX_E_0$1y$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$_CY.vSX_E_0$1y$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$d53_v.A_vu_Q__pro),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$d53_v.A_vu_Q__pro'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$d53_v.$U$6$_44_x),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$d53_v.$U$6$_44_x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.CU$m$qEg3.$d53_v.$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.CU$m$qEg3.$d53_v.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.v.$__p),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.v.$__p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.v._),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.v._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.v.f$dtoLoca),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.v.f$dtoLoca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.Y.$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.Y.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.Y.b2G$$__E),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.Y.b2G$$__E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.Y.$ref),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.Y.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.I.aarguments),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.I.aarguments'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.I.$$__Q),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.I.$$__Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW.d5n_.I.y$N__ZJG$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW.d5n_.I.y$N__ZJG$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.$Y.$U),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.$Y.$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.$Y._as),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.$Y._as'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.$Y._78_i8L),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.$Y._78_i8L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E932__g.EaLZ6j_b_b),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E932__g.EaLZ6j_b_b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E932__g.$grM),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E932__g.$grM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E932__g.svalueOf),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E932__g.svalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E8__$I1k.$$UR39),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E8__$I1k.$$UR39'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E8__$I1k.cy5oSfinin),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E8__$I1k.cy5oSfinin'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.bW._.E8__$I1k.DCm_ZQFO$a_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.bW._.E8__$I1k.DCm_ZQFO$a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.LgBw38x__),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.LgBw38x__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.Wj$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.Wj$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.d_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.a7$uFa_.d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.N$.Q5Lq__lf$_$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.N$.Q5Lq__lf$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.N$.eq$H2t$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.N$.eq$H2t$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.N$.__t),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.N$.__t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.W_g_ot8__),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.W_g_ot8__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.W_87),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.W_87'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.$etR$$h),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.pZw$5$d_l_.$$key1aGDv.$etR$$h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.pK_.vZz96YG$T),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.pK_.vZz96YG$T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.pK_._$$0),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.pK_._$$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.pK_.$R0ca),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.pK_.$R0ca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.o9U$$_.A$sjFUA$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.o9U$$_.A$sjFUA$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.o9U$$_._dH),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.o9U$$_._dH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.o9U$$_.kD_e0C$$GJ),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.o9U$$_.kD_e0C$$GJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.$__o8$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.$__o8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.xp$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.xp$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.D3O_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B._W$bZM9$$__.$$U___ppFm.D3O_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$DV_8wbdC_v._),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$DV_8wbdC_v._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$DV_8wbdC_v.e__pr),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$DV_8wbdC_v.e__pr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$DV_8wbdC_v.$$),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$DV_8wbdC_v.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$57to.$_),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$57to.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$57to.x_na5),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$57to.x_na5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString.$57to.yRVwM),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString.$57to.yRVwM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString._.A__bRx),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString._.A__bRx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString._.X34D_z6E___),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString._.X34D_z6E___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.Bname.a1$$B.etoString._.$_dBLC),
      // @ts-ignore
      i18next.t('Jb__H:_.Bname.a1$$B.etoString._.$_dBLC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.P0o$.$H$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.P0o$.$H$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.P0o$.YD_$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.P0o$.YD_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.P0o$.w_$FTyI),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.P0o$.w_$FTyI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.w_7_.a$_5Ow2),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.w_7_.a$_5Ow2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.w_7_._),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.w_7_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.w_7_.xe2$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.w_7_.xe2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.C_$__._1),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.C_$__._1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.C_$__.d6bk),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.C_$__.d6bk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$._1_$7_.C_$__.ckey),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$._1_$7_.C_$__.ckey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.nc_3_$1_$$.$name),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.nc_3_$1_$$.$name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.nc_3_$1_$$.$2u),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.nc_3_$1_$$.$2u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.nc_3_$1_$$._),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.nc_3_$1_$$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co._.$_$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co._.$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co._.$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co._.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co._.D$L6_jGMrf),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co._.D$L6_jGMrf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.$.__),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.$.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.$._9),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.$._9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.e_$co.$.Q$_E_6e),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.e_$co.$.Q$_E_6e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.$3$X_e_.$23),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.$3$X_e_.$23'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.$3$X_e_.S05$$_jG_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.$3$X_e_.S05$$_jG_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.$3$X_e_.$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.$3$X_e_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.H__p.Okey),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.H__p.Okey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.H__p.Tr$O76$8$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.H__p.Tr$O76$8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.H__p.c_Q),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.H__p.c_Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.z2__.OW),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.z2__.OW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.z2__.k_$_5_R$$$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.z2__.k_$_5_R$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.B$.$_KT__X$.z2__.ep_jXI__),
      // @ts-ignore
      i18next.t('Jb__H:_._D.B$.$_KT__X$.z2__.ep_jXI__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._5.CCLth),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._5.CCLth'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._5.w_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._5.w_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._5.$i_$F1d__),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._5.$i_$F1d__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv.$$$.$0dU39_w_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv.$$$.$0dU39_w_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv.$$$.$E__b$_B),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv.$$$.$E__b$_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv.$$$.___),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv.$$$.___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._W.P),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._W.P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._W.$is),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._W.$is'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.CSjxAv._W._name),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.CSjxAv._W._name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.A.___de),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.A.___de'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.A.$_xQ_$_$$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.A.$_xQ_$_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.A.vmT),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.A.vmT'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.dV.xO$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.dV.xO$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.dV._),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.dV._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.dV.$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.dV.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.E_$.t$$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.E_$.t$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.E_$.s),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.E_$.s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8.$C_1b$vDE.E_$.$$L_6_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8.$C_1b$vDE.E_$.$$L_6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.LQl$k1$.y$FxF$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.LQl$k1$.y$FxF$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.LQl$k1$.M),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.LQl$k1$.M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.LQl$k1$.F),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.LQl$k1$.F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.K._S),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.K._S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.K.B34),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.K.B34'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.K.$4e),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.K.$4e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.$.$r$oU),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.$.$r$oU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.$.$hsOj6Q),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.$.$hsOj6Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.aOs8._K___1_Tl.$.gvalueOf),
      // @ts-ignore
      i18next.t('Jb__H:_._D.aOs8._K___1_Tl.$.gvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_._gt_C._uA),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_._gt_C._uA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_._gt_C.Xapply),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_._gt_C.Xapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_._gt_C._),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_._gt_C._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.__.$_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.__.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.__._$b_p),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.__._$b_p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.__.$$___03),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.__.$$___03'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.aB6.Ye),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.aB6.Ye'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.aB6._5),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.aB6._5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.YK5d_.aB6._Yws$$_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.YK5d_.aB6._Yws$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.E_6.f$b_a$_9a),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.E_6.f$b_a$_9a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.E_6._3),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.E_6._3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.E_6.e3$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.E_6.e3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.__r.$_d),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.__r.$_d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.__r.Ae),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.__r.Ae'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.__r.E6HUD$P),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.__r.E6HUD$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.cbind.x$_Dk),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.cbind.x$_Dk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.cbind.W_a9$v$_H5_),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.cbind.W_a9$v$_H5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_._c$x.cbind._$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_._c$x.cbind._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$g_4._t318$$1_y$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$g_4._t318$$1_y$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$g_4.F_3),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$g_4.F_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$g_4.h_H4),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$g_4.h_H4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$$.CA),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$$.CA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$$.Xx$0),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$$.Xx$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$$.n592Z),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$$.n592Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$ref.b0__3),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$ref.b0__3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$ref.f72),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$ref.f72'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._._D.Q__m_5$_.$nW9Z6W.$ref.xC1w_lC$),
      // @ts-ignore
      i18next.t('Jb__H:_._D.Q__m_5$_.$nW9Z6W.$ref.xC1w_lC$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$length.Fxc),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$length.Fxc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$length.MsB_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$length.MsB_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$length._9JV_5$_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$length._9JV_5$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.DhasOwn._0e_p_6v_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.DhasOwn._0e_p_6v_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.DhasOwn.d$__$I$$Iv$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.DhasOwn.d$__$I$$Iv$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.DhasOwn.x$_0$_h),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.DhasOwn.x$_0$_h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$.Defc),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$.Defc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$.V_3Zx$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$.V_3Zx$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s.Ekey.$.$x),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s.Ekey.$.$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._con._),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._con._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._con._con),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._con._con'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._con._$_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._con._$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.W$86_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.W$86_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.xKy$$3F_$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.xKy$$3F_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.q$5i$$S$s$p),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$._$e$p.q$5i$$S$s$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.Qo_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.Qo_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.Bb_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.Bb_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.___f_qEmq7S),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._8$Xw8_9$c$.x4C$.___f_qEmq7S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$$$._6PM26),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$$$._6PM26'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$$$.b),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$$$.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$$$.A6),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$$$.A6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$p_$.$_5),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$p_$.$_5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$p_$._18),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$p_$._18'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.$p_$.b),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.$p_$.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.__.E$$Fo1w_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.__.E$$Fo1w_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.__.Yb7),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.__.Yb7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.$z_T$$$s._7_D7.__.E$1B3w029),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.$z_T$$$s._7_D7.__.E$1B3w029'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.E__Yi$$._D6),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.E__Yi$$._D6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.E__Yi$$.Db),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.E__Yi$$.Db'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.E__Yi$$.Gn),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.E__Yi$$.Gn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.Y00$2_V_6$.O$0C),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.Y00$2_V_6$.O$0C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.Y00$2_V_6$._9M_b),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.Y00$2_V_6$._9M_b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.Y00$2_V_6$.$_Zn),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.Y00$2_V_6$.$_Zn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.b.t6Y),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.b.t6Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.b.$8_TuQ2r_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.b.$8_TuQ2r_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.b2m6Ds$mE.b.AD),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.b2m6Ds$mE.b.AD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._bind.D$_0),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._bind.D$_0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._bind.si6P),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._bind.si6P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._bind.$c$$$$o3__),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._bind.$c$$$$o3__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08.$.EdRm_6),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08.$.EdRm_6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08.$.$$86o),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08.$.$$86o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08.$.g8),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08.$.g8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._$n_3_._b3),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._$n_3_._b3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._$n_3_.E8Wn_w2J),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._$n_3_.E8Wn_w2J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e.o_0$Dw08._$n_3_.$D7$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e.o_0$Dw08._$n_3_.$D7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ckey._q),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ckey._q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ckey.aca),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ckey.aca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ckey._r7d$em$r),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ckey._r7d$em$r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ekF$_Y_.$_$80t),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ekF$_Y_.$_$80t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ekF$_Y_.NHzO),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ekF$_Y_.NHzO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_.ekF$_Y_._to),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_.ekF$_Y_._to'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_._$_BFTG$._t),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_._$_BFTG$._t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_._$_BFTG$.$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_._$_BFTG$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y._e._KE_._$_BFTG$._),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y._e._KE_._$_BFTG$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.frefb3e$a._key),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.frefb3e$a._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.frefb3e$a._C2$l_m_211),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.frefb3e$a._C2$l_m_211'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.frefb3e$a.$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.frefb3e$a.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.L$c1h8_xY.Aw),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.L$c1h8_xY.Aw'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.L$c1h8_xY.$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.L$c1h8_xY.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.L$c1h8_xY.eo_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.L$c1h8_xY.eo_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.Cd_J6A3.VnT),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.Cd_J6A3.VnT'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.Cd_J6A3.cC$7$1cx),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.Cd_J6A3.cC$7$1cx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.$.Cd_J6A3.M_hA$_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.$.Cd_J6A3.M_hA$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.$BW.$r_9),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.$BW.$r_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.$BW.__$7$_cKg),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.$BW.__$7$_cKg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.$BW.$2O),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.$BW.$2O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.cref.$x),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.cref.$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.cref.ve_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.cref.ve_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.cref.h$$5__ab),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.cref.h$$5__ab'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.H__l.VvalueOf_Q),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.H__l.VvalueOf_Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.H__l.W8leng),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.H__l.W8leng'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K._4$.H__l._Cj92$E_$$$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K._4$.H__l._Cj92$E_$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$apply.___886d),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$apply.___886d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$apply.$BH0_1$_),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$apply.$BH0_1$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$apply.nCXK_Lj),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$apply.nCXK_Lj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$0.d),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$0.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$0.dapply),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$0.dapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.$0.$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.$0.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.V.$s2sjD8$K$),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.V.$s2sjD8$K$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.V.wrefawcall3),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.V.wrefawcall3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._.$Y.sd95_K.___Ac.V._D__$6otref),
      // @ts-ignore
      i18next.t('Jb__H:_.$Y.sd95_K.___Ac.V._D__$6otref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.$a.__h),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.$a.__h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.$a.Cb$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.$a.Cb$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.$a._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.$a._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.k7$.ua),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.k7$.ua'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.k7$.d),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.k7$.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.k7$._x0_6),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.k7$._x0_6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.x$b.$$Z_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.x$b.$$Z_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.x$b.$GAx_E),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.x$b.$GAx_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$D$_S_39fue.x$b.b_$s$69__U),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$D$_S_39fue.x$b.b_$s$69__U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.__z_.O),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.__z_.O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.__z_.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.__z_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.__z_.o$0$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.__z_.o$0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$___loo.gcaller),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$___loo.gcaller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$___loo.r$sz),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$___loo.r$sz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$___loo.te$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$___loo.te$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$p._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$p._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$p.$xpo),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$p.$xpo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.$.$p.khH5),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.$.$p.khH5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q.$._E),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q.$._E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q.$.E$_8),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q.$.E$_8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q.$.Wy$7A5),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q.$.Wy$7A5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._ro.A0F$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._ro.A0F$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._ro.B0c52),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._ro.B0c52'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._ro.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._ro.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._.$$$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._.$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._._q__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._._q__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__._.E_Q._.D_CV$0i$O_t),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__._.E_Q._.D_CV$0i$O_t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.$F),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.$F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.$_9),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.$_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.__5$$zp4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.wva.__5$$zp4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_.W),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_._key),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_._toS),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.V_$$5KR_._toS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5.__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5.D$a_4B),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5.D$a_4B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5._6__7$$eK$y),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$._t_O__Q_.vjW5._6__7$$eK$y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$_a$.g),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$_a$.g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$_a$.___),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$_a$.___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$_a$.Q),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$_a$.Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$key.bref),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$key.bref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$key.Mkey),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$key.Mkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.$key.C0YB),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.$key.C0YB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.E.y),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.E.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.E.MH_Hv$75),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.E.MH_Hv$75'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.C.E._$$0),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.C.E._$$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.$$u1.z$6Y6_S$_4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.$$u1.z$6Y6_S$_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.$$u1.$H8$$i),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.$$u1.$H8$$i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.$$u1.GE),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.$$u1.GE'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.$$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.$__Y12IRk),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.DVya3L$.$__Y12IRk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.G_.yK$_$8Iqe$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.G_.yK$_$8Iqe$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.G_._o_toString),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.G_._o_toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.yy$$_$.d$.G_.R),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.yy$$_$.d$.G_.R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.D.c8$_V),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.D.c8$_V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.D.d68x1),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.D.d68x1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.D.X$9),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.D.X$9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.ecM0kl.xt),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.ecM0kl.xt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.ecM0kl._key),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.ecM0kl._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev.ecM0kl.e),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev.ecM0kl.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev._cN4_$._j_cbYjc$_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev._cN4_$._j_cbYjc$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev._cN4_$._refisProto),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev._cN4_$._refisProto'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii._qnamev._cN4_$._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii._qnamev._cN4_$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$._._name),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$._._name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$._.WJK7_ff),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$._.WJK7_ff'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$._.V1ac$j),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$._.V1ac$j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_._b3F$66),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_._b3F$66'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_.D),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.dh3h$$O$B_.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.S),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.H$T5__bbzNq),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.H$T5__bbzNq'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.g__$etS0W3$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.$$T63$Q$.LKY.g__$etS0W3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v._valungthC),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v._valungthC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v.__$_lyt),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v.__$_lyt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v.L),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.__bUi1_$_v.L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.C2t9r_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.C2t9r_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.yHi_pfW_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.yHi_pfW_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.E6n4u$a_$_3),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$ref.E6n4u$a_$_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.W90_SI_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.W90_SI_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.Cc_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.Cc_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.$1__V_9uk),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.P$b$18__3__.Ii.uNUe$$_PW.$__B.$1__V_9uk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.Dapply._3),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.Dapply._3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.Dapply.$$$$_G0),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.Dapply.$$$$_G0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.Dapply.Cw),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.Dapply.Cw'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z._bi.Aprototype),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z._bi.Aprototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z._bi._ap),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z._bi._ap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z._bi.DsOwnPro),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z._bi.DsOwnPro'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.zE_.o),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.zE_.o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.zE_.W_caeabind),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.zE_.W_caeabind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._1$Z.zE_.oY$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._1$Z.zE_.oY$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD.qz),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD.qz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD.Wv7$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.y_$z_$_dD.Wv7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y.AXMZiH),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y.AXMZiH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y._vv),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y._vv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.Y.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al._S),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al._S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al.$$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al.__$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_._qW9cX_5_f.$_al.__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.U),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.__$j5LzX$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.__$j5LzX$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.$$K),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e$95$8$G.$$K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$._length),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$._length'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$.$_4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$.$_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$.Cn5$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.e8$aBH8_v_$.Cn5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.$structor__.$5621O6__lo),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.$structor__.$5621O6__lo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.$structor__.b3$b$$$Z2v),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.$structor__.b3$b$$$Z2v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.v$xeD37_.skey.$structor__.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.v$xeD37_.skey.$structor__.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._RNaC$s$K3h.X),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._RNaC$s$K3h.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._RNaC$s$K3h._eI$8z),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._RNaC$s$K3h._eI$8z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._RNaC$s$K3h._ty),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._RNaC$s$K3h._ty'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._$_s5_x.eD),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._$_s5_x.eD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._$_s5_x.EtoString),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._$_s5_x.EtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_._$_s5_x.$_M),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_._$_s5_x.$_M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_.$$9_$$42J.D$6$$o_79i),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_.$$9_$$42J.D$6$$o_79i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_.$$9_$$42J.Y1cF_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_.$$9_$$42J.Y1cF_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.__V_.$$9_$$42J.$caller),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.__V_.$$9_$$42J.$caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J._hz_$D$$x.$_1s),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J._hz_$D$$x.$_1s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J._hz_$D$$x._E$_L88$H_m),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J._hz_$D$$x._E$_L88$H_m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J._hz_$D$$x.y),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J._hz_$D$$x.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.D4$._$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.D4$._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.D4$.$Cn),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.D4$.$Cn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.D4$.v$hbT_G2$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.D4$.v$hbT_G2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.X._va),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.X._va'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.X.Dapp),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.X.Dapp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.R_H$J.X.$5$brname$_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.R_H$J.X.$5$brname$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.N$6$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.N$6$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.$2__$W$$_I4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.$2__$W$$_I4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.$$$8uG),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.X$$1.$$$8uG'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.A_$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.A_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.$Up_$H3eg$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.$Up_$H3eg$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.x$U__5_Xk_4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.$G79_O__$.x$U__5_Xk_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.GaS$Y2q),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.GaS$Y2q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.$key),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.E$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_._t.Ho_l4V_4eT$.v_fe0_$Z4.E$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.I98_._length),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.I98_._length'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.I98_.$xr_2$gv_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.I98_.$xr_2$gv_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.I98_._$$A2),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.I98_._$$A2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$toString.E$g5t_d),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$toString.E$g5t_d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$toString.D9$$67),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$toString.D9$$67'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$toString.$E_t_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$toString.$E_t_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$.$5$$7O_$_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$.$5$$7O_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$.d1$_2),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$.d1$_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$bi.$.$8bd8),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$bi.$.$8bd8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.YZ3.M_$_G0$s68),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.YZ3.M_$_G0$s68'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.YZ3.z$3),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.YZ3.z$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.YZ3.yz),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.YZ3.yz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.$5.xEif),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.$5.xEif'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.$5.Vva),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.$5.Vva'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t.$5.$$C62),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t.$5.$$C62'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t._cS._$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t._cS._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t._cS.$p7yjS),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t._cS.$p7yjS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.BYr1_6t._cS.$G$k_$_F),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.BYr1_6t._cS.$G$k_$_F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.$4oYU_6YoI),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.$4oYU_6YoI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.$ref),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.E$TPx0r_4__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke.HT$T_pd64$.E$TPx0r_4__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._._Uck),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._._Uck'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._.$_M8B5Tgyl_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._.$_M8B5Tgyl_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._$w.W$whlt12$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._$w.W$whlt12$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._$w.Q267i$J8_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._$w.Q267i$J8_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.DqZ_.b_.$keyindZ_ke._$w.X),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.DqZ_.b_.$keyindZ_ke._$w.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.$kS.b$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.$kS.b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.$kS._),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.$kS._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.$kS.__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.$kS.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._s),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._$bi$$_R),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._$bi$$_R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._7eIG_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9.s_T$._7eIG_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y._u94),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y._u94'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y.$n0),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y.$n0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y._dx$_$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$$_4gWD3_9._13YYr3A_Y._dx$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._$2_n91_.$37__$8$$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._$2_n91_.$37__$8$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._$2_n91_.$WE3),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._$2_n91_.$WE3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._$2_n91_.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._$2_n91_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9.a_6.V_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9.a_6.V_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9.a_6.b_w),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9.a_6.b_w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9.a_6.g8_C8l),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9.a_6.g8_C8l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._to._S1),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._to._S1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._to.wV7),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._to.wV7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.S9._to.z__ey___p),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.S9._to.z__ey___p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$._.Z_De_$_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$._.Z_De_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$._.$B0C51$_D),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$._.$B0C51$_D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$._.__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$._.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.k),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.lx_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.lx_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.X),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$Y__e$jQ$Ft.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$__.$I_$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$__.$I_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$__.H6),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$__.H6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.b1a.$x$.$__.Bref),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.b1a.$x$.$__.Bref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.t$J3_yB_.vc),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.t$J3_yB_.vc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.t$J3_yB_.eSt_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.t$J3_yB_.eSt_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.t$J3_yB_._toString),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.t$J3_yB_._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.E_i$$.c_Nt),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.E_i$$.c_Nt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.E_i$$.e_7),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.E_i$$.e_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E.E_i$$.Bca),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E.E_i$$.Bca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E._JDX_V_0.__t),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E._JDX_V_0.__t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E._JDX_V_0._X9c__b$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E._JDX_V_0._X9c__b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.E._JDX_V_0.$ro),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.E._JDX_V_0.$ro'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.Aet.Z8Y$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.Aet.Z8Y$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.Aet.a__H$07$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.Aet.a__H$07$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.Aet.XvalueOf),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.Aet.XvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$4.$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$4.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$4.$_92_h_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$4.$_92_h_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$4.fb$YE__F_$$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$4.fb$YE__F_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$.d_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$.d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$.T),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$.T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.___p_rvV$m.$._gyYW1y),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.___p_rvV$m.$._gyYW1y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.__AW0I$$52),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.__AW0I$$52'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.$t6Ak3X),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.$t6Ak3X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.Fvp9_zZ3y),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.ack_93$_Z$.Fvp9_zZ3y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.Db$j.$X_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.Db$j.$X_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.Db$j.$$z_9_9),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.Db$j.$$z_9_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.Db$j.b$1C),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.Db$j.b$1C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.__nP.$$L),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.__nP.$$L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.__nP.$3Q76Sn$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.__nP.$3Q76Sn$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.C2u.wx$3_.__nP.___$2),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.C2u.wx$3_.__nP.___$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.s_.XB72$_$$s4),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.s_.XB72$_$$s4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.s_.aTel_$p),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.s_.aTel_$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.s_._A$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.s_._A$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q._ca.$_n),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q._ca.$_n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q._ca.$$_u6__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q._ca.$$_u6__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q._ca._5),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q._ca._5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I._6_1Km_$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I._6_1Km_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I.i25d),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I.i25d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I._$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$._X8Q.PKtY80y8I._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.eE.Q730),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.eE.Q730'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.eE._D),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.eE._D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.eE.a$x$6psf__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.eE.a$x$6psf__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.V1I_Ya65),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.V1I_Ya65'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.Z__1),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.Z__1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.$aZSI_oo6),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.Z_p.$aZSI_oo6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.$__$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.$__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.$_F8$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.$_F8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.d),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.y4$$__.W1_Fy_s$$O.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$ca._o__),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$ca._o__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$ca.$_206oz),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$ca.$_206oz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$ca.bH_H8_$ol),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$ca.bH_H8_$ol'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.$2caller),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.$2caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.d),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.H6U__3__M),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.$_O$$A6jD4.H6U__3__M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.$S_9_J$_$),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.$S_9_J$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.$KC12R_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.$KC12R_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:']._0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.e3_),
      // @ts-ignore
      i18next.t('Jb__H:_0__2_.$uGo_.$_$__6_$.ae$4_.D_jpy$J$_e.e3_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.__cB._),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.__cB._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.__cB.___71_P_Q),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.__cB.___71_P_Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.__cB.D$0jlsVs),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.__cB.D$0jlsVs'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.v_X$v0._we),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.v_X$v0._we'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.v_X$v0._8O$lf),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.v_X$v0._8O$lf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835.v_X$v0.L),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835.v_X$v0.L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835._.E_3$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835._.E_3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835._._3b),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835._._3b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6.y_$$$835._._),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6.y_$$$835._._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._Vl$.$$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._Vl$.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._Vl$.q7p),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._Vl$.q7p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._Vl$.oF),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._Vl$.oF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname.__tA.bb),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname.__tA.bb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname.__tA.Ycu$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname.__tA.Ycu$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname.__tA.zm_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname.__tA.zm_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._7_$r.B4$u_T$$_c3),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._7_$r.B4$u_T$$_c3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._7_$r.$key),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._7_$r.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._ructorname._7_$r.Skey),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._ructorname._7_$r.Skey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.$__0e7b.x__),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.$__0e7b.x__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.$__0e7b.S2x_0),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.$__0e7b.S2x_0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.$__0e7b._$v2),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.$__0e7b._$v2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.happly.$key),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.happly.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.happly._caller),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.happly._caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._.happly._UG$h1w_0),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._.happly._UG$h1w_0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._._$25.$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._._$25.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._._$25.Qt),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._._$25.Qt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i._d$RZq_6._._$25._o$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i._d$RZq_6._._$25._o$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__._S__$.X),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__._S__$.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__._S__$.s$$c$A),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__._S__$.s$$c$A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__._S__$.ana),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__._S__$.ana'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.e$__0Fx1d._$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.e$__0Fx1d._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.e$__0Fx1d.Xre_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.e$__0Fx1d.Xre_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.e$__0Fx1d.$$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.e$__0Fx1d.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.Y_R$._329_hR5),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.Y_R$._329_hR5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.Y_R$._D6),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.Y_R$._D6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._$I1__.Y_R$.$Bhf$_$82cS),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._$I1__.Y_R$.$Bhf$_$82cS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.Z$.$12BQ_ab$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.Z$.$12BQ_ab$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.Z$._iB),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.Z$._iB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.Z$._O$U),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.Z$._O$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.$length.cWE$$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.$length.cWE$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.$length.AUV$d$wl),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.$length.AUV$d$wl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.$length.Da_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.$length.Da_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_._B___de),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_._B___de'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_.___$leng),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_.___$leng'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_._toString),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw.JHA3Y_.A$$n$uD$_$_._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.qx38L$.u$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.qx38L$.u$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.qx38L$.eYo__Vb),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.qx38L$.eYo__Vb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.qx38L$.cDqlo),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.qx38L$.cDqlo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.BSm.JsD_o6),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.BSm.JsD_o6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.BSm.$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.BSm.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_.BSm.zz6_T$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_.BSm.zz6_T$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_._LP_sJ.A_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_._LP_sJ.A_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_._LP_sJ.b_),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_._LP_sJ.b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.z_e2Uw._r_._LP_sJ.W5),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.z_e2Uw._r_._LP_sJ.W5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._$wM.a),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._$wM.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._$wM.Y),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._$wM.Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._$wM.JE_1),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._$wM.JE_1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._U.$___h),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._U.$___h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._U.Bg_$_B),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._U.Bg_$_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R._U.A_3),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R._U.A_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R.$R5_H8$__8._t83n$E$5$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R.$R5_H8$__8._t83n$E$5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R.$R5_H8$__8._ke),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R.$R5_H8$__8._ke'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$_2$$R.$R5_H8$__8.$length),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$_2$$R.$R5_H8$__8.$length'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.B_i.$_yh),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.B_i.$_yh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.B_i.z),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.B_i.z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.B_i.H7Yk1),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.B_i.H7Yk1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$._3.$6$3),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$._3.$6$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$._3._x1sEn),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$._3._x1sEn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$._3.VM__0),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$._3.VM__0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.$.dpoLQ$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.$.dpoLQ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.$.ee),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.$.ee'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.$.$.u0),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.$.$.u0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.jB_YUX8y9$9.o88),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.jB_YUX8y9$9.o88'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.jB_YUX8y9$9._2Zf$C$76eI),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.jB_YUX8y9$9._2Zf$C$76eI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.jB_YUX8y9$9._),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.jB_YUX8y9$9._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.Y._$l),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.Y._$l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.Y._yHdsxO1$),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.Y._yHdsxO1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8.Y.varg),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8.Y.varg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8._m__.Cnm6038),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8._m__.Cnm6038'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8._m__.ao),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8._m__.ao'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_._i.$me__.TF_prototy8._m__.$b$R_71$6),
      // @ts-ignore
      i18next.t('Jb__H:E58_._i.$me__.TF_prototy8._m__.$b$R_71$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.c$$v__Y75Uq),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.c$$v__Y75Uq'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.W_$6$_p$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.W_$6$_p$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._45pro.h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.ea5_$p),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.ea5_$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.__),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.Ecaller),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_._.Ecaller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L.iD3),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L.iD3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L._),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L._07___$z),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.p$c5$$e$_.e9__f$dCZ_L._07___$z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3.Dapply),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3.Dapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3.l$3$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3.l$3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3._name),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv.$z$$$__3._name'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.BneGe_li),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.BneGe_li'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.f$9),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.f$9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.c),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._kVu$wS.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_._E),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_._E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_.d),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_.Q__4toc6I),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.D_$_bijv._valur$_.Q__4toc6I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.e_3),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.e_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.S99_G$27xo),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.S99_G$27xo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.c$3Gox_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.ch$22_1Qj.c$3Gox_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V._$_$$_7_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V._$_$$_7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V.$1_p_rP$c),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V.$1_p_rP$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V.$Y30),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b.D$2aN_V.$Y30'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca.A_z$Z),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca.A_z$Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca._S),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca._S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca.$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._Wkkw_$NtyH.EVS7N_b._ca.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._mvF.$a),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._mvF.$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._mvF.m$3_Be9x$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._mvF.m$3_Be9x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._mvF.d_$_39),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._mvF.d_$_39'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f.j._$d_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f.j._$d_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f.j.Vmr8_0R2VZ_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f.j.Vmr8_0R2VZ_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f.j.h$av_v0xe$Z),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f.j.h$av_v0xe$Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__.dtoString),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__.dtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__.tons),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__.tons'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__._$q$$G_h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB._11f._ed_6R$__._$q$$G_h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE.$caller),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE.$caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE._),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE.KKP$$y_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.dx$oE.KKP$$y_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$.wA_3O),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$.wA_3O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$.dw_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$.dw_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$._to),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$._to'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$E._H__),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$E._H__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$E._9$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$E._9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$_c_8c.$E.$C6v_G_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$_c_8c.$E.$C6v_G_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.$r5Ln_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.$r5Ln_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.j$o),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.j$o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.X$_E$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.cWW.X$_E$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$._.$$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$._.$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$._._ED$eZ86qd),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$._._ED$eZ86qd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$._.h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$._.h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8.U0$hF$0j2),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8.U0$hF$0j2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8.F727K1$_9),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8.F727K1$_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8._U$_6s),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$.C_protoB.$A61__7_M$.$8._U$_6s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.ZBe__n_P$.__$F$L_U),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.ZBe__n_P$.__$F$L_U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.ZBe__n_P$._$SE$h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.ZBe__n_P$._$SE$h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.ZBe__n_P$.$__4),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.ZBe__n_P$.$__4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$._U.e),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$._U.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$._U.a$I_hj_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$._U.a$I_hj_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$._U.E_6_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$._U.E_6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.$m_5._4rl),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.$m_5._4rl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.$m_5._H_QLs$Q),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.$m_5._H_QLs$Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.ET_$.$m_5._R_9$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.ET_$.$m_5._R_9$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.ltoString),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.ltoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.D$B__cej$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.D$B__cej$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.y$7a),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.b__$mkf_D5T.y$7a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.j.$mk_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.j.$mk_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.j.W$b8_Avm),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.j.W$b8_Avm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.j.b67_T3m7_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.j.b67_T3m7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.$.A$11x0),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.$.A$11x0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.$.L),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.$.L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.$$0$$.$.$I),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.$$0$$.$.$I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._7$$$VCb5.$0$$015),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._7$$$VCb5.$0$$015'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._7$$$VCb5.$G56B$$n6r),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._7$$$VCb5.$G56B$$n6r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._7$$$VCb5.Z_A$$Mr_z),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._7$$$VCb5.Z_A$$Mr_z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._b$ref0.Zapply),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._b$ref0.Zapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._b$ref0.xPr),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._b$ref0.xPr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__._b$ref0.$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__._b$ref0.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__.vTd_$$v.E$sG_$_OM),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__.vTd_$$v.E$sG_$_OM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__.vTd_$$v.dZ_Du4_6N$a),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__.vTd_$$v.dZ_Du4_6N$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.$j_Sn8$$._.__.vTd_$$v.z$QyaBy9),
      // @ts-ignore
      i18next.t('Jb__H:E58_.$j_Sn8$$._.__.vTd_$$v.z$QyaBy9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c._),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c.Bloo),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c.Bloo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c.$prototype),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.a$$$$c.$prototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.D$_L_QDd0$z),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.D$_L_QDd0$z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.$caller),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.$caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.a$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.Wa$Qg$_p_0.a$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.$prototype),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.$prototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.x$I),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.x$I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.___T$ie3.E1_$7_0V_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.$_.e__proto__),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.$_.e__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.$_.$$$2M$rs),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.$_.$$$2M$rs'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.$_.W$1D),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.$_.W$1D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$.e$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$.e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$._Q),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$._Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$.T9SMJv$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ.Of_Fv$v$.T9SMJv$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb.q7),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb.q7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb._JTGpGhb7Z_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb._JTGpGhb7Z_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb.wCB__eaCzo),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.CpZ._R1_AWMb.wCB__eaCzo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_.V),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_.bv),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_.bv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_._a$lue),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.Z_wc_F$L4H_._a$lue'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.$$$I),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.$$$I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.d$2),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.d$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.CJFJ$wx.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_._r$f_6g$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_._r$f_6g$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_.W2_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_.W2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_.$vb),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.__51_uR.M_c5N.yJoUq$$_.$vb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.q6$W.__$lSe),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.q6$W.__$lSe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.q6$W.X3),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.q6$W.X3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.q6$W.r),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.q6$W.r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.b0aa),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.b0aa'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.d_$_Fue_P$N),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.d_$_Fue_P$N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.f),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.d$_8_h6$L$.f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.___8$$.$$n$tG),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.___8$$.$$n$tG'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.___8$$.H_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.___8$$.H_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.bZC98$l.___8$$.W$wCE5),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.bZC98$l.___8$$.W$wCE5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.v718z17x$.$_3h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.v718z17x$.$_3h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.v718z17x$.$0Db2),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.v718z17x$.$0Db2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.v718z17x$._n__PG),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.v718z17x$._n__PG'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key._BV$f7.h_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key._BV$f7.h_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key._BV$f7.$$7$4_4),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key._BV$f7.$$7$4_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key._BV$f7._q__$e_$w),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key._BV$f7._q__$e_$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.w._bind),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.w._bind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.w.y_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.w.y_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J._key.w.$$_s2bB4$N),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J._key.w.$$_s2bB4$N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.P_W7b$OzV.oz72Hs$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.P_W7b$OzV.oz72Hs$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.P_W7b$OzV.$C0),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.P_W7b$OzV.$C0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.P_W7b$OzV._0BM_$_6C2B),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.P_W7b$OzV._0BM_$_6C2B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.___6j_s._toStri),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.___6j_s._toStri'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.___6j_s.$7roto_eyGk),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.___6j_s.$7roto_eyGk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__.___6j_s._$g__$y_DF),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__.___6j_s._$g__$y_DF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__._2im8.$$$$Cq$i$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__._2im8.$$$$Cq$i$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__._2im8.aD2__),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__._2im8.aD2__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.J.$R__._2im8.JlD_$z_V),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.J.$R__._2im8.JlD_$z_V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.nl4.capply),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.nl4.capply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.nl4.D_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.nl4.D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.nl4.c_b_852),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.nl4.c_b_852'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N._$q_0),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N._$q_0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N.$z__),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N.$z__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N.l),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.dq_x1kbI_N.l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c.D_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c.D_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c._$dC),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c._$dC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c.enJlQW$$4),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$_.$0_$_4$$c.enJlQW$$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns.__8WH_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns.__8WH_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns.__$1$_$$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns.__$1$_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns._),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.eszE4ns._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U._NI$9._0x_2c1),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U._NI$9._0x_2c1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U._NI$9.ua3_3PA__P_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U._NI$9.ua3_3PA__P_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U._NI$9.$Sa$$$_Jj),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U._NI$9.$Sa$$$_Jj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_.___$_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_.___$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_._$$_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_.Ena),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y._H1h$U.__$mUo04_.Ena'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.dE.h),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.dE.h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.dE._sGv__2__9),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.dE._sGv__2__9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.dE.Y_Twr47f2$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.dE.Y_Twr47f2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.$$i.Av6_$g$$$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.$$i.Av6_$g$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.$$i.f_$),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.$$i.f_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.$$i.T$c_),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.$$i.T$c_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.Cto.b),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.Cto.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.Cto.rl),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.Cto.rl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['Jb__H:'].E58_.p1vR4TJ_.$Y.$.Cto.$8$w),
      // @ts-ignore
      i18next.t('Jb__H:E58_.p1vR4TJ_.$Y.$.Cto.$8$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.l$$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.l$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.GI_3$__s),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.e9$0x$E$g_.GI_3$__s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.$_f.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.$_f.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.$_f.TAm$0P$Q),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.$_f.TAm$0P$Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV.$_f._key),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV.$_f._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV._T$._V8$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV._T$._V8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV._T$.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV._T$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$0Z_mQnV._T$.Z1$A),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$0Z_mQnV._T$.Z1$A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._Z$_.Gdwe),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._Z$_.Gdwe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._Z$_._2z___H),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._Z$_._2z___H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._Z$_._1),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._Z$_._1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._ref.$E_),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._ref.$E_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._ref.$Q$I_$__$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._ref.$Q$I_$__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString._ref.pp0E2I$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString._ref.pp0E2I$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString.$oLocale.$_),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString.$oLocale.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString.$oLocale._$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString.$oLocale._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.$QtoString.$oLocale.$Z),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.$QtoString.$oLocale.$Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.d_pert._0),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.d_pert._0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.d_pert.$_4VZ4y),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.d_pert.$_4VZ4y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.d_pert.b_7tmt),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.d_pert.b_7tmt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.gpr.$__d),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.gpr.$__d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.gpr.D),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.gpr.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.gpr._$e),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.gpr._$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.$v$K$_0_b6.Bnameconstr),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.$v$K$_0_b6.Bnameconstr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.$v$K$_0_b6.xec),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.$v$K$_0_b6.xec'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.__.z$.$v$K$_0_b6.B_eynam),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.__.z$.$v$K$_0_b6.B_eynam'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._$_.b),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._$_.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._$_.x),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._$_.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._$_.V5$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._$_.V5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._.E4$F_$8_x$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._.E4$F_$8_x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._._Qnt),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._._Qnt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H._.X__proto__),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H._.X__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H.sP_2Kc_s7__._0),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H.sP_2Kc_s7__._0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H.sP_2Kc_s7__.$_X_4Z),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H.sP_2Kc_s7__.$_X_4Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.H.sP_2Kc_s7__._T),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.H.sP_2Kc_s7__._T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK._58_B$F5w.J35xV40c$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK._58_B$F5w.J35xV40c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK._58_B$F5w.IaAu$33$3$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK._58_B$F5w.IaAu$33$3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK._58_B$F5w.$Gy),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK._58_B$F5w.$Gy'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.$D._),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.$D._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.$D.$$nga),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.$D.$$nga'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.$D.y_z$$_Db),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.$D.y_z$$_Db'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$._3GWC),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$._3GWC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$.$$7B),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$.$$7B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$.ja),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$0_gK.AaJ$$E9$a$.ja'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$key.u),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$key.u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$key.z3__M$9Z01c),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$key.z3__M$9Z01c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$key.Gcal),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$key.Gcal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$W_$E2.$E),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$W_$E2.$E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$W_$E2.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$W_$E2.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$W_$E2.$h80),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$W_$E2.$h80'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$$A.$_),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$$A.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$$A.I),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$$A.I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i._ke.$$_ZH.$$A.gH$uR6$_4),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i._ke.$$_ZH.$$A.gH$uR6$_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq.sot),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq.sot'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq._c__),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq._c__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq.l$n),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.CY7Xxq.l$n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_._),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_.dW$t),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_.dW$t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_.rP66$xZ),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.K0_r_.rP66$xZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.Lapply),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.Lapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.$$kZB0),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.$$kZB0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.$a$$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._$5gi$_Z_.d$Pe0h$pBe.$a$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.W$U$w_F6),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.W$U$w_F6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.r),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.$Hh__11787),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7._Uhu_.$Hh__11787'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.m$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.m$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.C_z$9bU6),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.$.C_z$9bU6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$.__tT$$$$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$.__tT$$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$.b_$oT$$$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$.b_$oT$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$._$e),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll._sa5JSp_3H7.d$._$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$_i157.c39cnr$ST),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$_i157.c39cnr$ST'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$_i157.Dh1O9),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$_i157.Dh1O9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$_i157.z),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$_i157.z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK.EI$1_),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK.EI$1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK._$U_m7j),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK._$U_m7j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK.s),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL.$R$$A2_ycK.s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL._.m$S_$$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL._.m$S_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL._.$),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL._.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply._6B_i.$bA_Ll.V399$igL._.__6),
      // @ts-ignore
      i18next.t('a_:Uapply._6B_i.$bA_Ll.V399$igL._.__6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_._key.jur_$o___),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_._key.jur_$o___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_._key.cF$4),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_._key.cF$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_._key.Xapply),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_._key.Xapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.$_.$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.$_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.$_._a0e6$Vs2),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.$_._a0e6$Vs2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.$_.$_2),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.$_.$_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.B$$_.AmX4_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.B$$_.AmX4_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.B$$_.$ca),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.B$$_.$ca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$9v__0_XYf_.B$$_.UV_l6$$ku2_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$9v__0_XYf_.B$$_.UV_l6$$ku2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.__6_nameto.x),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.__6_nameto.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.__6_nameto.$RYi_r_Z_3i),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.__6_nameto.$RYi_r_Z_3i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.__6_nameto.c$_$___w_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.__6_nameto.c$_$___w_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.AT6.$_aAargumXr),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.AT6.$_aAargumXr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.AT6.CiQLSyD04O),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.AT6.CiQLSyD04O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.AT6.$key),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.AT6.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.H_$5Q_u6$vG.$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.H_$5Q_u6$vG.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.H_$5Q_u6$vG.LEa),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.H_$5Q_u6$vG.LEa'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.Sh.H_$5Q_u6$vG.c_0y20_Wih),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.Sh.H_$5Q_u6$vG.c_0y20_Wih'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.__$co.$$3_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.__$co.$$3_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.__$co.$X__looku),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.__$co.$X__looku'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.__$co.A4Sq),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.__$co.A4Sq'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.bEva.ZX),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.bEva.ZX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.bEva.b$$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.bEva.b$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.bEva.C_zRM),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.bEva.C_zRM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.W$$PbP2z.ova),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.W$$PbP2z.ova'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.W$$PbP2z.$$$J_$$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.W$$PbP2z.$$$J_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8._.$.W$$PbP2z.$key),
      // @ts-ignore
      i18next.t('a_:Uapply.__8._.$.W$$PbP2z.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.$.C_l6k_$$$$_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.$.C_l6k_$$$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.$._$__GmB6x32),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.$._$__GmB6x32'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.$._L),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.$._L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.__.$A$$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.__.$A$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.__.$biargume),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.__.$biargume'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.__.$m),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.__.$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.bo$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.bo$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.$yRmx2_J$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.$yRmx2_J$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.O_1g$L),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.$W_Hj$.C3QH$2ZM__.O_1g$L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.P.__wM0),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.P.__wM0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.P.$8_$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.P.$8_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.P.__v),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.P.__v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.vz.I),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.vz.I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.vz.TvalueOf),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.vz.TvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.vz.$apply),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.vz.$apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.dapply.C$a1K3zc8l7),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.dapply.C$a1K3zc8l7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.dapply.ymt7$T_w$Y),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.dapply.ymt7$T_w$Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9.B.dapply.Cref),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9.B.dapply.Cref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.V.$_bi),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.V.$_bi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.V.$$MT4_U6),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.V.$$MT4_U6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.V.$$k$K0Jf4),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.V.$$k$K0Jf4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6.$_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6.V$6289),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6.V$6289'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6._),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$2B$dhxK6._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$apply.$call),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$apply.$call'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$apply.o),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$apply.o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.a_5__x9._S$_gnw$s.$apply.Q$$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.a_5__x9._S$_gnw$s.$apply.Q$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.$_$2h2JG),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.$_$2h2JG'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.cd),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.cd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.$1argumen),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.C$8_18$$2.$1argumen'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6._.pQJ$o_K_Y),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6._.pQJ$o_K_Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6._.$un),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6._.$un'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6._.$ref),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6._.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.pzYz_.$2),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.pzYz_.$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.pzYz_.a84__defi),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.pzYz_.a84__defi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8._v_c6T_KC6.pzYz_.$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8._v_c6T_KC6.pzYz_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.h$tB.O),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.h$tB.O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.h$tB.$SwLsQ_2_B$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.h$tB.$SwLsQ_2_B$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.h$tB.I),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.h$tB.I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.__$8N__L.UA1),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.__$8N__L.UA1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.__$8N__L._A),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.__$8N__L._A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.__$8N__L.Z$h),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.__$8N__L.Z$h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.wv$__$t$_95.$$B$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.wv$__$t$_95.$$B$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.wv$__$t$_95.xJ),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.wv$__$t$_95.xJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.x$Z$__9.wv$__$t$_95.x66),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.x$Z$__9.wv$__$t$_95.x66'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.$._o1b3e),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.$._o1b3e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.$.$H_),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.$.$H_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.$.$EPry_o),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.$.$EPry_o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.A._$q_9_V),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.A._$q_9_V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.A.D$R_$nO$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.A.D$R_$nO$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng.A.$valueOf),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng.A.$valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng._valueOf.T22YZ6_3w8$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng._valueOf.T22YZ6_3w8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng._valueOf.$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng._valueOf.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.__8.$8.$ng._valueOf.b$),
      // @ts-ignore
      i18next.t('a_:Uapply.__8.$8.$ng._valueOf.b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.$l.Ge),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.$l.Ge'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.$l.S$$J),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.$l.S$$J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.$l.h_dcall),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.$l.h_dcall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.Z63B__P9r.yapply),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.Z63B__P9r.yapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.Z63B__P9r.___),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.Z63B__P9r.___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.Z63B__P9r._j),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.Z63B__P9r._j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.__uTQ3.$$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.__uTQ3.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.__uTQ3._Wu),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.__uTQ3._Wu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.aroty.__uTQ3.aC$xd),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.aroty.__uTQ3.aC$xd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_._$_.ehl$85_r$_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_._$_.ehl$85_r$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_._$_.$Z_1),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_._$_.$Z_1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_._$_.x__8$2),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_._$_.x__8$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.a$d0.rref),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.a$d0.rref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.a$d0.w_N9$_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.a$d0.w_N9$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.a$d0.$bi),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.a$d0.$bi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.B.$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.B.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.B.$0$9$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.B.$0$9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.J_.B._key),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.J_.B._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$m$$.Z_wk__),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$m$$.Z_wk__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$m$$.__$CT$$__$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$m$$.__$CT$$__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$m$$.E$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$m$$.E$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$.Gt),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$.Gt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$.f3$_$_$L6_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$.f3$_$_$L6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.$.$valueOf),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.$.$valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.M_$_fx_d7_.H_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.M_$_fx_d7_.H_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.M_$_fx_d7_._apply),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.M_$_fx_d7_._apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$f.eU$.M_$_fx_d7_.jjQYyPModL_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$f.eU$.M_$_fx_d7_.jjQYyPModL_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8._TiEY_X$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8._TiEY_X$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8.C),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8.x6_$$1Lnr),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.$MWi$$_$0$8.x6_$$1Lnr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_._.$$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_._.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_._.ym),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_._.ym'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_._._a),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_._._a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.u8$etoLocal),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.u8$etoLocal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.Gapply),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.Gapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.__),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.E$w$_.gO0$9f3EA.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.$$H6_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.$$H6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.S),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.K),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.$__$_n9vV_.K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.y),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.cb6K),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.cb6K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.e8W2ja_o$__),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08.A1_06B_.e8W2ja_o$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K.ych),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K.ych'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K._$_Hdw_$6C),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K._$_Hdw_$6C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K.Dprototypeh),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.nL08._OC__$K.Dprototypeh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.e7_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.e7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.__$wJ$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.__$wJ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.L_$r2),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.$$_.L_$r2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj._u),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj._u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj.Z$R_$A$$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj.Z$R_$A$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj._ref),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.fqvj._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_.cG6A),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_.cG6A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_.vx$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_.vx$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_._n),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$_v3HtH$.T75X4.__4B$4G$_._n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd.Xname),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd.Xname'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd.$$I),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd.$$I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd._$L2),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.V4$41$Re$Wd._$L2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.Zz),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.Zz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.$Bas),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.$Bas'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.W__$_1$3),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_.dply2jdS.W__$_1$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._._d3c$v2d3),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._._d3c$v2d3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._.b),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._.E$$_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.WzcX$f_._.E$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.Wbi),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.Wbi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.l),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.b$8p$_8_Vzl),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._8xaw$_.b$8p$_8_Vzl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx.el.C$w),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx.el.C$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx.el._$_$Eo3$Y_h),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx.el._$_$Eo3$Y_h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx.el.vtoString),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx.el.vtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.zh),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.zh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.$$r$6pfine),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.$$r$6pfine'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.$_xctoL),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.cyx._$.$_xctoL'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.CA55K34k_1t),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.CA55K34k_1t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.$Bents$argu),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.$Bents$argu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.ay),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.AQR$$UoS.ay'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0._),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0.a),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0.$_$$$),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.W_0.$_$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.Bg_O_$5t),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.Bg_O_$5t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.D$1Sm34_),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.D$1Sm34_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.Y__0M$_H$6),
      // @ts-ignore
      i18next.t('a_:Uapply.$e8yE_.$g$P0$_4A_K.K3_5_e$.$sK5_.Y__0M$_H$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39.eBr),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39.eBr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39.$$$J$y),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39.$$$J$y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39._toString),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.v$DBC1$BW39._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$._X$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$._X$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$.$$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$.$al),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.CnES_$_$$.$al'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$._6$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$._6$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$._),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$.$55C$_d$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.z.W$q_oIK4$.$55C$_d$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.$._6),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.$._6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.$.bW__$_$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.$.bW__$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.$.$1o5),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.$.$1o5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw._),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw._211),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw._211'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw.$toString),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.rw.$toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.AV5C$J_3),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.AV5C$J_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.D),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.__W$$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.B_JA.zdl.__W$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.$_2_23),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.$_2_23'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.hN5$g_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.hN5$g_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.e6$Sk5),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._$_totyT_yp.e6$Sk5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz.C.s$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz.C.s$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz.C.wlengtho$ke),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz.C.wlengtho$ke'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz.C.Zw_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz.C.Zw_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._c.Dc$a),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._c.Dc$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._c.W7),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._c.W7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.__$w_5_$$_.dz._c.$1I$f6$r_$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.__$w_5_$$_.dz._c.$1I$f6$r_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.B.Q_$___Y$b),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.B.Q_$___Y$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.B._ruc),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.B._ruc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.B.v),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.B.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.a$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.a$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.q),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.$H$1OY2S),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a._ar.$H$1OY2S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.Q._3truct),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.Q._3truct'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.Q.YDD),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.Q.YDD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$._$a.Q.$d$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$._$a.Q.$d$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$.$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$._),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$._ototyp),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.$$._ototyp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f._$$75I__),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f._$$75I__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f._k),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f._k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f.d5$__),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.Z_3$1G$1_f.d5$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.O$8_$V38Z$_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.O$8_$V38Z$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.Y),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.$bK$4),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.M$ibr.J$_E__$_.$bK$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$.$s_lhasO),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$.$s_lhasO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$._N7DrL$U),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$._N7DrL$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$._apply),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look._$XQa_10$._apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$._x),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$._x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$.R),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$.R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$.A),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.D5$.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.qb__),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.qb__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.d__),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.d__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.ndtoLocale),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.$3$_FyBf$$.Y$__look.$.ndtoLocale'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8._dl_0$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8._dl_0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8.btoS),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8.btoS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8.DisP),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.c$b6$8.DisP'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ._5Qj47),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ._5Qj47'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ.IbdOv_UHAF$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ.IbdOv_UHAF$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ.$z6),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.aZ.$z6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.XrihasOwnPr),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.XrihasOwnPr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.xb),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.xb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.wb_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.c_$v$_$$b.xt8$Us1_.wb_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.E._1Ks),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.E._1Ks'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.E.P$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.E.P$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.E.B__lookupG),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.E.B__lookupG'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.K6$i_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.K6$i_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.d38_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.d38_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.vb_i$TVpwg_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$._U_cXs$2___.vb_i$TVpwg_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.$6D$xX$._$_13$_P$7),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.$6D$xX$._$_13$_P$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.$6D$xX$._),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.$6D$xX$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.v_$.$6D$xX$.$U),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.v_$.$6D$xX$.$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._V$$$G.K$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._V$$$G.K$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._V$$$G.Ekey),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._V$$$G.Ekey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._V$$$G.wG6m),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._V$$$G.wG6m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._$1b_.$6$5),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._$1b_.$6$5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._$1b_._X$r$9$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._$1b_._X$r$9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p._$1b_.$$$T6HvJf$4),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p._$1b_.$$$T6HvJf$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p.Akey.$2$02b$),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p.Akey.$2$02b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p.Akey.$k),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p.Akey.$k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.d1k5__lo.T__define.p.Akey.e_),
      // @ts-ignore
      i18next.t('a_:E$Z.d1k5__lo.T__define.p.Akey.e_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.y$$$.Vp),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.y$$$.Vp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.y$$$.bKM$7),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.y$$$.bKM$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.y$$$.$call),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.y$$$.$call'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.dAv$INE_.$_$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.dAv$INE_.$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.dAv$INE_.ClEL_j_Ds$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.dAv$INE_.ClEL_j_Ds$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.dAv$INE_.Akey),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.dAv$INE_.Akey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.w.p),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.w.p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.w.aAQ),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.w.aAQ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.$ved.w.D$$eY),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.$ved.w.D$$eY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1._$N00.$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1._$N00.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1._$N00.Bref),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1._$N00.Bref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1._$N00.$HcD3$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1._$N00.$HcD3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.el._5H$JQL8),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.el._5H$JQL8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.el.b_$_7),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.el.b_$_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.el.Ckey),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.el.Ckey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.$3_i_GE_.bQj),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.$3_i_GE_.bQj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.$3_i_GE_._$$_$$07$_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.$3_i_GE_._$$_$$07$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$._3d$aA__B1.$3_i_GE_.C__proto__),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$._3d$aA__B1.$3_i_GE_.C__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.ebind.bW$_$h$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.ebind.bW$_$h$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.ebind.$_le),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.ebind.$_le'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.ebind.__LU),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.ebind.__LU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.X.ar_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.X.ar_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.X.$$U7a_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.X.$$U7a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.X._),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.X._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.C$2$_N.$_$$$SX_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.C$2$_N.$_$$$SX_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.C$2$_N.wVBD),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.C$2$_N.wVBD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$.P$1806$_MUP.C$2$_N.cJ2R_$71),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$.P$1806$_MUP.C$2$_N.cJ2R_$71'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.$.X236$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.$.X236$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.$.$VZ_Dc$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.$.$VZ_Dc$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.$.ka),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.$.ka'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.__2Rq$R60$P._Z$_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.__2Rq$R60$P._Z$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.__2Rq$R60$P.E__),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.__2Rq$R60$P.E__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.__2Rq$R60$P.X2x),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.__2Rq$R60$P.X2x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.car.$24$_0$k$7),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.car.$24$_0$k$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.car.$5jA),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.car.$5jA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M.b.car.$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M.b.car.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2._O.W$_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2._O.W$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2._O.W),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2._O.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2._O.D5_1),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2._O.D5_1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.i_U__$.$tD),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.i_U__$.$tD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.i_U__$.B),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.i_U__$.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.i_U__$.__82Q_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.i_U__$.__82Q_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.d$Acd$2$8.$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.d$Acd$2$8.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.d$Acd$2$8.$3_R_E),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.d$Acd$2$8.$3_R_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._6_2.d$Acd$2$8.d38t$8__$6),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._6_2.d$Acd$2$8.d38t$8__$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.yref.B),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.yref.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.yref.___42$__$F$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.yref.___42$__$F$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.yref.$k9$a_M),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.yref.$k9$a_M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l._slD0.$$P),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l._slD0.$$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l._slD0.XtoString),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l._slD0.XtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l._slD0.$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l._slD0.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.$$E3R.dS4o_$$_T),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.$$E3R.dS4o_$$_T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.$$E3R.j_KU),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.$$E3R.j_KU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c.$C_M._b3l.$$E3R.nb10Z_$0v1_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c.$C_M._b3l.$$E3R.nb10Z_$0v1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._bYd7_$_$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._bYd7_$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._YU5QA6),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._YU5QA6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._dr),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._Sz_hV._dr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$.E._0$$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$.E._0$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$.E.A$98),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$.E.A$98'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$.E.a$ZQ$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$.E.a$ZQ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_.$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_.u$2),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_.u$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_._),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.dW_h_yH$$._6oJ$0ps_C_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.ax._iJDR),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.ax._iJDR'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.ax.d7O),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.ax.d7O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.ax._ref),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.ax._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.$.$X___8uc50r),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.$.$X___8uc50r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.$.rapply),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.$.rapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.$.$cc75_$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.$.$cc75_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_.a_prototy),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_.a_prototy'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_._Se),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_._Se'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_.$co),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.B_6_FE$__.XHLEx_khU_.$co'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.__6_.$$$SGf_),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.__6_.$$$SGf_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.__6_.UMl),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.__6_.UMl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.__6_.$Z$j_W4_c),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.__6_.$Z$j_W4_c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.$y.cS),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.$y.cS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.$y.aK$1qY31),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.$y.aK$1qY31'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.$y.L),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.$y.L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.$f_$$Kbs_$P),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.$f_$$Kbs_$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.$key),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.V$$),
      // @ts-ignore
      i18next.t('a_:E$Z.aref_c._tter__jbin.a$DA_.ZeXargum.V$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p.o$pX31D$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p.o$pX31D$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p._1_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p._1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p.v38kD_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.__L$56_6_p.v38kD_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.$arguments),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.$arguments'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.Vg__argum),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.Vg__argum'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.$7),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v.Z___A.$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$._),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$.T62$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$.T62$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$.vaay),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s.CVI2_v._yTp9t2$Qp$.vaay'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_.EVa),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_.EVa'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_.$$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_._dU16M$$6__),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.c8$_$$_d_._dU16M$$6__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.c$U),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.c$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.$ref),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$wV6GzV0UJ.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.$8bnG$1),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.$8bnG$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.f_uc),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.f_uc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.$Tl9_5Pg2),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._argume.$$b__Ch4aN_.$Tl9_5Pg2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.rkey.$8$x0h5),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.rkey.$8$x0h5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.rkey.w8$Ovx22_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.rkey.w8$Ovx22_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.rkey.BJR),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.rkey.BJR'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.Od$.e$_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.Od$.e$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.Od$.hp),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.Od$.hp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.Od$.vY),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.Od$.vY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.q.PXzr),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.q.PXzr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.q._v5m$Ay_ER),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.q._v5m$Ay_ER'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$s._B.q.c__7),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$s._B.q.c__7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.bZ3w),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.bZ3w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.$_e88m82Ok),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.$_e88m82Ok'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.$F_$Y$_$$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.e$_H_T.$F_$Y$_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.AX),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.AX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.Az1$nn_9T),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.Az1$nn_9T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.V),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.$$caCb__l.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.Dkey._arguments),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.Dkey._arguments'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.Dkey.V),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.Dkey.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob._$1_H.Dkey.z6$L05M),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob._$1_H.Dkey.z6$L05M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.y_B._uMsjm$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.y_B._uMsjm$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.y_B._36WT$4H$_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.y_B._36WT$4H$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.y_B.c$$$_Wi),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.y_B.c$$$_Wi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.vX0IX5.dx$_rX),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.vX0IX5.dx$_rX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.vX0IX5._E__ref),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.vX0IX5._E__ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.vX0IX5.bblgB27$6),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.vX0IX5.bblgB27$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.UxLL.v0__),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.UxLL.v0__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.UxLL.W_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.UxLL.W_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.G__.UxLL._$fD),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.G__.UxLL._$fD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v.z),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v.z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v._3Hg_$g$$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v._3Hg_$g$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v.D5__),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.x_5ZM___$1v.D5__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.D$$1_1$w_5),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.D$$1_1$w_5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.E_t$_hD),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.E_t$_hD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.aB9A_dE_cD$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$.$$B.aB9A_dE_cD$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl._),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl.YDZ6r),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl.YDZ6r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl._H),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.otob.$D_$$7nyoT$._pl._H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_.w),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_._name1bindl),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_._name1bindl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_._z),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.b$_C2b22$_._z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M.LQ$$h),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M.LQ$$h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M.b$4),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M.b$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M._na),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.$$_$$Bw_$M._na'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.B$k$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.B$k$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.$l1_2_$_cgI),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.$l1_2_$_cgI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.E$$$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.fconstr.__$4q_IQ.E$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.cl$w_N158),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.cl$w_N158'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.D9_),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.D9_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.DM5Bi),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._N$_$$.DM5Bi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.$M_$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.$M_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.c4Muc$key),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.c4Muc$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.A),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref._A__2.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v._toString),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v.$r2),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v.$r2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v._),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.Jref.$7_U$_ZF_4v._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.wkey.aOaL0_0$y_$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.wkey.aOaL0_0$y_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.wkey._),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.wkey._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.wkey.Y5l),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.wkey.Y5l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.$ZP),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.$ZP'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.J$n),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.J$n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.Q2d0_$6$W2$),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.xB_$4R_.Q2d0_$6$W2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.A_e_$Fk$B),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.A_e_$Fk$B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.$0),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.$$CCr),
      // @ts-ignore
      i18next.t('a_:E$Z.WW_5ZM__Hq.$P$_9.jha.$$__lookupG.$$CCr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$._),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$.$$s$_7$33_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$.$$s$_7$33_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$._HI9$eehd),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.E$$0$1NQ$._HI9$eehd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.D_WE90$_$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.D_WE90$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.D),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.ct$B),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.g_n.ct$B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z.a_Lx__$q$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z.a_Lx__$q$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z._jpl$_$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z._jpl$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z._key),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.tvalueOf.$655_Z._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V._qva.$ref),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V._qva.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V._qva.zB_z),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V._qva.zB_z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V._qva.$apply),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V._qva.$apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.$_bm._),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.$_bm._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.$_bm.h0_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.$_bm.h0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.$_bm._apply),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.$_bm._apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.BSR4.BM2),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.BSR4.BM2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.BSR4._5r),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.BSR4._5r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.V.BSR4.$ref),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.V.BSR4.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u._ot.X$M),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u._ot.X$M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u._ot._Y),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u._ot._Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u._ot.qP$$$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u._ot.qP$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.$y_4S7),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.$y_4S7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.X__),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.X__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.R_1$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.$valueOf.R_1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.__.$$vBA$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.__.$$vBA$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.__.$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.__.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$4s_$__4.eC70$u.__._),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$4s_$__4.eC70$u.__._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.d__def),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.d__def'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.__E3$_8_t),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.__E3$_8_t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.XaC),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$s__j$$_S$_.XaC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.c4),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.c4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.$b2),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.$b2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.V$_2),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.$N_$q9$1a.V$_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.ma.$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.ma.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.ma.__oRc_J$9$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.ma.__oRc_J$9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bref.ma._F$0B$g0),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bref.ma._F$0B$g0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey._4ky7mPTag),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey._4ky7mPTag'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey.$7),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey.$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey.z__0e__$_A_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.akey.z__0e__$_A_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_.$$$CAx_69Yv),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_.$$$CAx_69Yv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_._v0y),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_._v0y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_.$1y9Pv_Z$3),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.UdT6_$_.$1y9Pv_Z$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B.B$N$A),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B.B$N$A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B.B0j6$p$$$53),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B.B0j6$p$$$53'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B._),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.bi3PQqv_n.B._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F.$7),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F.$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F._8$_o_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F._8$_o_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F._$$_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.e0sZ_9L_$_F._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.__$7),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.__$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.M_8Y),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.M_8Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.M__48_5Hi$_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.lO$RG$_$x$C.M__48_5Hi$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_.ur),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_.ur'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_._c2),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_._c2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_.$_g8Uk$_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.$KXp_$v$h6.cR6.oB$c$e_$_.$_g8Uk$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._b_$uf.$$9_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._b_$uf.$$9_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._b_$uf._0),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._b_$uf._0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._b_$uf.$pr8L_$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._b_$uf.$pr8L_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._callo._E),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._callo._E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._callo.T$C),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._callo.T$C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th._callo.bxQ1Ne),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th._callo.bxQ1Ne'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th.Apro.ER),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th.Apro.ER'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th.Apro.W$$_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th.Apro.W$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._callerB$th.Apro.c),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._callerB$th.Apro.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W._0E.Ct),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W._0E.Ct'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W._0E.vF$3),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W._0E.vF$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W._0E.y$g_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W._0E.y$g_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.Cv_2C$$F__.t$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.Cv_2C$$F__.t$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.Cv_2C$$F__._$VZ),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.Cv_2C$$F__._$VZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.Cv_2C$$F__.__),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.Cv_2C$$F__.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.zd04.vl0g$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.zd04.vl0g$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.zd04.$$MMN$7$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.zd04.$$MMN$7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7.W.zd04.KZj),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7.W.zd04.KZj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5.b$_$$W.zH_yMmU_Q$$),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5.b$_$$W.zH_yMmU_Q$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5.b$_$$W.D$U_$_2V9),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5.b$_$$W.D$U_$_2V9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5.b$_$$W.W_$52),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5.b$_$$W.W_$52'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._f$$$__5M.E$9$keysP),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._f$$$__5M.E$9$keysP'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._f$$$__5M.dX$wr_Ace),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._f$$$__5M.dX$wr_Ace'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._f$$$__5M._$Lh_Zx$3i_),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._f$$$__5M._$Lh_Zx$3i_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._$0__.b),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._$0__.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._$0__.aQ$v58),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._$0__.aQ$v58'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._6l6_$$_.X$7._$5._$0__.d1D),
      // @ts-ignore
      i18next.t('a_:Ty._6l6_$$_.X$7._$5._$0__.d1D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.wb.Wz7t),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.wb.Wz7t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.wb._T$zerXHB),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.wb._T$zerXHB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.wb.B),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.wb.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def._$$S_d7.$_H$Bv$d),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def._$$S_d7.$_H$Bv$d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def._$$S_d7._),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def._$$S_d7._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def._$$S_d7.F),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def._$$S_d7.F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.XQ.$644kW),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.XQ.$644kW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.XQ.__B),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.XQ.__B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66._alL__def.XQ.$),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66._alL__def.XQ.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.x3_Q.vhfH3N_$),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.x3_Q.vhfH3N_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.x3_Q._0),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.x3_Q._0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.x3_Q.Zkey),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.x3_Q.Zkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.$CO$U6$H.$i$_60),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.$CO$U6$H.$i$_60'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.$CO$U6$H.Ec),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.$CO$U6$H.Ec'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.$CO$U6$H.K9$M),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.$CO$U6$H.K9$M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.M7$d.$AW),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.M7$d.$AW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.M7$d.ename),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.M7$d.ename'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.$.M7$d.d6_Pr_),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.$.M7$d.d6_Pr_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.j_$),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.j_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.$),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.s),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.a$$$L_e0_g8.s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha._zBU$To_E2),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha._zBU$To_E2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha.u),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha.u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha._$w__GbiB$_),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$OwnPrNl5ha._$w__GbiB$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$r.D9$c),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$r.D9$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$r._),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$r._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.$2$66.V$$nam_bisP.$r.wJ_8),
      // @ts-ignore
      i18next.t('a_:Ty.s.$2$66.V$$nam_bisP.$r.wJ_8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._length.$_D2b2_),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._length.$_D2b2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._length.$$_),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._length.$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._length._r),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._length._r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj.$$._ref),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj.$$._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj.$$.C_),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj.$$.C_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj.$$.bapply),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj.$$.bapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._re.$61$7V_$Yl),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._re.$61$7V_$Yl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._re.fb7rB3j),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._re.fb7rB3j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.dj._re.$4t),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.dj._re.$4t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D.c__e.ya),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D.c__e.ya'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D.c__e._$YJ),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D.c__e._$YJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D.c__e.$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D.c__e.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._$.Bv),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._$.Bv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._$.E$_0S4___ey),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._$.E$_0S4___ey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._$._kl8__$_R),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._$._kl8__$_R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._D114vo_.H48V__V),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._D114vo_.H48V__V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._D114vo_.__$0$V),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._D114vo_.__$0$V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C.u03D._D114vo_.wr_$14PQ_$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C.u03D._D114vo_.wr_$14PQ_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.w_8S),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.w_8S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.A$t1_75),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.A$t1_75'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.$$2$$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$OV$3_$K$$_.$$2$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$_G.$yB$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$_G.$yB$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$_G.DZ$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$_G.DZ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$_G.Y$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$_G.Y$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$.D_SRfe487BT),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$.D_SRfe487BT'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$.qlengthq7Wt),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$.qlengthq7Wt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.K6$g_63C._t_0_$Xn8.$.R$c8z_$c$),
      // @ts-ignore
      i18next.t('a_:Ty.s.K6$g_63C._t_0_$Xn8.$.R$c8z_$c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.ZGb.b_),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.ZGb.b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.ZGb.x),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.ZGb.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.ZGb._length),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.ZGb._length'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.$$6$B._b$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.$$6$B._b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.$$6$B.__j),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.$$6$B.__j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.$$6$B._),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.$$6$B._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.a$$X__.$O6$9n$P81),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.a$$X__.$O6$9n$P81'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.a$$X__.dE9_),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.a$$X__.dE9_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._p.a$$X__.C9bD$1A_Y),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._p.a$$X__.C9bD$1A_Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.AXc2$x$tey._A$$3Y41$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.AXc2$x$tey._A$$3Y41$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.AXc2$x$tey._$CL$n_$$8),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.AXc2$x$tey._$CL$n_$$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.AXc2$x$tey._),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.AXc2$x$tey._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.__$e$._$Ow$5_8EJ$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.__$e$._$Ow$5_8EJ$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.__$e$.EC_$C$_ef6),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.__$e$.EC_$C$_ef6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref.__$e$.F_0$t__Y9a),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref.__$e$.F_0$t__Y9a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref._.aRPi$lh_7),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref._.aRPi$lh_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref._.G$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref._.G$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ._ref._.B$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ._ref._.B$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller._$v.V2_9Sk_1QL$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller._$v.V2_9Sk_1QL$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller._$v.$d$$$3$_),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller._$v.$d$$$3$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller._$v.jJ0_J__Q_r),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller._$v.jJ0_J__Q_r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.d.GPK$7),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.d.GPK$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.d._g___05),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.d._g___05'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.d.W_$),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.d.W_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$.w),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$.$2$$_),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$.$2$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$._valueOf),
      // @ts-ignore
      i18next.t('a_:Ty.s.__a_dQ.Zcaller.$3_D0_$$_$$._valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.$.D1$1_N_77k),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.$.D1$1_N_77k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.$.$7_),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.$.$7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.$.E_8$U6kj_3),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.$.E_8$U6kj_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.jS_7jCn31y.B1$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.jS_7jCn31y.B1$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.jS_7jCn31y._nFcxA2),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.jS_7jCn31y._nFcxA2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.jS_7jCn31y.$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.jS_7jCn31y.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.bR$$$9.i),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.bR$$$9.i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.bR$$$9.Q$_$w_Y_),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.bR$$$9.Q$_$w_Y_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._$_$9$Z__3.bR$$$9._key),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._$_$9$Z__3.bR$$$9._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.z._8$$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.z._8$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.z._apply),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.z._apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.z.es0$mM),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.z.es0$mM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.E8._3m$_$Yv),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.E8._3m$_$Yv'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.E8.$_$$30$P),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.E8.$_$$30$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.E8.x$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.E8.x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.$_E_U_$_._6v_),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.$_E_U_$_._6v_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.$_E_U_$_.$WpqI),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.$_E_U_$_.$WpqI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l._a01$Z3$.$_E_U_$_.$B08$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l._a01$Z3$.$_E_U_$_.$B08$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.$R.$v_sEnumera),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.$R.$v_sEnumera'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.$R.$z),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.$R.$z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.$R.Z8),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.$R.Z8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.E1X$6.sbP_),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.E1X$6.sbP_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.E1X$6.z_2),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.E1X$6.z_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J.E1X$6._$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J.E1X$6._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J._I_.Cske),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J._I_.Cske'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J._I_.$2$b$$$_),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J._I_.$2$b$$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$._l.J._I_.bGVa8Q$$),
      // @ts-ignore
      i18next.t('a_:Ty._$._l.J._I_.bGVa8Q$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.B1St_._C3),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.B1St_._C3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.B1St_.x),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.B1St_.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.B1St_.S_),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.B1St_.S_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$.Wo),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$.Wo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$._J),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$._J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$.v),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$g46._$F__),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$g46._$F__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$g46.__BcvZ),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$g46.__BcvZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.$X5.$g46._jU_LA$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.$X5.$g46._jU_LA$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.$z$DKF$i7$.aW$$$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.$z$DKF$i7$.aW$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.$z$DKF$i7$.$6zGf$_nN),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.$z$DKF$i7$.$6zGf$_nN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.$z$DKF$i7$.Gto),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.$z$DKF$i7$.Gto'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.w$L_._kJ),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.w$L_._kJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.w$L_.a_r_),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.w$L_.a_r_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.w$L_.$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.w$L_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.I9a$$_.__J6),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.I9a$$_.__J6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.I9a$$_.nkey),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.I9a$$_.nkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c.A.I9a$$_.D37R5A_e_),
      // @ts-ignore
      i18next.t('a_:Ty._$.c.A.I9a$$_.D37R5A_e_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8._gV__O$_$._),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8._gV__O$_$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8._gV__O$_$.$_x2),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8._gV__O$_$.$_x2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8._gV__O$_$.$$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8._gV__O$_$.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$c_.Eo_$$8_7),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$c_.Eo_$$8_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$c_._ref),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$c_._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$c_.D$u2e_oj_Z$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$c_.D$u2e_oj_Z$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$toLocaleSt.c$0rY__7),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$toLocaleSt.c$0rY__7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$toLocaleSt.$ref),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$toLocaleSt.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.c._R_8.$toLocaleSt.vb$),
      // @ts-ignore
      i18next.t('a_:Ty._$.c._R_8.$toLocaleSt.vb$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p.$gO661lm0_),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p.$gO661lm0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p.$S),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p.$S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p.$_),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.vc._Y),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.vc._Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.vc.$ref),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.vc.$ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.vc.WC6$$$_9gwo),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.vc.WC6$$$_9gwo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p$$$.j_Yx),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p$$$.j_Yx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p$$$.$_),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p$$$.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_._.$p$$$.$aRix0_5),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_._.$p$$$.$aRix0_5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.$BDv_$7bBf),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.$BDv_$7bBf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.ECe7h),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.ECe7h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.k_$$),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.dvalueOf$le.k_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.a._),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.a._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.a.b$b8C),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.a.b$b8C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.a.em_),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.a.em_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.t.AL__5$__k$x),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.t.AL__5$__k$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.t.Ce),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.t.Ce'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.c_H2Hw2_jV.t.$_3),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.c_H2Hw2_jV.t.$_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.$_.$$$a$),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.$_.$$$a$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.$_.b_3i3$),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.$_.b_3i3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.$_.c2_t_HP_u79),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.$_.c2_t_HP_u79'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.D$$._9$n$2Hq),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.D$$._9$n$2Hq'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.D$$.$6lenlength),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.D$$.$6lenlength'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.D$$._proto),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.D$$._proto'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_.$j_$qkSW),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_.$j_$qkSW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_.CR$w7b94$),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_.CR$w7b94$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['a_:'].Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_._U31$_$j_lC),
      // @ts-ignore
      i18next.t('a_:Ty._$.DA__81_.d5$_G$_0Pj$.Ll$_._U31$_$j_lC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.gkey),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.gkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.A_vQ_W$q$1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.A_vQ_W$q$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.d_0$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$5E9$$cs9.d_0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal.$$Pi$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal.$$Pi$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal.__2),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal.__2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.$$$cal._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar._6$EC2_G$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar._6$EC2_G$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar.T$$i$_$Oqj_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar.T$$i$_$Oqj_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar.__8$E$$ecp),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.pwD__bW.swar.__8$E$$ecp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.g),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.$caeLarg),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.$caeLarg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.Vt_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$R_i_L7_.Vt_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P.$0$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P.$0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P._p),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P._p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P.$_$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$__x0P.$_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.bfxl_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.bfxl_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.n$U_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.n$U_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.Jm7),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.eY_.$OW.Jm7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.B$_6yK6efV),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.B$_6yK6efV'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.G2),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.G2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.D),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.c__4vH7$3.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.N.Cb),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.N.Cb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.N.ib),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.N.ib'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.N.__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.N.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.R$_pkZ_D6uY),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.R$_pkZ_D6uY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.E),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.y51),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.XvalueOf.y.w_$l$_v_.y51'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI.$length),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI.$length'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI._sd),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI._sd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI.c5),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$8$_voI.c5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$._r._1e$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$._r._1e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$._r.yq_$8J6R6),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$._r.yq_$8J6R6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$._r._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$._r._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$.$WOOW__8),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$.$WOOW__8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$.o3W),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI._98u5_J$.$$$.o3W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.$A9pM$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.$A9pM$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.__$h0L9xf0$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.__$h0L9xf0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.aq$1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.D0okupGette.aq$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.y$t$_wT$fF),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.y$t$_wT$fF'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.y_Ew),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.y_Ew'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.v_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.AMt.v_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.L_.$a0$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.L_.$a0$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.L_.dc_$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.L_.dc_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.s$$W.L_.C),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.s$$W.L_.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._f.__3_C),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._f.__3_C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._f.xgN1$D$b_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._f.xgN1$D$b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._f.$_X),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._f.$_X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._a.f__define),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._a.f__define'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._a.l__nXZ$g6_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._a.l__nXZ$g6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments._a.$h_7t),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments._a.$h_7t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS.$8_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS.$8_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS._PD63l$1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS._PD63l$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS.AdamP_$0ey),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.cyI.Karguments.$0Uw$HS.AdamP_$0ey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.b.u$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.b.u$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.b._s_7_$__$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.b._s_7_$__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.b.__T$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.b.__T$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.k1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.k1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.Dc),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.Dc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.$DsZ$_$c$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.K_$$$_4$_o9.$DsZ$_$c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.$._W$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.$._W$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.$.__$_r$A$7Y),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.$.__$_r$A$7Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.I.$.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.I.$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply.u87q3$93p$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.Zapply.u87q3$93p$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_.$4H1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_.$4H1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_.$n_V$_IP7),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_.$n_V$_IP7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.E$B_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.XtoString),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.XtoString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.z_$F$7HC),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99._$2nQXMLV$h.D7_1.z_$F$7HC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.oi0$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.oi0$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.l),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.$Uvv$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.y$D$Y.$Uvv$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$.xO_p_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$.xO_p_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$._XG2$_6$__9),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$._XG2$_6$__9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$._8J$v5),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.X07$$$._8J$v5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.$E_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.$E_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.K17$$s$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$wXG42ASS6$.b$W$1_V99.d3WC.$___.K17$$s$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_._3$_H_.D),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_._3$_H_.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_._3$_H_.$0dW$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_._3$_H_.$0dW$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_._3$_H_.$$B7_$c),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_._3$_H_.$$B7_$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.a_Q.b7m0e),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.a_Q.b7m0e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.a_Q.___proto__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.a_Q.___proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.a_Q.yE8$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.a_Q.yE8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.fi._y1Z__defin),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.fi._y1Z__defin'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.fi.b$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.fi.b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._$70E_8B_.fi.g9x),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._$70E_8B_.fi.g9x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_._call.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_._call.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_._call.ddh),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_._call.ddh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_._call.q9c),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_._call.q9c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.s.i_Rc$9_8DCi),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.s.i_Rc$9_8DCi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.s.$0m0d),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.s.$0m0d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.s.AZ),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.s.AZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.A$q__P$S.a),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.A$q__P$S.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.A$q__P$S.v),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.A$q__P$S.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$.$_.A$q__P$S.J$i_o_$0),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$.$_.A$q__P$S.J$i_o_$0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16.$__$09.eC$_1u__80_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16.$__$09.eC$_1u__80_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16.$__$09.Z_65_$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16.$__$09.Z_65_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16.$__$09.u_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16.$__$09.u_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._G$PR_$.dd30_H$9$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._G$PR_$.dd30_H$9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._G$PR_$._e),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._G$PR_$._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._G$PR_$._3$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._G$PR_$._3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._$5$.D6d),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._$5$.D6d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._$5$.___9_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._$5$.___9_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.$._45$c$d16._$5$.e_yf6Y$q_A),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.$._45$c$d16._$5$.e_yf6Y$q_A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._.E9_7b),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._.E9_7b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._.$c),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._.$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._.$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$construc),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$construc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$__V_8e$eD),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$__V_8e$eD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$e5v),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp.a7_Rz$c_$E.$e5v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.$wb$$C__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.$wb$$C__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.Tidk),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.Tidk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.AY8$$1__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._hasOwnProp._$dtn53.AY8$$1__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.pX$.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.pX$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.pX$.As),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.pX$.As'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.pX$.a),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.pX$.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.e2u.akey),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.e2u.akey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.e2u._ha),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.e2u._ha'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.e2u.N$L$UM__O),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.e2u.N$L$UM__O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.YY$structoo.Yref),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.YY$structoo.Yref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.YY$structoo._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.YY$structoo._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr.E1.YY$structoo.r),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr.E1.YY$structoo.r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.z_f.$wM),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.z_f.$wM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.z_f._P_$6),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.z_f._P_$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.z_f._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.z_f._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.D.b),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.D.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.D.V_$F2$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.D.V_$F2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.D.wL),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.D.wL'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.JCy_.O9c),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.JCy_.O9c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.JCy_.A9$4_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.JCy_.A9$4_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.XI$zJr._j6.JCy_.__7),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.XI$zJr._j6.JCy_.__7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$._$$2$SlY$W.Ir354g$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$._$$2$SlY$W.Ir354g$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$._$$2$SlY$W.KR$$5xg03_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$._$$2$SlY$W.KR$$5xg03_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$._$$2$SlY$W.__$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$._$$2$SlY$W.__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.JI$oSn6._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.JI$oSn6._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.JI$oSn6.n__8o$$_$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.JI$oSn6.n__8o$$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.JI$oSn6.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.JI$oSn6.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.$prototype.___argu),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.$prototype.___argu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.$prototype.x),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.$prototype.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._$.$prototype.U2pym),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._$.$prototype.U2pym'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$nXvLalIr$_.I$_r_H),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$nXvLalIr$_.I$_r_H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$nXvLalIr$_.xBd2_W3),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$nXvLalIr$_.xBd2_W3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$nXvLalIr$_.M$$__9iJ_L),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$nXvLalIr$_.M$$__9iJ_L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$$_$$0.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$$_$$0.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$$_$$0.__2Z_$cal),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$$_$$0.__2Z_$cal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.$$_$$0.e$1$O$0V8),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.$$_$$0.e$1$O$0V8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.n$_$$comG6j.Qapply),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.n$_$$comG6j.Qapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.n$_$$comG6j.C7),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.n$_$$comG6j.C7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb._B.n$_$$comG6j._key),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb._B.n$_$$comG6j._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$._$7_$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$._$7_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$.$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$.vup),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$.vup'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.__D$._),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.__D$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.__D$.K2$ywZ),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.__D$.K2$ywZ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.__D$.$$$yname_1B),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.__D$.$$$yname_1B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$applyapp.c6_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$applyapp.c6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$applyapp._$v__79DY),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$applyapp._$v__79DY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.$Ru.Hecb.$$_.$applyapp.$6),
      // @ts-ignore
      i18next.t('c66b:$valueOf.$Ru.Hecb.$$_.$applyapp.$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.d4r.C8_F_2$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.d4r.C8_F_2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.d4r.A$ie_H),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.d4r.A$ie_H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.d4r.___41__bg$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.d4r.___41__bg$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.v.E$Xq_Qn_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.v.E$Xq_Qn_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.v._$lO),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.v._$lO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.v.tv_eP4__R),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.v.tv_eP4__R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.$$2$.eU_nleng),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.$$2$.eU_nleng'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.$$2$.LD),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.$$2$.LD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i._k.$$2$.Carg),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i._k.$$2$.Carg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.$e.$l),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.$e.$l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.$e._A3),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.$e._A3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.$e._8$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.$e._8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.$valueOf),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.$valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.$$y$zyT$A_$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.$$y$zyT$A_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.__D_$_$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.B$1$_8$N2X0.__D_$_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.AO$0__defi.__j1B2F),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.AO$0__defi.__j1B2F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.AO$0__defi.y$m$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.AO$0__defi.y$m$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.A_a_60.AO$0__defi.$__4Ih),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.A_a_60.AO$0__defi.$__4Ih'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._X.J__$2_0),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._X.J__$2_0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._X._78__8GkW$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._X._78__8GkW$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._X.d6_V_$b),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._X.d6_V_$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._lookupG.$e$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._lookupG.$e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._lookupG.Y$E2wcall),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._lookupG.Y$E2wcall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3._lookupG.e$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3._lookupG.e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$.$_k$Y),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$.$_k$Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$.d_z21),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$.d_z21'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$._$n9__8__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$._i.AE$x3.EvG$5SZ$._$n9__8__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.$w_4),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.$w_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.DEX$1_i0yc1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.DEX$1_i0yc1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.$Cq$3),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.___lookupGe.$Cq$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3.X_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3.X_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3.DJ),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3.DJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3._08A),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.y_3._08A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W.CVT_rkI),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W.CVT_rkI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W._M5$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W._M5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W.ZT_$CA$7$f$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.C_vC$__.$5$$W.ZT_$CA$7$f$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$2$e.Pcaller),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$2$e.Pcaller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$2$e.Bue),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$2$e.Bue'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$2$e._Xb),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$2$e._Xb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$_pr.$op),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$_pr.$op'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$_pr._x9),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$_pr._x9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.$_pr.____pCn0),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.$_pr.____pCn0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.W0cd.e),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.W0cd.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.W0cd._P),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.W0cd._P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$.$0.W0cd._ref),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$.$0.W0cd._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__.$$_3gg$Gx),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__.$$_3gg$Gx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__.z$$$M_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__.z$$$M_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__.___N),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__.___N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__d.b$8$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__d.b$8$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__d.B),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__d.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.__d.$a_W$_4V_x),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.__d.$a_W$_4V_x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.b.$z$21Vf),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.b.$z$21Vf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.b.e$_ec4_n$_),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.b.e$_ec4_n$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.H_$ID$._ref.b._7WC),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.H_$ID$._ref.b._7WC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.c_83_9),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.c_83_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.d),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.$h$$r),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.c_7b$8.$h$$r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_.$$_E),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_.$$_E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_.$_8oS_$X4),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_.$_8oS_$X4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_._68T___E$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4.e5eWCb_Y_._68T___E$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4._00.$Wi),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4._00.$Wi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4._00.E_$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4._00.E_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.$RZ81q4._00.__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.$RZ81q4._00.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.E_p5_UP6._8),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.E_p5_UP6._8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.E_p5_UP6.Upr),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.E_p5_UP6.Upr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.E_p5_UP6._aA$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.E_p5_UP6._aA$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.__Jv.M),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.__Jv.M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.__Jv.t_AU5),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.__Jv.t_AU5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.__Jv.c$181D31),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.__Jv.c$181D31'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.av.KaE_2$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.av.KaE_2$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.av.D$tonst),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.av.D$tonst'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.pe.av.e$2$$7),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.pe.av.e$2$$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.uec.c4qg1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.uec.c4qg1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.uec.L),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.uec.L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.uec.e59),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.uec.e59'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.qkey.D$___T),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.qkey.D$___T'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.qkey.$9$2$1),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.qkey.$9$2$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b.qkey.$$),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b.qkey.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b._$e_k.D),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b._$e_k.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b._$e_k.__82),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b._$e_k.__82'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:'].$valueOf.atR_$f$.$f.b._$e_k.__),
      // @ts-ignore
      i18next.t('c66b:$valueOf.atR_$f$.$f.b._$e_k.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.Napply.eB_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.Napply.eB_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.Napply._$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.Napply._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.Napply.$9),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.Napply.$9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.bVt.z9r$_s$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.bVt.z9r$_s$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.bVt._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.bVt._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.bVt.$toStr),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.bVt.$toStr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.$C294.$$_M),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.$C294.$$_M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.$C294._$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.$C294._$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.$Cp_T$$A.$C294.$2__pro),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.$Cp_T$$A.$C294.$2__pro'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_e0_jEY$wN.d),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_e0_jEY$wN.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_e0_jEY$wN.Xns),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_e0_jEY$wN.Xns'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_e0_jEY$wN.H),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_e0_jEY$wN.H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$apply.e$_Og$3),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$apply.e$_Og$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$apply.aD__$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$apply.aD__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$apply.$1i_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$apply.$1i_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_prop._co$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_prop._co$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_prop.$__Sj),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_prop.$__Sj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def.xk.$_prop.$1k__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def.xk.$_prop.$1k__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.disP.$W_TLHkp_tN),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.disP.$W_TLHkp_tN'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.disP.$_D_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.disP.$_D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.disP._a2),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.disP._a2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.Tn_J$i99$__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.Tn_J$i99$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.NU),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.NU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.g8),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9.y$f9_$b$uC$.g8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9._$m4.g4_$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9._$m4.g4_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9._$m4.dyD_bS$qhk),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9._$m4.dyD_bS$qhk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._m__def._$8P_t9._$m4.$$s$L$k0_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._m__def._$8P_t9._$m4.$$s$L$k0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.rZ.C),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.rZ.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.rZ._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.rZ._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.rZ.$5a$r6r$$01),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.rZ.$5a$r6r$$01'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.j5I5q.$mXYa_$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.j5I5q.$mXYa_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.j5I5q.r9B),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.j5I5q.r9B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._.j5I5q._k),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._.j5I5q._k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._._n41x$35vy$._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._._n41x$35vy$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._._n41x$35vy$.E3__$rBI2e7),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._._n41x$35vy$.E3__$rBI2e7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd._._n41x$35vy$.pco),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd._._n41x$35vy$.pco'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.$D.d__W__$_$Ce),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.$D.d__W__$_$Ce'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.$D._E1_$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.$D._E1_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.$D._t_0_z3Q),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.$D._t_0_z3Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.$6N),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.$6N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.EEA_9y$5$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.EEA_9y$5$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.$__X),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.V$t__dH_y$.$__X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.YL6.C),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.YL6.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.YL6._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.YL6._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.wfX7$.YL6.dqfr_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.wfX7$.YL6.dqfr_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_.V__0),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_.V__0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_.$E$72),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_.$E$72'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_._bC3Setter_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.Dg$_$2_._bC3Setter_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.$caller.B),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.$caller.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.$caller._$i),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.$caller._$i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.$caller.d__9),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.$caller.d__9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy.B),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy.$__$$x$zn$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy.$__$$x$zn$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL._3$$_36$fd.$b3E.qY_TkYy._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.b$caT_$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.b$caT_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.Wyp),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.Wyp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.V_dZ8_$c$e$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.$$UUo5E.V_dZ8_$c$e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.D.yp_k8x),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.D.yp_k8x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.D._O$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.D._O$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.D.N_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.D.N_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$w),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$_0$_$7),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$_0$_$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$arguments),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$HG_l__g2.UV0q.$arguments'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$.$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$._73$WE5$9),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$._73$WE5$9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$.hb_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.Xvw$.hb_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.___._1eCY3$T_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.___._1eCY3$T_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.___.Yhas),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.___.Yhas'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.___.Oprototype),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.___.Oprototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y._X$$Or6_2y),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y._X$$Or6_2y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y.j_A87),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y.j_A87'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y.drE2$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$$_JPM$$.eub$$_y.drE2$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._$070Y.$3__$$__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._$070Y.$3__$$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._$070Y._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._$070Y._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._$070Y.V$$M),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._$070Y.V$$M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf.b_.$$V),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf.b_.$$V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf.b_.jk),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf.b_.jk'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf.b_.B_$9_1k_sD0),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf.b_.B_$9_1k_sD0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._q.g),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._q.g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._q.___p),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._q.___p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$._hzL.WL9JEc8$.$valueOf._q._15_L_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$._hzL.WL9JEc8$.$valueOf._q._15_L_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.r7),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.r7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.A6gw),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.A6gw'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.pe10$3),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$.l833$_8$$7.pe10$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._.$0__q_Kr$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._.$0__q_Kr$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._.dq$$n_eZ_$j),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._.dq$$n_eZ_$j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._.bcall),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._.bcall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._0BJ$.aP_B_3P5$$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._0BJ$.aP_B_3P5$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._0BJ$._K$e),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._0BJ$._K$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.$._0BJ$.cEz_cU$__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.$._0BJ$.cEz_cU$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.e$.$l),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.e$.$l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.e$.b_$_$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.e$.b_$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.e$.$C),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.e$.$C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.aot),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.aot'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.Ocj3_FU67),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.Ocj3_FU67'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.W),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_._8$7$01.W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.A$$l.C5$e$QS),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.A$$l.C5$e$QS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.A$$l.c$d),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.A$$l.c$d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.WJ_.A$$l.l_bm___),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.WJ_.A$$l.l_bm___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.x.a),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.x.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.x.$_He$G$5D),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.x.$_He$G$5D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.x._0t2$_z8),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.x._0t2$_z8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6.v112Ue6),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6.v112Ue6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6._9VLr5V$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6._9VLr5V$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6.h4_$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.$iY_6$$$O6.h4_$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.Japply.Kcall),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.Japply.Kcall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.Japply.rrNLq$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.Japply.rrNLq$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.c_VW0_.X8__look.Japply._I7Y),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.c_VW0_.X8__look.Japply._I7Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.zvalueOf),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.zvalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.dCX),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.dCX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.e_0$8$Um_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.$w_$DH_r$.e_0$8$Um_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.d$k$$I6.$E),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.d$k$$I6.$E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.d$k$$I6.b2),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.d$k$$I6.b2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.d$k$$I6.PWNm),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.d$k$$I6.PWNm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.s.$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.s.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.s.ycaller),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.s.ycaller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.N_5$8.s._n9H9$8_4g_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.N_5$8.s._n9H9$8_4g_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_.$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_.$18),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_.$18'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$$$$ew6_$_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4.gX_BPBzR$_3),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4.gX_BPBzR$_3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4.d6$_i$R__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4.d6$_i$R__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w._1M1ZF$__4._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$1c.Ti),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$1c.Ti'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$1c.$T__$Td0$6),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$1c.$T__$Td0$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.b$3$$S$_w.$$1c.q0),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.b$3$$S$_w.$$1c.q0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P_CYdFL7._3$_6Fze3$L),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P_CYdFL7._3$_6Fze3$L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P_CYdFL7.$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P_CYdFL7.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P_CYdFL7.m$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P_CYdFL7.m$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.$4b5.$u__$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.$4b5.$u__$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.$4b5.$_r),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.$4b5.$_r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.$4b5.J),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.$4b5.J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P8_3Gh61._$b),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P8_3Gh61._$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P8_3Gh61.gkey),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P8_3Gh61.gkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW.__.Bcc.P8_3Gh61._o),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW.__.Bcc.P8_3Gh61._o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.$$D._8v),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.$$D._8v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.$$D.W8_6_4),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.$$D.W8_6_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.$$D.Bv$1),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.$$D.Bv$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.v1s.B),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.v1s.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.v1s.E_Wa6$$dE$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.v1s.E_Wa6$$dE$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w.v1s.L0),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w.v1s.L0'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w._o$_0$EK$T.G$_IFK$9Tb_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w._o$_0$EK$T.G$_IFK$9Tb_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w._o$_0$EK$T._6fJ),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w._o$_0$EK$T._6fJ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.w._o$_0$EK$T.xhB_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.w._o$_0$EK$T.xhB_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._._cfH),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._._cfH'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._.$3),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._.$3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._.$J$$_3m$f0_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._.$J$$_3m$f0_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je.b__proto__.G9q0d3$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je.b__proto__.G9q0d3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je.b__proto__.X$$$rh),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je.b__proto__.X$$$rh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je.b__proto__.__$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je.b__proto__.__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._Y4_$T$T__5.$c),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._Y4_$T$T__5.$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._Y4_$T$T__5.$$$2__d3_m),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._Y4_$T$T__5.$$$2__d3_m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.Je._Y4_$T$T__5.x),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.Je._Y4_$T$T__5.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X._$$z$4b$L._$__W$9$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X._$$z$4b$L._$__W$9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X._$$z$4b$L.VrT$$$$5_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X._$$z$4b$L.VrT$$$$5_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X._$$z$4b$L.MIDQ),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X._$$z$4b$L.MIDQ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.d_$$$$.Qy$e),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.d_$$$$.Qy$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.d_$$$$._F$_AW),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.d_$$$$._F$_AW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.d_$$$$._b_E_7$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.d_$$$$._b_E_7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.v$Y1.P70$30sx),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.v$Y1.P70$30sx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.v$Y1.wu$b_I$B_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.v$Y1.wu$b_I$B_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.a5_YW._72_.X.v$Y1._P_$9R1__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.a5_YW._72_.X.v$Y1._P_$9R1__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.P.$_$_7_3l),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.P.$_$_7_3l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.P.l9$wr5U),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.P.l9$wr5U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.P._8n),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.P._8n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_._.b1),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_._.b1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_._.Use_x2rsP_F),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_._.Use_x2rsP_F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_._.f),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_._.f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR.$ap),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR.$ap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR._n1Lw_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR._n1Lw_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR.$3e$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.hA_7cW$_.$$_R7FRihR.$3e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.Dq._u_0____O),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.Dq._u_0____O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.Dq.b6$Qg),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.Dq.b6$Qg'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.Dq.al),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.Dq.al'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$8g.e),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$8g.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$8g.Jprototype),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$8g.Jprototype'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$8g._$U$$1ZM),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$8g._$U$$1ZM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$bindIs),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1._$__$T_v$.$p$a3d.$bindIs'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.$$_2x$$GxW),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.$$_2x$$GxW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.evalueOf),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.evalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.____4$$1),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$._6U.____4$$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._$_O),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._$_O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._toString),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._key),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.$$_$._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.Z$WC_4_4),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.Z$WC_4_4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.$le),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.$le'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.t_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.e$$10$1.$_5P6On$_$.At___EBk.t_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$apply),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$__proto__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.bPCP_joj.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.$.Jx$_m),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.$.Jx$_m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.$.X$1$x$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.$.X$1$x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3.$.ZC41_7$2_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3.$.ZC41_7$2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3._dXE.s__proto__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3._dXE.s__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3._dXE.d),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3._dXE.d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.sbv3._dXE.w$7$D__$t),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.sbv3._dXE.w$7$D__$t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.Dargumentsl.$2),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.Dargumentsl.$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.Dargumentsl.___D$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.Dargumentsl.___D$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.Dargumentsl.$3$1),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.Dargumentsl.$3$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if._reflen.$$EC$r$2A),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if._reflen.$$EC$r$2A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if._reflen.b$dD$jL$O),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if._reflen.b$dD$jL$O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if._reflen.Xkey),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if._reflen.Xkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.$9T1G.b$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.$9T1G.b$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.$9T1G.Xapply),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.$9T1G.Xapply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.f2if.$9T1G.Yx2$lL3L6_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.f2if.$9T1G.Yx2$lL3L6_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_._.dh_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_._.dh_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_._.__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_._.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_._._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_._._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.L$_.atte),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.L$_.atte'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.L$_.Z$4$B),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.L$_.Z$4$B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.L$_._$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.L$_._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.a_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.C),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.mUq9_d$$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.b3b9f.dY$$_.t0va$YL__.mUq9_d$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3.hcall),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3.hcall'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3.$_i$36),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3.$_i$36'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3._$$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.C$_B_w3._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O.__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O.ic9),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O.ic9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O._),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.s$_O._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N.$$U),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N.$$U'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N._aa),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N._aa'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N.$I4$$_1yI$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$$fkp.h5N.$I4$$_1yI$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.BE2),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.BE2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.e$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.e$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.C8$09W$$1),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.$01z_$f$$p.C8$09W$$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__._Ui5X__),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__._Ui5X__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__.C_h$F),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__.C_h$F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__.b2$0PQ$2g$),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.__.b2$0PQ$2g$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype.v2AB_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype.v2AB_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype.$qCW),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype.$qCW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype._D_Ax_X$0a_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.dwI6Lm_qaa.Dprototype._D_Ax_X$0a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_._2$_OZI),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_._2$_OZI'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_._1M$$E),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_._1M$$E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_.$fj_$y),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.Y1C_.$fj_$y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D.__bind),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D.__bind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D._e$i_callb),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D._e$i_callb'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D._il_$v),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.u$_K__$_D._il_$v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de._ld$$s$$_),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de._ld$$s$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de.x7$$J),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de.x7$$J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de.PBI24Sh),
      // @ts-ignore
      i18next.t('c66b:_$Lv$.$$$.$$b3D$_b_6$.$p.vallert__de.PBI24Sh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._$e$.c3),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._$e$.c3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._$e$.evalueOf),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._$e$.evalueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._$e$.Xf$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._$e$.Xf$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l._1A6),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l._1A6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l._29$08$n_x$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l._29$08$n_x$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l.$_C),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An._7v_b$c_Y3l.$_C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An.aA$1.Z),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An.aA$1.Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An.aA$1._$K),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An.aA$1._$K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.An.aA$1._8c),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.An.aA$1._8c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.ve__defineG.J_h_5a_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.ve__defineG.J_h_5a_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.ve__defineG.b_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.ve__defineG.b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.ve__defineG.D),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.ve__defineG.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.E_.zPWI$$1_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.E_.zPWI$$1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.E_._m_____0t_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.E_._m_____0t_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.E_._$qp_$$$_$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.E_._$qp_$$$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.j6$Z__F_4._),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.j6$Z__F_4._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.j6$Z__F_4.a8jqS_5d__6),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.j6$Z__F_4.a8jqS_5d__6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq.d.j6$Z__F_4._A$6),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq.d.j6$Z__F_4._A$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.F.o6),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.F.o6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.F.r$V2B$e3H_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.F.r$V2B$e3H_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.F._t_$R_1e__$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.F._t_$R_1e__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.O1.$os),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.O1.$os'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.O1.$7_8Bs9),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.O1.$7_8Bs9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.O1.__v$_c2c1_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.O1.__v$_c2c1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.$__._$O_$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.$__._$O_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.$__._$ne),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.$__._$ne'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$._K$$dq._$p_.$__.C3),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$._K$$dq._$p_.$__.C3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.$$bz),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.$$bz'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.p5K7_x4v$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.p5K7_x4v$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.__2L),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.__5.__2L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_._7$_7),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_._7$_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_._8X),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_._8X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_.wp),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.ey2kV$l$_.wp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.CN$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.CN$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.$$op),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.$$op'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.$$$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$H03I9P_.$K$_.$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.tohm$x_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.tohm$x_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.yprot),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.yprot'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.Am_h),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.A8__$$$m$_.Am_h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.F_h4f),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.F_h4f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.Vn),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.Vn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.Y$_kGc$$$$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.$jD.Y$_kGc$$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2._),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2.$toString),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2.$toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2.e$B_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G._ZY_.d$$__$c2.e$B_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$.$$_$S$$26Z$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$.$$_$S$$26Z$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$._$_33d_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$._$_33d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$.V),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8._$.V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N._$1X_E_$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N._$1X_E_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N._c___08b3i),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N._c___08b3i'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N.$$_$Khs$$G),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.D3g8_$N.$$_$Khs$$G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1._),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1.UDC),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1.UDC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1._ref),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.O$e_$$_$_1G.$FI$Am8.U8vy__1._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$.DOf),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$.DOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$.__$S7_b),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$.__$S7_b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$.aG_Qu_n0_2),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$.aG_Qu_n0_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.i_674$_.D),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.i_674$_.D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.i_674$_._5$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.i_674$_._5$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.i_674$_.$_6m$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.i_674$_.$_6m$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.l1d7_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.l1d7_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.$to),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.$to'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.b6ZB3),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$W$3$$_$.$0keyindpe.b6ZB3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.a.$__lookupS),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.a.$__lookupS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.a.RGM8_KbM_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.a.RGM8_KbM_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.a._5$Dqm),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.a._5$Dqm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.$o__pO7i4_),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.$o__pO7i4_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.G$_30A939iC),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.G$_30A939iC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.$$a),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$._v0_$Q.$$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$.YI$fo),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$.YI$fo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$._key),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$._key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$._$6W$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$.$mS$g5$$$.B$$$1$._$6W$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.$_$g.cw9$__),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.$_$g.cw9$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.$_$g.__8N$a$A),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.$_$g.__8N$a$A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.$_$g.___2_$2oX_A),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.$_$g.___2_$2oX_A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.ABz$$.$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.ABz$$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.ABz$$.fapplycalle),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.ABz$$.fapplycalle'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.ABz$$.$Bz8),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.ABz$$.$Bz8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q._thargume),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q._thargume'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q._$$22$),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q._$$22$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q.v),
      // @ts-ignore
      i18next.t('c66b:_77.V38$$P5$T$.$$._An_K1___o_.A3$$nL__q.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.v__$z_.A3),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.v__$z_.A3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.v__$z_.$c$i_$t$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.v__$z_.$c$i_$t$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.v__$z_._36_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.v__$z_._36_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.a$_.$__),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.a$_.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.a$_.v),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.a$_.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.a$_._UES$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.a$_._UES$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.A),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.Fca),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.Fca'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.A5_$L9WZ_7),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._1EA6AV.z3m7ZbZ_q_.A5_$L9WZ_7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.U._0y_jMm),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.U._0y_jMm'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.U.SfO$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.U.SfO$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.U._),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.U._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.B9$Y4_.$c2Z$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.B9$Y4_.$c2Z$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.B9$Y4_.bname),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.B9$Y4_.bname'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.B9$Y4_._),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.B9$Y4_._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.X__proto__.F6$$$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.X__proto__.F6$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.X__proto__.$1J$5H_4$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.X__proto__.$1J$5H_4$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W.$.X__proto__.v),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W.$.X__proto__.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.$$$_cP.$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.$$$_cP.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.$$$_cP.$_IW3eo_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.$$$_cP.$_IW3eo_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.$$$_cP.$1$lG4$0gdn),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.$$$_cP.$1$lG4$0gdn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_._$BsB$.$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_._$BsB$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_._$BsB$._R$c9_0_4$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_._$BsB$._R$c9_0_4$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_._$BsB$.v_valueOf_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_._$BsB$.v_valueOf_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.Ebay.$Ff$_H$8),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.Ebay.$Ff$_H$8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.Ebay.$_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.Ebay.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.C1W._l8f22_$I_.Ebay.coQC70o),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.C1W._l8f22_$I_.Ebay.coQC70o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$.v$M_J$___),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$.v$M_J$___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$._$$I),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$._$$I'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$.skey),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.y$$.skey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5.$6x$$hL$2),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5.$6x$$hL$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5._j6ljZ$oV$G),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5._j6ljZ$oV$G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5.zicvd$Xs_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$.m_$9__Nk$5.zicvd$Xs_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9.N_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9.N_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9._$_p6_m_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9._$_p6_m_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9.$wrb$l39),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.UW0$_l3Roy$._z_US_____9.$wrb$l39'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5.$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5._),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5.b_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.__2js_5UAe5.b_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.___Qa$MdjE_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.___Qa$MdjE_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.W$e_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.W$e_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.w54y$$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3.c_$G_DL.w54y$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$.$caller),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$.$caller'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$.$$$0$2m__y),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$.$$$0$2m__y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$._Td),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.BJ_F__F9_3._IZ$._Td'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.$4._$3$_ED),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.$4._$3$_ED'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.$4.IV$_b),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.$4.IV$_b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.$4.d_00_2_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.$4.d_00_2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_._e),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_.g1_x),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_.g1_x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_.c),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c._$f_$S$3_$_.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.B8Z.$k$),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.B8Z.$k$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.B8Z.$a),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.B8Z.$a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.__fwEH1$_Y_.$c.B8Z.$bind),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.__fwEH1$_Y_.$c.B8Z.$bind'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_._$2$_K8$J.E_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_._$2$_K8$J.E_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_._$2$_K8$J.O1),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_._$2$_K8$J.O1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_._$2$_K8$J.$F),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_._$2$_K8$J.$F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.Zt__P2__$IN.A$oR),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.Zt__P2__$IN.A$oR'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.Zt__P2__$IN.$___),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.Zt__P2__$IN.$___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.Zt__P2__$IN._valueOf),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.Zt__P2__$IN._valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.L_._15$_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.L_._15$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.L_.d_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.L_.d_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$.$___l5tQF$_.L_._a),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$.$___l5tQF$_.L_._a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.__t$A.$$_6$pc7),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.__t$A.$$_6$pc7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.__t$A.$Y),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.__t$A.$Y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.__t$A.CA$__N_P$7A),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.__t$A.CA$__N_P$7A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.Z_Z$4j5qo.cl),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.Z_Z$4j5qo.cl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.Z_Z$4j5qo.D_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.Z_Z$4j5qo.D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._.Z_Z$4j5qo.$_trconstru),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._.Z_Z$4j5qo.$_trconstru'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._._._),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._._._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._._.Bis),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._._.Bis'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._._.BA__defi),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._._.BA__defi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$._2o_vB$$bE.Dp$YlO_2),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$._2o_vB$$bE.Dp$YlO_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$._2o_vB$$bE.k__),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$._2o_vB$$bE.k__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$._2o_vB$$bE.$_3a),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$._2o_vB$$bE.$_3a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.$.ET_),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.$.ET_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.$.v__proto__),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.$.v__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.$.Lkey),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.$.Lkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.ze$$.yvO),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.ze$$.yvO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.ze$$.l_N),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.ze$$.l_N'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.b4$.$$._$$9$$$.ze$$.$a$_$g),
      // @ts-ignore
      i18next.t('c66b:_77.b4$.$$._$$9$$$.ze$$.$a$_$g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$.bM._Z),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$.bM._Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$.bM.d2_),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$.bM.d2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$.bM._Rp),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$.bM._Rp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._5.F),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._5.F'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._5.$4_0O$O$$v),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._5.$4_0O$O$$v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._5._$_dFh2_),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._5._$_dFh2_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._$1Q_o5$._),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._$1Q_o5$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._$1Q_o5$.$_9_9),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._$1Q_o5$.$_9_9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.$._$1Q_o5$._k$3z9$qssV),
      // @ts-ignore
      i18next.t('c66b:_77.v._.$._$1Q_o5$._k$3z9$qssV'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$.$yC2$_$5f$E),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$.$yC2$_$5f$E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$.$O3i9$TF_),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$.$O3i9$TF_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$.$r_),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$.$r_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$$_4WgA.E_o9),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$$_4WgA.E_o9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$$_4WgA.H),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$$_4WgA.H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$$_4WgA._toStringc),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$$_4WgA._toStringc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$29Cq$_.b),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$29Cq$_.b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$29Cq$_.Detter),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$29Cq$_.Detter'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._._.$_$29Cq$_.i8valueOf),
      // @ts-ignore
      i18next.t('c66b:_77.v._._.$_$29Cq$_.i8valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.md_$V$g$f_.$C_),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.md_$V$g$f_.$C_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.md_$V$g$f_.$$B56_7E),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.md_$V$g$f_.$$B56_7E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.md_$V$g$f_.d$$$_45$Bj),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.md_$V$g$f_.d$$$_45$Bj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.FUdYku1qc.eE),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.FUdYku1qc.eE'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.FUdYku1qc._r9$),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.FUdYku1qc._r9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.FUdYku1qc._6y),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.FUdYku1qc._6y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.$_U$_$5aN$.k),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.$_U$_$5aN$.k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.$_U$_$5aN$.Bw_$k$b),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.$_U$_$5aN$.Bw_$k$b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._.A$x$_.$_U$_$5aN$.Pis),
      // @ts-ignore
      i18next.t('c66b:_77.v._.A$x$_.$_U$_$5aN$.Pis'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.b_vj$$_I2_.u__defineGe),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.b_vj$$_I2_.u__defineGe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.b_vj$$_I2_.e6$$$$$Y_1l),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.b_vj$$_I2_.e6$$$$$Y_1l'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.b_vj$$_I2_.Acons),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.b_vj$$_I2_.Acons'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.w.$$4),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.w.$$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.w._6_o$),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.w._6_o$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.w.w_Z),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.w.w_Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.Q$.D4K$ds__),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.Q$.D4K$ds__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.Q$.A8n__2$G),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.Q$.A8n__2$G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.$$.Q$._ap),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.$$.Q$._ap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX._1__),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX._1__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX._P),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX._P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX.Cl),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.xt_t228$_xX.Cl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.lict.b880$$8lY),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.lict.b880$$8lY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.lict.n$g),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.lict.n$g'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.lict.$$m$$N$P),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.lict.$$m$$N$P'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.$.m$Yo_M),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.$.m$Yo_M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.$._),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.bMi$r9YQ_T.$.$F$__callna),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.bMi$r9YQ_T.$.$F$__callna'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.sCprot._$),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.sCprot._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.sCprot.d7$),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.sCprot.d7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.sCprot.$),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.sCprot.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.X.wcproper),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.X.wcproper'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.X.$$0P_0w),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.X.$$0P_0w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2.X.$$$__A),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2.X.$$$__A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2._b$.$p$A$s9tT9),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2._b$.$p$A$s9tT9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2._b$._$valueO),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2._b$._$valueO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v._O8$1_.D2._b$._E__S),
      // @ts-ignore
      i18next.t('c66b:_77.v._O8$1_.D2._b$._E__S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.Lkey.$l_wJ_$_),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.Lkey.$l_wJ_$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.Lkey.e),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.Lkey.e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.Lkey.B),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.Lkey.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$1e$__3._3_),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$1e$__3._3_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$1e$__3.iE$T___2),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$1e$__3.iE$T___2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$1e$__3.x),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$1e$__3.x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$FPY.a$t),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$FPY.a$t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$FPY.J$_I$$__K),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$FPY.J$_I$$__K'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.$valueOf.$FPY.Q2E_),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.$valueOf.$FPY.Q2E_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.EaRG_q_1.j_6$2),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.EaRG_q_1.j_6$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.EaRG_q_1.$D4),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.EaRG_q_1.$D4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.EaRG_q_1._v$$fo_T9),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.EaRG_q_1._v$$fo_T9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.$.__6callto),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.$.__6callto'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.$.S$p),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.$.S$p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$.$.XY_$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$.$.XY_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$._Zdk1_.$sB42$6$d),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$._Zdk1_.$sB42$6$d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$._Zdk1_.$_BT3$$1),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$._Zdk1_.$_BT3$$1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.z_B2_1s$$._Zdk1_.$$__$6S),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.z_B2_1s$$._Zdk1_.$$__$6S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_c.EL65$t_6Q$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_c.EL65$t_6Q$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_c.u$8y_F_L$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_c.u$8y_F_L$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_c.$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_c.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.kT21._$_$9m$_Djn),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.kT21._$_$9m$_Djn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.kT21._YU),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.kT21._YU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.kT21._8_$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.kT21._8_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_R_XO7O$A.$),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_R_XO7O$A.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_R_XO7O$A.D0Bj$__RB),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_R_XO7O$A.D0Bj$__RB'),
    )

    vi.assert.equal(
      i18prev.t($ => $['c66b:']._77.v.c43.AcWg_.$_R_XO7O$A.$$__9),
      // @ts-ignore
      i18next.t('c66b:_77.v.c43.AcWg_.$_R_XO7O$A.$$__9'),
    )

  })
})
