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

// click on Q
const elementQ = document.querySelector('.letter_q')
elementQ.addEventListener('click', ()=>{
    playAudio('KeyQ')
    //add and remove background for active element
    addBackground(elementQ)
})

// click on W
const elementW = document.querySelector('.letter_w')
elementW.addEventListener('click', ()=>{
    playAudio('KeyW')
    //add and remove background for active element
    addBackground(elementW)
})

//click on E
const elementE = document.querySelector('.letter_e')
elementE.addEventListener('click', ()=>{
    playAudio('KeyE')
    //add and remove background for active element
    addBackground(elementE)
})

//click on A
const elementA = document.querySelector('.letter_a')
elementA.addEventListener('click', ()=>{
    playAudio('KeyA')
    //add and remove background for active element
    addBackground(elementA)
})

//click on S
const elementS = document.querySelector('.letter_s')
elementS.addEventListener('click', ()=>{
    playAudio('KeyS')
    //add and remove background for active element
    addBackground(elementS)
})

//click on D
const elementD = document.querySelector('.letter_d')
elementD.addEventListener('click', ()=>{
    playAudio('KeyD')
    //add and remove background for active element
    addBackground(elementD)
})