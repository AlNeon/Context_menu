import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { SoundModule } from "./modules/sound.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
    document.body.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      this.open(e)
    })
  }
  open(e) {
    this.el.classList.add('open')
    const { clientX: mouseX, clientY: mouseY } = e
    this.el.style.top = `${mouseY}px`
    this.el.style.left = `${mouseX}px`
  }

  close() {
    this.el.classList.remove('open')
  }
  add() {
    const backgroundModule = new BackgroundModule('background', 'поменять цвет')
    this.el.insertAdjacentHTML('afterbegin', backgroundModule.toHTML())
    const bgTrigger = document.querySelector("[data-type='background']")
    bgTrigger.addEventListener('click', () => {
      backgroundModule.trigger()
    })

    const soundModule = new SoundModule('sound', 'Звук')
    this.el.insertAdjacentHTML('beforeend', soundModule.toHTML())
    const soundTrigger = document.querySelector("[data-type='sound']")
    soundTrigger.addEventListener('click', () => {
      soundModule.trigger();
    })
  }
}
