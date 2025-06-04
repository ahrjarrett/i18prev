import { bench } from "@arktype/attest"
import i18next from "i18next"
import * as i18prev from "@i18prev/i18prev"
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

bench('〖⛳️〗› ❲i18next❳: generated type-level benchmark', () => {
  i18next.t('_:_$f6IE$1Z$.jqb03L_._$$_dU$.g.__.$len.oogD')
}).types([2416210,"instantiations"])

bench('〖⛳️〗› ❲i18prev❳: generated type-level benchmark', () => {
  i18prev.t($ => $['_:']._$f6IE$1Z$.jqb03L_._$$_dU$.g.__.$len.oogD)
}).types([338,"instantiations"])
