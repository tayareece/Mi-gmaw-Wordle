import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'e',
  'i',
  'o',
  'u',
  "a'",
  "e'",
  "i'",
  "o'",
  "u'",
  "ɨ",
  'p',
  't',
  'g',
  'q',
  'j',
  's',
  'l',
  'm',
  'n',
  'w',
  'y',
  "n'",
  "t'",
  "g'",
  "m'"'  
        ]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
