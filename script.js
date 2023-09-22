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

document.addEventListener('keydown', (event) => {
    if (event.code) {
        playAudio(event.code);
        const el = document.querySelector(`.${buttons[event.code]}`);

        //add new class
        el.classList.add('press')

        //remove active class
        setTimeout(() => {
            el.classList.remove('press')
        }, 300)
    }
})


// click on Q
const elementQ = document.querySelector('.letter_q')
elementQ.addEventListener('click', ()=>{
    playAudio('KeyQ')
})

// click on W
const elementW = document.querySelector('.letter_w')
elementW.addEventListener('click', ()=>{
    playAudio('KeyW')
})

//click on E
const elementE = document.querySelector('.letter_e')
elementE.addEventListener('click', ()=>{
    playAudio('KeyE')
})


//click on A
const elementA = document.querySelector('.letter_a')
elementA.addEventListener('click', ()=>{
    playAudio('KeyA')
})


//click on A
const elementS = document.querySelector('.letter_s')
elementS.addEventListener('click', ()=>{
    playAudio('KeyS')
})

//click on A
const elementD = document.querySelector('.letter_d')
elementD.addEventListener('click', ()=>{
    playAudio('KeyD')
})