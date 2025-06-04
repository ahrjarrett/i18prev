#!/usr/bin/env pnpm dlx tsx
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as fc from 'fast-check'

import { PATH } from './path'

const options = {
  minKeys: 3,
  maxKeys: 3,
} satisfies fc.DictionaryConstraints

const property = fc.stringMatching(/^[$_a-zA-Z][$_a-zA-Z0-9]*$/)

const translations_01 = fc.dictionary(property, property, options)
const translations_02 = fc.dictionary(property, translations_01, options)
const translations_03 = fc.dictionary(property, translations_02, options)
const translations_04 = fc.dictionary(property, translations_03, options)
const translations_05 = fc.dictionary(property, translations_04, options)
const translations_06 = fc.dictionary(property, translations_05, options)
const translations_07 = fc.dictionary(property, translations_06, options)
const translations_08 = fc.dictionary(property, translations_07, options)
const translations_09 = fc.dictionary(property, translations_08, options)

const [trans_02] = fc.sample(translations_02, 1)
const json_02 = JSON.stringify(trans_02, null, 2)
const typescript_02 = 'export const translations = ' + json_02 + ' as const'

const [trans_03] = fc.sample(translations_03, 1)
const json_03 = JSON.stringify(trans_03, null, 2)
const typescript_03 = 'export const translations = ' + json_03 + ' as const'

const [trans_04] = fc.sample(translations_04, 1)
const json_04 = JSON.stringify(trans_04, null, 2)
const typescript_04 = 'export const translations = ' + json_04 + ' as const'

const [trans_05] = fc.sample(translations_05, 1)
const json_05 = JSON.stringify(trans_05, null, 2)
const typescript_05 = 'export const translations = ' + json_05 + ' as const'

const [trans_06] = fc.sample(translations_06, 1)
const json_06 = JSON.stringify(trans_06, null, 2)
const typescript_06 = 'export const translations = ' + json_06 + ' as const'

const [trans_07] = fc.sample(translations_07, 1)
const json_07 = JSON.stringify(trans_07, null, 2)
const typescript_07 = 'export const translations = ' + json_07 + ' as const'

const [trans_08] = fc.sample(translations_08, 1)
const json_08 = JSON.stringify(trans_08, null, 2)
const typescript_08 = 'export const translations = ' + json_08 + ' as const'

const [trans_09] = fc.sample(translations_09, 1)
const json_09 = JSON.stringify(trans_09, null, 2)
const typescript_09 = 'export const translations = ' + json_09 + ' as const'

function main() {
  if (!fs.existsSync(PATH.benchmarkTranslations[2])) fs.mkdirSync(PATH.benchmarkTranslations[2], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[3])) fs.mkdirSync(PATH.benchmarkTranslations[3], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[4])) fs.mkdirSync(PATH.benchmarkTranslations[4], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[5])) fs.mkdirSync(PATH.benchmarkTranslations[5], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[6])) fs.mkdirSync(PATH.benchmarkTranslations[6], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[7])) fs.mkdirSync(PATH.benchmarkTranslations[7], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[8])) fs.mkdirSync(PATH.benchmarkTranslations[8], { recursive: true })
  if (!fs.existsSync(PATH.benchmarkTranslations[9])) fs.mkdirSync(PATH.benchmarkTranslations[9], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[2])) fs.mkdirSync(PATH.testTranslations[2], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[3])) fs.mkdirSync(PATH.testTranslations[3], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[4])) fs.mkdirSync(PATH.testTranslations[4], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[5])) fs.mkdirSync(PATH.testTranslations[5], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[6])) fs.mkdirSync(PATH.testTranslations[6], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[7])) fs.mkdirSync(PATH.testTranslations[7], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[8])) fs.mkdirSync(PATH.testTranslations[8], { recursive: true })
  if (!fs.existsSync(PATH.testTranslations[9])) fs.mkdirSync(PATH.testTranslations[9], { recursive: true })

  fs.writeFileSync(path.join(PATH.benchmarkTranslations[2], 'translations.json'), json_02 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[3], 'translations.json'), json_03 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[4], 'translations.json'), json_04 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[5], 'translations.json'), json_05 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[6], 'translations.json'), json_06 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[7], 'translations.json'), json_07 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[8], 'translations.json'), json_08 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[9], 'translations.json'), json_09 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[2], 'translations.ts'), typescript_02 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[3], 'translations.ts'), typescript_03 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[4], 'translations.ts'), typescript_04 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[5], 'translations.ts'), typescript_05 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[6], 'translations.ts'), typescript_06 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[7], 'translations.ts'), typescript_07 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[8], 'translations.ts'), typescript_08 + '\n')
  fs.writeFileSync(path.join(PATH.benchmarkTranslations[9], 'translations.ts'), typescript_09 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[2], 'translations.ts'), typescript_02 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[3], 'translations.ts'), typescript_03 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[4], 'translations.ts'), typescript_04 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[5], 'translations.ts'), typescript_05 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[6], 'translations.ts'), typescript_06 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[7], 'translations.ts'), typescript_07 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[8], 'translations.ts'), typescript_08 + '\n')
  fs.writeFileSync(path.join(PATH.testTranslations[9], 'translations.ts'), typescript_09 + '\n')
}

void main()
