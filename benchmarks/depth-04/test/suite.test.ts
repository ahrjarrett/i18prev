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

vi.describe('〖⛳️〗‹‹‹ ❲@i18prev/benchmarks/depth-04❳', () => {
  vi.it('〖⛳️〗› ❲generated test suite❳', () => {
    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$64_.Y_8),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$64_.Y_8'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$64_._2),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$64_._2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$64_.DSx),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$64_.DSx'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$c0Na_.d__3z_W),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$c0Na_.d__3z_W'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$c0Na_.fueO),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$c0Na_.fueO'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e.$c0Na_.$N1$_lc$),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e.$c0Na_.$N1$_lc$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e._3.$___rSK),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e._3.$___rSK'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e._3.r_$6),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e._3.r_$6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:']._$1$_$m8f6e._3._$$J),
      // @ts-ignore
      i18next.t('db$:_$1$_$m8f6e._3._$$J'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93._UXe__.$6i__Y$NW),
      // @ts-ignore
      i18next.t('db$:$__H2VB93._UXe__.$6i__Y$NW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93._UXe__.DK$Z6_VH70),
      // @ts-ignore
      i18next.t('db$:$__H2VB93._UXe__.DK$Z6_VH70'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93._UXe__.$_H_$_L1s6),
      // @ts-ignore
      i18next.t('db$:$__H2VB93._UXe__.$_H_$_L1s6'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.$.H$a$z____AE),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.$.H$a$z____AE'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.$.ua$const),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.$.ua$const'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.$._ke),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.$._ke'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.b3__X.z),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.b3__X.z'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.b3__X.__$OQb9I$),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.b3__X.__$OQb9I$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].$__H2VB93.b3__X.$2),
      // @ts-ignore
      i18next.t('db$:$__H2VB93.b3__X.$2'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.drj$_4$xS.__$),
      // @ts-ignore
      i18next.t('db$:deg.drj$_4$xS.__$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.drj$_4$xS._$),
      // @ts-ignore
      i18next.t('db$:deg.drj$_4$xS._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.drj$_4$xS.$__defineGe),
      // @ts-ignore
      i18next.t('db$:deg.drj$_4$xS.$__defineGe'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.$r.cp),
      // @ts-ignore
      i18next.t('db$:deg.$r.cp'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.$r.C9D9RV$1H_d),
      // @ts-ignore
      i18next.t('db$:deg.$r.C9D9RV$1H_d'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.$r.$call),
      // @ts-ignore
      i18next.t('db$:deg.$r.$call'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.A._$$f_Q),
      // @ts-ignore
      i18next.t('db$:deg.A._$$f_Q'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.A._c),
      // @ts-ignore
      i18next.t('db$:deg.A._c'),
    )

    vi.assert.equal(
      i18prev.t($ => $['db$:'].deg.A._$Ps),
      // @ts-ignore
      i18next.t('db$:deg.A._$Ps'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto._$$_b.$jW_S),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto._$$_b.$jW_S'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto._$$_b.xz$X_A5),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto._$$_b.xz$X_A5'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto._$$_b.xz__a08),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto._$$_b.xz__a08'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.D$p$.u),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.D$p$.u'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.D$p$._$$$0_D$N_),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.D$p$._$$$0_D$N_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.D$p$.A),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.D$p$.A'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.Cv6_jN4R.____),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.Cv6_jN4R.____'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.Cv6_jN4R.$x$$48$$N$_),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.Cv6_jN4R.$x$$48$$N$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:']._isProto.Cv6_jN4R.ROh6_$),
      // @ts-ignore
      i18next.t('$5D8$x$_:_isProto.Cv6_jN4R.ROh6_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$._$cY$$__R._$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$._$cY$$__R._$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$._$cY$$__R._),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$._$cY$$__R._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$._$cY$$__R._e),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$._$cY$$__R._e'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.$$$.e7),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.$$$.e7'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.$$$.$_13c8_$4_$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.$$$.$_13c8_$4_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.$$$.E$$GD),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.$$$.E$$GD'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.Z6R_8Mw$$$._F_1_),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.Z6R_8Mw$$$._F_1_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.Z6R_8Mw$$$.$6$$6xbw$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.Z6R_8Mw$$$.$6$$6xbw$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$N1$.Z6R_8Mw$$$.__$G_4q3),
      // @ts-ignore
      i18next.t('$5D8$x$_:$N1$.Z6R_8Mw$$$.__$G_4q3'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_._9___C_Ww.dbU0$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_._9___C_Ww.dbU0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_._9___C_Ww.aA),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_._9___C_Ww.aA'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_._9___C_Ww._ref),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_._9___C_Ww._ref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$T$_.pW),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$T$_.pW'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$T$_.$e$0_080p),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$T$_.$e$0_080p'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$T$_.$4),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$T$_.$4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$Q_$.$y_D$$$w$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$Q_$.$y_D$$$w$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$Q_$.Dr92S1i55lh),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$Q_$.Dr92S1i55lh'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5D8$x$_:'].$$_$MRw_.$$Q_$.$0v7_6_4$),
      // @ts-ignore
      i18next.t('$5D8$x$_:$$_$MRw_.$$Q_$.$0v7_6_4$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._$._3_59),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._$._3_59'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._$._b_Ho__g_),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._$._b_Ho__g_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._$.$cal),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._$.$cal'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw.$i._),
      // @ts-ignore
      i18next.t('$5$o:rhasOw.$i._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw.$i.T_9_$),
      // @ts-ignore
      i18next.t('$5$o:rhasOw.$i.T_9_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw.$i.$),
      // @ts-ignore
      i18next.t('$5$o:rhasOw.$i.$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._.__C_),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._.__C_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._.$Dc61),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._.$Dc61'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].rhasOw._.$T0c$),
      // @ts-ignore
      i18next.t('$5$o:rhasOw._.$T0c$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$._.EHv_$),
      // @ts-ignore
      i18next.t('$5$o:$._.EHv_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$._.$fk25O_B),
      // @ts-ignore
      i18next.t('$5$o:$._.$fk25O_B'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$._._$_),
      // @ts-ignore
      i18next.t('$5$o:$._._$_'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.D1T_7.Y$S_X),
      // @ts-ignore
      i18next.t('$5$o:$.D1T_7.Y$S_X'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.D1T_7.Z_$_$),
      // @ts-ignore
      i18next.t('$5$o:$.D1T_7.Z_$_$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.D1T_7.y_d$2KN$),
      // @ts-ignore
      i18next.t('$5$o:$.D1T_7.y_d$2KN$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.V$ma_vg$V5.$$MV$KOg$),
      // @ts-ignore
      i18next.t('$5$o:$.V$ma_vg$V5.$$MV$KOg$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.V$ma_vg$V5.b_G8$_wQ$m),
      // @ts-ignore
      i18next.t('$5$o:$.V$ma_vg$V5.b_G8$_wQ$m'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].$.V$ma_vg$V5._k9$C7_AY),
      // @ts-ignore
      i18next.t('$5$o:$.V$ma_vg$V5._k9$C7_AY'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.cFrd0$.cro),
      // @ts-ignore
      i18next.t('$5$o:E.cFrd0$.cro'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.cFrd0$._),
      // @ts-ignore
      i18next.t('$5$o:E.cFrd0$._'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.cFrd0$.$key),
      // @ts-ignore
      i18next.t('$5$o:E.cFrd0$.$key'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.m$X_8e$0KU._$$),
      // @ts-ignore
      i18next.t('$5$o:E.m$X_8e$0KU._$$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.m$X_8e$0KU.d__),
      // @ts-ignore
      i18next.t('$5$o:E.m$X_8e$0KU.d__'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.m$X_8e$0KU.aref),
      // @ts-ignore
      i18next.t('$5$o:E.m$X_8e$0KU.aref'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.$c74R$___q.STEA$$$__0$),
      // @ts-ignore
      i18next.t('$5$o:E.$c74R$___q.STEA$$$__0$'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.$c74R$___q.$_b4),
      // @ts-ignore
      i18next.t('$5$o:E.$c74R$___q.$_b4'),
    )

    vi.assert.equal(
      i18prev.t($ => $['$5$o:'].E.$c74R$___q.$A$_2c$$),
      // @ts-ignore
      i18next.t('$5$o:E.$c74R$___q.$A$_2c$$'),
    )

  })
})
