import { Module } from "../core/module";
import { random, randomColorRGB } from "../utils";
import { FIGURE } from "../core/constants/figure";

export class RandomFigureModule extends Module {
  #arrayOfFigure;
  constructor(type, text) {
    super(type, text);
    this.#arrayOfFigure = FIGURE;
  }
  get arrayOfFigure() {
    return this.#arrayOfFigure;
  }
  makeCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.className = "canvas";
    return canvas;
  }
  trigger() {
    const { height, width } = window.screen;
    const canvas = this.makeCanvas(width, height * 0.8);
    const figure = this.arrayOfFigure[random(0, this.arrayOfFigure.length - 1)];

    const context = canvas.getContext("2d");
    context.fillStyle = randomColorRGB();

    const a = random(0, width);
    const b = random(0, height * 0.8);
    const c = random(10, width - a);
    const d = random(10, height * 0.8 - b);

    switch (figure) {
      case "rectangle":
        context.fillRect(a, b, c, d);
        break;
      case "square":
        context.fillRect(a, b, d, d);
        break;
      case "triangle":
        context.beginPath();
        context.moveTo(a, b);
        context.lineTo(c, b);
        context.lineTo(d, c);
        context.lineTo(a, b);
        context.fill();
        break;
      default:
        context.beginPath();
        context.arc(a, b, d, 0, 2 * Math.PI, false);
        context.fill();
    }

    document.body.prepend(canvas);
    setTimeout(() => {
      canvas.remove();
    }, 3000);
  }
}
