import { Module } from '../core/module'
export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    document.body.style.background = 'linear-gradient(to bottom left, #cc0099 0%, #6600ff 102%)'
  }
}
