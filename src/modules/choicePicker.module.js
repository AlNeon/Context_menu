import { Module } from '../core/module'
import { random } from '../utils'

export class ChoicePickerModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    document.querySelector('#choice-picker-container').innerHTML = `
    <div class='choice-picker'>
        <h3 class='picker-condition'>
        Введите все варианты, разделенные запятой (','). <br />
        Press enter when you're done
      </h3>
      <textarea placeholder="Введите варианты здесь..." id="textarea" ></textarea>

      <div id="tags"></div>
      </div>
        `

    const tagsEl = document.getElementById('tags')
    const textarea = document.getElementById('textarea')

    textarea.focus()

    textarea.addEventListener('keyup', (e) => {
      createTags(e.target.value)

      if (e.key === 'Enter') {
        setTimeout(() => {
          e.target.value = ''
        }, 10)

        randomSelect()
      }
    })

    function createTags(input) {
      const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())

      tagsEl.innerHTML = ''

      tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
      })
    }

    function randomSelect() {
      const times = 29

      const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
          unHighlightTag(randomTag)
        }, 100)
      }, 100)

      setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
          const randomTag = pickRandomTag()

          highlightTag(randomTag)
          setTimeout(() => {
            document.querySelector('.choice-picker').remove()
          }, 5000)
        }, 100)
      }, times * 100)
    }

    function pickRandomTag() {
      const tags = document.querySelectorAll('.tag')
      return tags[random(0, tags.length - 1)]
    }

    function highlightTag(tag) {
      tag.classList.add('highlight')
    }

    function unHighlightTag(tag) {
      tag.classList.remove('highlight')
    }
  }
}
