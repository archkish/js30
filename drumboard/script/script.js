
function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`)
    let key = document.querySelector(`div[data-key="${e.key}"]`)
    
    if(!audio) return

    audio.currentTime = 0
    audio.play()

    key.classList.add('playing')

    // setTimeout(() => {
    //     key.classList.remove('playing')
    // }, "100")
    
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')
keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)