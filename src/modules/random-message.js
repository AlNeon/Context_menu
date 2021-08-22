import { Module } from "../core/module";
import { random } from "../utils";
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

  makeQuoteBlock({ name, work, quote, avatar }) {
    const block = document.createElement("div");
    block.className = "block";

    const img = document.createElement("img");
    img.src = avatar;
    img.alt = name;
    img.className = "block_img";

    const title = document.createElement("h2");
    title.textContent = name;
    title.className = "block_title";

    const workName = document.createElement("p");
    workName.textContent = work;
    workName.className = "block_work";

    const quoteText = document.createElement("p");
    quoteText.textContent = quote;
    quoteText.className = "block_quote";

    block.append(img, title, workName, quoteText);

    return block;
  }

  trigger() {
    const quote = this.quotes[random(0, this.quotes.length - 1)];
    const box = document.querySelector(".box") || document.createElement("div");
    box.className = "box";
    const block = this.makeQuoteBlock(quote);
    box.append(block);
    document.body.append(box);

    setTimeout(() => {
      block.remove();
    }, 5000);
  }
}
