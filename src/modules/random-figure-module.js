import { Module } from "../core/module";
import { random, makeCanvas, randomColorRGB } from "../utils";
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
  trigger() {
    const { height, width } = window.screen;
    const canvas = makeCanvas(width, height / 2);
    const figure = this.arrayOfFigure[random(0, this.arrayOfFigure.length - 1)];

    const context = canvas.getContext("2d");
    context.fillStyle = randomColorRGB();

    const a = random(0, width);
    const b = random(0, height);
    const c = random(0, width - a);
    const d = random(0, height - b);

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

    document.body.append(canvas);
    setTimeout(() => {
      canvas.remove();
    }, 3000);
  }
}
