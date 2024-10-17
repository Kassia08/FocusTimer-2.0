import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
       const action = event.target.dataset.action
       if(typeof actions[action] != "function") {
        return
       }

       actions[action]()
    })
}

export function setMinutes () {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time 

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
} 

document.querySelectorAll('#controls-musics button').forEach(btn => {
    btn.addEventListener('click', function() {
        const soundId = this.dataset.soundId;

        if (soundId && actions[soundId]) {
            actions[soundId]();
        }
    });
});