import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  console.log('toggleRunning called');
  state.isRunning = document.documentElement.
  classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
    console.log('reset called');
    state.isRunning = false 
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function add() {
    console.log('add called');

    timer.plus();
    sounds.buttonPressAudio.play();
}

export function subtract() {
    console.log('subtract called');

    timer.minus();
    sounds.buttonPressAudio.play();
}



el.forestBtn.addEventListener('click', () => {
    toggleSound(el.forestBtn, sounds.buttonForest)
})

el.rainBtn.addEventListener('click', () => {
    toggleSound(el.rainBtn, sounds.buttonRain)
})

el.coffeeBtn.addEventListener('click', () => {
    toggleSound(el.coffeeBtn, sounds.buttonCoffeeShop)
})

el.fireplaceBtn.addEventListener('click', () => {
    toggleSound(el.fireplaceBtn, sounds.buttonFireplace)
})

function toggleSound(button, audio) {
    const isPaused = audio.paused;

    const allButtons = document.querySelectorAll('.sounds');
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
    Object.values(sounds).forEach(sound => {
        sound.pause();
    });
  
    if (isPaused) {
        audio.play();
        button.classList.add('selected');
    } else {
        audio.pause();
        button.classList.remove('selected');
    }
}

