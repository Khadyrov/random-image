let mack = document.querySelector('.loader')
let mackoff = false

let randomBtn = document.querySelector('.randomImage__btn')

btn.addEventListener('click', function() {
    mack.classList.remove('none')
})

function contentOn() {
    setTimeout(() => {
        mack.classList.add('none')
    }, 1000)
}

window.addEventListener('load', function(){
    mack.classList.add('none')
})



mack.addEventListener('load', function(){
    
    mack.classList.add('none')
})


