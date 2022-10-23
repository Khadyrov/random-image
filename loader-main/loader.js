let mack = document.querySelector('.loader')
let mackoff = false

let randomBtn = document.querySelector('.randomImage__btn')

randomBtn.addEventListener('click', function() {
    mack.classList.remove('none')
})

function contentOn() {
    setTimeout(() => {
        mack.classList.add('none')
    }, 1500)
}


if(mackoff == false){
    mack.classList.add('none')
}
    mack.addEventListener('load', function(){
        
        mack.classList.add('none')
    })


