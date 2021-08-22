import { Module } from "../core/module";

export class RandomFigureModule extends Module {
  static arrayOfFigure = [];
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const { height, width } = window.screen;
    console.log(height);
    console.log(width);
  }
}
