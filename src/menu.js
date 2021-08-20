import { Menu } from './core/menu'
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
  add() {}
}
