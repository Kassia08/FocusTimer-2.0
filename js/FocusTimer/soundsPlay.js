import { musicForest, musicRain, musicCafe, musicFirePlace } from "./sounds.js"
import state from "./state.js"

export function playMusic() {
  // Selecionando a música a ser tocada com base no estado `isMusic`
  switch (state.isMusic) {
    case "buttonForest":
      musicForest.play()
      break
    case "buttonRain":
      musicRain.play()
      break
    case "buttonCoffeeShop":
      musicCafe.play()
      break
    case "buttonFireplace":
      musicFirePlace.play()
      break
    default:
      // Caso a música não seja válida, não faz nada
      break
  }
}

export function stopCurrentMusic() {
  // Pausa a música que está sendo tocada com base no estado `isMusic`

  switch (state.isMusic) {
    case "buttonForest":
      musicForest.pause()
      break
    case "buttonRain":
      musicRain.pause()
      break
    case "buttonCoffeeShop":
      musicCafe.pause()
      break
    case "buttonFireplace":
      musicFirePlace.pause()
      break
    default:
      // Caso a música não seja válida, não faz nada
      break
  }
}