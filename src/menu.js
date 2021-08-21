import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { TimerModule } from './modules/timer.module'

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

    const timerModule = new TimerModule ('timer', 'таймер');
    this.el.insertAdjacentHTML('beforeend', timerModule.toHTML());
    const timerTrigger = document.querySelector("[data-type='timer']");
    timerTrigger.addEventListener('click', () => {
      timerModule.trigger();
      this.close();
    })
  }
}
