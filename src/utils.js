export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColorRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export function makeCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.className = "canvas";
  return canvas;
}
