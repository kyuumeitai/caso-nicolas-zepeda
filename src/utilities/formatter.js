const durationFormatter = time => {
  const timeinminutes = time / 60
  const wholeminute = Math.floor(timeinminutes)
  const remainingseconds = Math.floor((timeinminutes - wholeminute) * 60)

  return `${wholeminute}:${remainingseconds > 9 ? '' : 0}${remainingseconds}`
}

export default durationFormatter
