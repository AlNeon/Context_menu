import { Module } from "../core/module";
import { random, makeQuoteBlock } from "../utils";
import { QUOTES } from "../core/constants/quotes";

export class RandomMessage extends Module {
  #quotes;
  constructor(type, text) {
    super(type, text);
    this.#quotes = QUOTES;
  }
  get quotes() {
    return this.#quotes;
  }
  trigger() {
    const quote = this.quotes[random(0, this.quotes.length - 1)];
    const box = document.querySelector(".box") || document.createElement("div");
    box.className = "box";
    const block = makeQuoteBlock(quote);
    box.append(block);
    document.body.append(box);

    setTimeout(() => {
      block.remove();
    }, 5000);
  }
}
