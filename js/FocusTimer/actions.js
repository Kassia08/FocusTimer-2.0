import state from "./state.js"
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    console.log('toggleRunning')
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPress.play()
}


export function reset() {
    console.log('reset')
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
    sounds.buttonPress.play()
}

export function add() {
    console.log('add 5 minutes')

    timer.plus()
    sounds.buttonPress.play()
}

export function subtract() {
    console.log('subtract 5 minutes')

    timer.minus()
    sounds.buttonPress.play()
}






export function musicForest() {
    const card = "forest"
  
    selectControls(data-sound-id)
  }
  
  export function musicRain() {
    const card = "rain"
  
    selectControls(data-sound-id)
  }
  
  export function musicCoffeShop() {
    const card = "coffeeShop"
  
    selectControls(data-sound-id)
  }
  
  export function musicFirePlace() {
    const card = "fireplace"
  
    selectControls(data-sound-id)
  }


  






