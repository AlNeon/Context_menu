export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

const  c = ['blue','red']

console.log(random(0, c.length))