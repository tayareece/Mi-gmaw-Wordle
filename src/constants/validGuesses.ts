import { CONFIG } from './config'

export const VALIDGUESSES = [
  "ge'tiap",
  "gawiei",
  "giwnig",
  "jigmit",
  "lentug",
  "matues",
  "mui'n'ej",
  "mujpej",
  "paqt'sm",
  "qalipu",
  "te'pulj",
  "ulaquan",
  "wissei",
  "jigmit",
  "napioq",
  "nmu'ji'j",
  "tia'mu'j",
  "gapsgw",
  "paqo'si",
  "po'gwin",
  "qospem",
  "tgupoq",
  "alawei",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
