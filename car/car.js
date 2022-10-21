const btn = document.querySelector('.randomImage__btn')

const url = 'https://aws.random.cat/meow'
const img = document.querySelector('.randomImage__image')

async function randomimage() {
    try {
        const response = await fetch(url)
        const data = await response.json(url)
        img.src = data.file
    }
    catch {
        console.log('error');
    }
}

btn.addEventListener('click', e => {
    randomimage()
})