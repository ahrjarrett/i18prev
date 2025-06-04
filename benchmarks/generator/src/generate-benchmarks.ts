
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

bench("i18next.t", () => {
  i18next.t("$0b9:$z.$a.$.$_xFC_R.GGhS.$$")
}).types([812647, "instantiations"])

bench("i18prev.t", () => {
  i18prev.t(($) => $['$0b9:'].$z.$a.$.$_xFC_R.GGhS.$$)
}).types([712, "instantiations"])
