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
  i18next.t('e_5Nmd:u_w.$$g2Z')
}).types([19470,"instantiations"])

bench('〖⛳️〗› ❲i18prev❳: generated type-level benchmark', () => {
  i18prev.t($ => $['e_5Nmd:'].u_w.$$g2Z)
}).types([338,"instantiations"])
