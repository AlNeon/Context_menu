import { Module } from '../core/module'
import { scale } from '../utils'

export class BluryLoading extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    document.querySelector('#blur_container').innerHTML = `
    <section class="bg"></section>
    <div class="loading-text">0%</div>
    `
    const loadText = document.querySelector('.loading-text')
    const bg = document.querySelector('.bg')

    let load = 0

    let int = setInterval(blurring, 30)

    function blurring() {
      load++
      if (load > 99) {
        clearInterval(int)
      }

      loadText.innerText = `${load}%`
      loadText.style.opacity = scale(load, 0, 100, 1, 0)

      bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

      setTimeout(() => {
        document.querySelector('.bg').remove()
        document.querySelector('.loading-text').remove()
      }, 6000)
    }
  }
}
