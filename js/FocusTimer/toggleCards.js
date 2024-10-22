import * as el from "./elements.js"
import * as music from "./soundsPlay.js"
import state from "./state.js"

export function toggleCards() {
  el.cards.classList.toggle("data-sound-id")

  state.isMusic = state.isButtonCard
  music.playMusic()
}

export function resetCards() {
  music.stopCurrentMusic()

  el.cards.classList.remove("data-sound-id")
}