export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColorRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
