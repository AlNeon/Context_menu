export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomColorRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
}

export function makeCanvas(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  canvas.className = 'canvas'
  return canvas
}

export function makeQuoteBlock({ name, work, quote, avatar }) {
  const block = document.createElement('div')
  block.className = 'block'

  const img = document.createElement('img')
  img.src = avatar
  img.alt = name
  img.className = 'block_img'

  const title = document.createElement('h2')
  title.textContent = name
  title.className = 'block_title'

  const workName = document.createElement('p')
  workName.textContent = work
  workName.className = 'block_work'

  const quoteText = document.createElement('p')
  quoteText.textContent = quote
  quoteText.className = 'block_quote'

  block.append(img, title, workName, quoteText)

  return block
}

export function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
