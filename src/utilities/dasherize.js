const dasherize = str => {
  const map = {
    '-': ' |:|/',
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  }

  let strlow = str.trim().toLowerCase()

  for (let pattern in map) {
    strlow = strlow.replace(new RegExp(map[pattern], 'g'), pattern)
  }
  let out = strlow.replace(/[^a-zA-Z0-9\-]/g, '-').replace(/-{2,}/g, '-')
  if (out.endsWith('-')) return out.slice(0, -1)
  return out
}

module.exports = dasherize
