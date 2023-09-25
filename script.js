function playAudio(sound_id) {
    document.getElementById(sound_id).play();
}

const buttons = {
    KeyQ: 'letter_q',
    KeyW: 'letter_w',
    KeyE: 'letter_e',
    KeyA: 'letter_a',
    KeyS: 'letter_s',
    KeyD: 'letter_d'
}

function addBackground(el){
    //add new class
    el.classList.add('press')
    //remove active class
    setTimeout(() => {
        el.classList.remove('press')
    }, 300)
}

// keydown event
document.addEventListener('keydown', (event) => {
    if (event.code) {
        playAudio(event.code);
        const el = document.querySelector(`.${buttons[event.code]}`);
        //add and remove background for active element
        addBackground(el)
    }
})

const panel = document.querySelector('.panel')
panel.addEventListener('click', (event) => {
    const key = event.target.dataset['key'];
    playAudio(`Key${key.toUpperCase()}`)
    //add and remove background for active element
    addBackground(event.target)
})