const btn = document.querySelector('.randomImage__btn')

const url = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('.randomImage__image')

function randomimage() {
    axios.get(url)
    .then(function (response) {
        img.src = response.data.message
        contentOn()
    })
    .catch(function (error) {
        console.log(error);
        contentOn()
    })
}

btn.addEventListener('click', e => {
    randomimage()
})