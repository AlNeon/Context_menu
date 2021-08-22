import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { SoundModule } from './modules/sound.module'
import { TimerModule } from './modules/timer.module'
import { RandomFigureModule } from './modules/random-figure-module'
import { ClicksModule } from './modules/clicks.module'
import { RandomMessage } from './modules/random-message'
import { ChoicePickerModule } from './modules/choice-picker.module'
import { BluryLoading } from './modules/blury-loading.module'
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
    const backgroundModule = new BackgroundModule('background', 'Смена фона')
    this.el.insertAdjacentHTML('afterbegin', backgroundModule.toHTML())
    const bgTrigger = document.querySelector("[data-type='background']")
    bgTrigger.addEventListener('click', () => {
      backgroundModule.trigger()
      this.close()
    })

    const soundModule = new SoundModule('sound', 'Проиграть звук')
    this.el.insertAdjacentHTML('beforeend', soundModule.toHTML())
    const soundTrigger = document.querySelector("[data-type='sound']")
    soundTrigger.addEventListener('click', () => {
      soundModule.trigger()
      this.close()
    })

    const timerModule = new TimerModule('timer', 'Таймер обратного отсчета')
    this.el.insertAdjacentHTML('beforeend', timerModule.toHTML())
    const timerTrigger = document.querySelector("[data-type='timer']")
    timerTrigger.addEventListener('click', () => {
      this.close()
      timerModule.trigger()
    })

    const randomFigureModule = new RandomFigureModule('figure', 'Случайная фигура')
    this.el.insertAdjacentHTML('beforeend', randomFigureModule.toHTML())
    const figureTrigger = document.querySelector("[data-type='figure']")
    figureTrigger.addEventListener('click', () => {
      randomFigureModule.trigger()
      this.close()
    })

    const clicksModule = new ClicksModule('clicks', 'Аналитика кликов')
    this.el.insertAdjacentHTML('beforeend', clicksModule.toHTML())
    const clicksTrigger = document.querySelector("[data-type='clicks']")
    clicksTrigger.addEventListener('click', () => {
      clicksModule.trigger()
      this.close()
    })

    const randomMessage = new RandomMessage('quote', 'Случайная цитата')
    this.el.insertAdjacentHTML('beforeend', randomMessage.toHTML())
    const messageTrigger = document.querySelector("[data-type='quote']")
    messageTrigger.addEventListener('click', () => {
      randomMessage.trigger()
      this.close()
    })

    const choicePickerModule = new ChoicePickerModule('choice-picker', 'Выбор случайного варианта')
    this.el.insertAdjacentHTML('beforeend', choicePickerModule.toHTML())
    const cpTrigger = document.querySelector("[data-type='choice-picker']")
    cpTrigger.addEventListener('click', () => {
      choicePickerModule.trigger()
      this.close()
    })

    const bluryLoadingModule = new BluryLoading('blury-loading', 'Blur-загрузка изображения')
    this.el.insertAdjacentHTML('beforeend', bluryLoadingModule.toHTML())
    const blTrigger = document.querySelector("[data-type='blury-loading']")
    blTrigger.addEventListener('click', () => {
      bluryLoadingModule.trigger()
      this.close()
    })
  }
}
