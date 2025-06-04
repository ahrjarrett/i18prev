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

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-05❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.$_tB_62_VRs._f$_10W),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.$_tB_62_VRs._f$_10W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.$_tB_62_VRs.$__proto__),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.$_tB_62_VRs.$__proto__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.$_tB_62_VRs.xh),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.$_tB_62_VRs.xh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.mJ$$$5V_5.$YK9tw$D$_h),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.mJ$$$5V_5.$YK9tw$D$_h'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.mJ$$$5V_5.D_),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.mJ$$$5V_5.D_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.mJ$$$5V_5.pP5vb_8),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.mJ$$$5V_5.pP5vb_8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.b$3$bO.f$9E),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.b$3$bO.f$9E'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.b$3$bO.B),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.b$3$bO.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.A_pp.b$3$bO.b2),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.A_pp.b$3$bO.b2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$2.Bkey),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$2.Bkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$2.a),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$2.a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$2.v),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$2.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$proto.e92l_),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$proto.e92l_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$proto._8w$),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$proto._8w$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.$proto._T$J$0_6_q),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.$proto._T$J$0_6_q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.E34$$4_.B),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.E34$$4_.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.E34$$4_.$key),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.E34$$4_.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t._S.E34$$4_.__dG7$lu$58),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t._S.E34$$4_.__dG7$lu$58'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.G$h.Pa2),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.G$h.Pa2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.G$h.y_8_41wW1),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.G$h.y_8_41wW1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.G$h.Bkey),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.G$h.Bkey'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.$.$4_),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.$.$4_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.$._51X$$_),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.$._51X$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$.$.By),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$.$.By'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$._$_7bq.pK),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$._$_7bq.pK'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$._$_7bq._toString),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$._$_7bq._toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].$t.d$._$_7bq.RnY_Et_$3t_),
      // @ts-ignore
      i18next.t('_3_$d$_2:$t.d$._$_7bq.RnY_Et_$3t_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9._3$$__K$$_0.$toString),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9._3$$__K$$_0.$toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9._3$$__K$$_0.___1D7$$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9._3$$__K$$_0.___1D7$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9._3$$__K$$_0._$__h$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9._3$$__K$$_0._$__h$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.CG$$__X.P$$$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.CG$$__X.P$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.CG$$__X.$pp),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.CG$$__X.$pp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.CG$$__X.T$_$7),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.CG$$__X.T$_$7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.$ypropert.T$rtyd3$$B),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.$ypropert.T$rtyd3$$B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.$ypropert.W$1C$$sl4d),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.$ypropert.W$1C$$sl4d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.B$$1e$$V$$9.$ypropert._),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.B$$1e$$V$$9.$ypropert._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._._$3Y$kz$_53.JLf$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._._$3Y$kz$_53.JLf$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._._$3Y$kz$_53._$_2),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._._$3Y$kz$_53._$_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._._$3Y$kz$_53.$__),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._._$3Y$kz$_53.$__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.CJd6F_$.$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.CJd6F_$.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.CJd6F_$.q5__$WGF$H),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.CJd6F_$.q5__$WGF$H'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.CJd6F_$.a7),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.CJd6F_$.a7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.$Wc.B1__$u),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.$Wc.B1__$u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.$Wc.xO$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.$Wc.xO$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL._.$Wc.$),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL._.$Wc.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.Z_$.Y$_t_Z83X),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.Z_$.Y$_t_Z83X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.Z_$._asOw__pr),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.Z_$._asOw__pr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.Z_$._b),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.Z_$._b'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.$_.uA),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.$_.uA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.$_.X2a),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.$_.X2a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1.$_.E____),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1.$_.E____'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1._2Aref6e8z_.D_$VW2Q),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1._2Aref6e8z_.D_$VW2Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1._2Aref6e8z_.c5__1$__b$f),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1._2Aref6e8z_.c5__1$__b$f'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:']._wL.$$1._2Aref6e8z_._$Oa$1__O),
      // @ts-ignore
      i18next.t('_3_$d$_2:_wL.$$1._2Aref6e8z_._$Oa$1__O'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._prototype.M_o_$_$),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._prototype.M_o_$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._prototype._3_5),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._prototype._3_5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._prototype._V1e_Vv1a$),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._prototype._V1e_Vv1a$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._2xo_F.b$uA),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._2xo_F.b$uA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._2xo_F.$3al_Zl),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._2xo_F.$3al_Zl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_._2xo_F.wbc__j$wRSM),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_._2xo_F.wbc__j$wRSM'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_.F$$2AXX6.C_71),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_.F$$2AXX6.C_71'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_.F$$2AXX6.qeH252R),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_.F$$2AXX6.qeH252R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.d_.F$$2AXX6.X),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.d_.F$$2AXX6.X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.df_.$le),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.df_.$le'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.df_._j$u$_$$d42),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.df_._j$u$_$$d42'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.df_.$Em),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.df_.$Em'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.__.$0dO_),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.__.$0dO_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.__.__),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.__.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.__.b$$ra),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.__.b$$ra'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.a7eSSb$2._$g$),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.a7eSSb$2._$g$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.a7eSSb$2._),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.a7eSSb$2._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.$vdefine.a7eSSb$2.Q3),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.$vdefine.a7eSSb$2.Q3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.A$fM___WJLH.__L),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.A$fM___WJLH.__L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.A$fM___WJLH.$4__q),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.A$fM___WJLH.$4__q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.A$fM___WJLH.v),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.A$fM___WJLH.v'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.___0.T$l$m$Z_),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.___0.T$l$m$Z_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.___0.__),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.___0.__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d.___0._$),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d.___0._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d._1z.IP),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d._1z.IP'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d._1z._BA_7e$_$q),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d._1z._BA_7e$_$q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['_3_$d$_2:'].t__1ps3.C_d._1z.sf1$8XvrXFA),
      // @ts-ignore
      i18next.t('_3_$d$_2:t__1ps3.C_d._1z.sf1$8XvrXFA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_.aM_$C5_.$2_a_ww$M),
      // @ts-ignore
      i18next.t('$a:A.S_.aM_$C5_.$2_a_ww$M'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_.aM_$C5_.o__k),
      // @ts-ignore
      i18next.t('$a:A.S_.aM_$C5_.o__k'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_.aM_$C5_.$_),
      // @ts-ignore
      i18next.t('$a:A.S_.aM_$C5_.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._valueOf.$$_),
      // @ts-ignore
      i18next.t('$a:A.S_._valueOf.$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._valueOf.$$$$),
      // @ts-ignore
      i18next.t('$a:A.S_._valueOf.$$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._valueOf.r),
      // @ts-ignore
      i18next.t('$a:A.S_._valueOf.r'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._7$$$97e.J_$),
      // @ts-ignore
      i18next.t('$a:A.S_._7$$$97e.J_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._7$$$97e.v$mnT_d),
      // @ts-ignore
      i18next.t('$a:A.S_._7$$$97e.v$mnT_d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.S_._7$$$97e._),
      // @ts-ignore
      i18next.t('$a:A.S_._7$$$97e._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN._.$L3),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN._.$L3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN._.AbI$_1c_),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN._.AbI$_1c_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN._.$$),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN._.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.EhasO._V$9_5n30_),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.EhasO._V$9_5n30_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.EhasO.$),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.EhasO.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.EhasO.__b__),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.EhasO.__b__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.__N5._$D),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.__N5._$D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.__N5.qzH92$),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.__N5.qzH92$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.Rnn__xeb$WN.__N5.$_d_817a),
      // @ts-ignore
      i18next.t('$a:A.Rnn__xeb$WN.__N5.$_d_817a'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.___defineSe.$rTt_),
      // @ts-ignore
      i18next.t('$a:A.$z7r.___defineSe.$rTt_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.___defineSe.Q),
      // @ts-ignore
      i18next.t('$a:A.$z7r.___defineSe.Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.___defineSe._9$D),
      // @ts-ignore
      i18next.t('$a:A.$z7r.___defineSe._9$D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.$__.$2Y1AN2),
      // @ts-ignore
      i18next.t('$a:A.$z7r.$__.$2Y1AN2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.$__.$__H$3$),
      // @ts-ignore
      i18next.t('$a:A.$z7r.$__.$__H$3$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.$__._$_1BX_7$),
      // @ts-ignore
      i18next.t('$a:A.$z7r.$__._$_1BX_7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.Si$$$._hk2),
      // @ts-ignore
      i18next.t('$a:A.$z7r.Si$$$._hk2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.Si$$$._),
      // @ts-ignore
      i18next.t('$a:A.$z7r.Si$$$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].A.$z7r.Si$$$.$M9_P9$),
      // @ts-ignore
      i18next.t('$a:A.$z7r.Si$$$.$M9_P9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._arg.y2n),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._arg.y2n'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._arg.v__2$7$$s),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._arg.v__2$7$$s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._arg.$84w),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._arg.$84w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0.$9q$Pvc_$G.$$R),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0.$9q$Pvc_$G.$$R'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0.$9q$Pvc_$G.__$$7$),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0.$9q$Pvc_$G.__$$7$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0.$9q$Pvc_$G.$$tH_jD$),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0.$9q$Pvc_$G.$$tH_jD$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._$Wd_VbZ7H_._EC),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._$Wd_VbZ7H_._EC'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._$Wd_VbZ7H_.f8c6_$j),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._$Wd_VbZ7H_.f8c6_$j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.W$__$$t_0._$Wd_VbZ7H_.$3_3u),
      // @ts-ignore
      i18next.t('$a:Zk5v.W$__$$t_0._$Wd_VbZ7H_.$3_3u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.$1i$1.wpU),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.$1i$1.wpU'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.$1i$1.e$f_2),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.$1i$1.e$f_2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.$1i$1.z_k_$9),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.$1i$1.z_k_$9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.lO_UXg.se_DGDE_),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.lO_UXg.se_DGDE_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.lO_UXg.$$$),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.lO_UXg.$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.lO_UXg.zd$pj0$),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.lO_UXg.zd$pj0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.gA$$.$__loo),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.gA$$.$__loo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.gA$$._F1$_2$D),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.gA$$._F1$_2$D'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.__8g$6.gA$$.cx15J_),
      // @ts-ignore
      i18next.t('$a:Zk5v.__8g$6.gA$$.cx15J_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$d.vbi),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$d.vbi'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$d.eZt),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$d.eZt'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$d._bindo),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$d._bindo'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._._rop),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._._rop'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._._x$_$zW),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._._x$_$zW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._._),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$$4.$),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$$4.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$$4._valueOf),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$$4._valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].Zk5v.Hv._$$4.y2$r_$),
      // @ts-ignore
      i18next.t('$a:Zk5v.Hv._$$4.y2$r_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.N.B3),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.N.B3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.N.dsA),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.N.dsA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.N.Q),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.N.Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.k24L11$3_.w),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.k24L11$3_.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.k24L11$3_.X5_U2),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.k24L11$3_.X5_U2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.k24L11$3_.E__de),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.k24L11$3_.E__de'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.$E$$zn.V_),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.$E$$zn.V_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.$E$$zn.j),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.$E$$zn.j'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.$_$$1q3u.$E$$zn._8k$_),
      // @ts-ignore
      i18next.t('$a:$_$$n.$_$$1q3u.$E$$zn._8k$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.x$_$_kVw_.f_4_9___$x),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.x$_$_kVw_.f_4_9___$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.x$_$_kVw_.G73L$$_),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.x$_$_kVw_.G73L$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.x$_$_kVw_.L4$),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.x$_$_kVw_.L4$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.Ezr_$$_.$4_a$_),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.Ezr_$$_.$4_a$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.Ezr_$$_.___$),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.Ezr_$$_.___$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.Ezr_$$_.cX_3_$6PdQ),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.Ezr_$$_.cX_3_$6PdQ'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.w__proto__._T_$8z$),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.w__proto__._T_$8z$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.w__proto__.c),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.w__proto__.c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.sz.w__proto__.Z$$o),
      // @ts-ignore
      i18next.t('$a:$_$$n.sz.w__proto__.Z$$o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z._E.$$$7_1),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z._E.$$$7_1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z._E.a$$_Y1_Z),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z._E.a$$_Y1_Z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z._E.cap),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z._E.cap'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.$_.C),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.$_.C'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.$_.xLp7__$a$),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.$_.xLp7__$a$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.$_.o),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.$_.o'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.Uaf.__$0PAj),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.Uaf.__$0PAj'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.Uaf.___),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.Uaf.___'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$a:'].$_$$n.Z.Uaf.en),
      // @ts-ignore
      i18next.t('$a:$_$$n.Z.Uaf.en'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt._$$M7$AT8.Gdd),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt._$$M7$AT8.Gdd'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt._$$M7$AT8.W__fine),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt._$$M7$AT8.W__fine'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt._$$M7$AT8._m),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt._$$M7$AT8._m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.z__.w),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.z__.w'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.z__.$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.z__.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.z__.$$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.z__.$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.a$5PJSqM.$_BU$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.a$5PJSqM.$_BU$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.a$5PJSqM._ftp),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.a$5PJSqM._ftp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.y_D_Zt.a$5PJSqM.$c),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.y_D_Zt.a$5PJSqM.$c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.v_3A8_F.__Eu),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.v_3A8_F.__Eu'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.v_3A8_F._u6GX),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.v_3A8_F._u6GX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.v_3A8_F.Ant_P6F_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.v_3A8_F.Ant_P6F_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.vW7_z_b_._$gS),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.vW7_z_b_._$gS'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.vW7_z_b_.cW_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.vW7_z_b_.cW_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.vW7_z_b_.$cal),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.vW7_z_b_.$cal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.c3_lW._),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.c3_lW._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.c3_lW.Xr),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.c3_lW.Xr'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.b.c3_lW._valueOf),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.b.c3_lW._valueOf'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.C1.$b1r1_$_7__),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.C1.$b1r1_$_7__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.C1._$$q_88$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.C1._$$q_88$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.C1.VN_0fM3s),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.C1.VN_0fM3s'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.a.G$L$x_$AuY_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.a.G$L$x_$AuY_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.a.$9$5o9),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.a.$9$5o9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.a.$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.a.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.B$$.B),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.B$$.B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.B$$.$2S),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.B$$.$2S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$z_F_P$nv$_.wcall.B$$._b3a$cn$K$G),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$z_F_P$nv$_.wcall.B$$._b3a$cn$K$G'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.$$__._$__9$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.$$__._$__9$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.$$__._99$dN_$SO),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.$$__._99$dN_$SO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.$$__._$$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.$$__._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de._Z_zx._),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de._Z_zx._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de._Z_zx._apply),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de._Z_zx._apply'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de._Z_zx.xa$$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de._Z_zx.xa$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.E978x.$toString),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.E978x.$toString'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.E978x.b34),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.E978x.b34'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.a__de.E978x.c01),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.a__de.E978x.c01'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$._e.d85$3$o_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$._e.d85$3$o_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$._e._nume$3_n__),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$._e._nume$3_n__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$._e._p9),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$._e._p9'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.___Y__$X_$.$_$voN_3$m),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.___Y__$X_$.$_$voN_3$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.___Y__$X_$.Zc),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.___Y__$X_$.Zc'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.___Y__$X_$.$Zb_bx_VBe),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.___Y__$X_$.$Zb_bx_VBe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.t3$3.$Ater__appl),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.t3$3.$Ater__appl'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.t3$3._OCD00DC_V),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.t3$3._OCD00DC_V'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.$.t3$3._1t),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.$.t3$3._1t'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.v50.p$R____q5),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.v50.p$R____q5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.v50._25),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.v50._25'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.v50.$hasOwn),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.v50.$hasOwn'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.$_1.y$$9O93),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.$_1.y$$9O93'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.$_1.__e$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.$_1.__e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.$_1.a_keyrgume),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.$_1.a_keyrgume'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.wx_x_6z$9a.$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.wx_x_6z$9a.$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.wx_x_6z$9a._AX),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.wx_x_6z$9a._AX'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].e.v$m$$.wx_x_6z$9a.$_1_d8__$X$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:e.v$m$$.wx_x_6z$9a.$_1_d8__$X$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.z.Zw_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.z.Zw_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.z.$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.z.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.z.y),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.z.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$apply._),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$apply._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$apply.$j4),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$apply.$j4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$apply.$7_3__Y1_e$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$apply.$7_3__Y1_e$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$caller._r0ES$4_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$caller._r0ES$4_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$caller.$K6),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$caller.$K6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_._Hx1.$caller._O_$_m66L$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_._Hx1.$caller._O_$_m66L$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._05_T$2iT.T_VH$$M$$$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._05_T$2iT.T_VH$$M$$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._05_T$2iT.$xR1),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._05_T$2iT.$xR1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._05_T$2iT._5Ne_i__L),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._05_T$2iT._5Ne_i__L'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._.C0__2_gw$x),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._.C0__2_gw$x'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._.yA6B1),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._.yA6B1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_._.SC1),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_._.SC1'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_.C.H$L2),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_.C.H$L2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_.C.y),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_.C.y'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.c9_.C._$$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.c9_.C._$$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc._$__$1E$$$A.b_sW2liE$4),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc._$__$1E$$$A.b_sW2liE$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc._$__$1E$$$A.$$),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc._$__$1E$$$A.$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc._$__$1E$$$A.__1EK_u),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc._$__$1E$$$A.__1EK_u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.cU.v_$N_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.cU.v_$N_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.cU.$X),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.cU.$X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.cU.$27$80$_$$e),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.cU.$27$80$_$$e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.$.$_$_$U2),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.$.$_$_$U2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.$.oref),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.$.oref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['TZk8T$7_$_:'].$_PE3_.dc.$.$_),
      // @ts-ignore
      i18next.t('TZk8T$7_$_:$_PE3_.dc.$.$_'),
    )

  })
})
