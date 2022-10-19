const btn = document.querySelector('.randomImage__btn')

const url = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('.randomImage__image')

async function randomimage() {
    try {
        const response = await fetch(url)
        const data = await response.json(url)
        img.src = data.message
    }
    catch {
        console.log('error');
    }
}

btn.addEventListener('click', e => {
    randomimage()
})