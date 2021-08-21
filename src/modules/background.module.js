import { Module } from '../core/module'
import { BACKGROUND_COLORS as BGColors } from '../core/constants/background-colors'
import { random } from '../utils'
export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    const randomColor = random(0,BGColors.length-1)
    document.body.style.background = BGColors[randomColor]
  }
}
