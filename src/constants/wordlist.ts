import { CONFIG } from './config'

export const WORDS = [
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
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
