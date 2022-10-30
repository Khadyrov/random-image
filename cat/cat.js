const btn = document.querySelector('.randomImage__btn')

console.log(axios);

const url = 'https://aws.random.cat/meow'
const img = document.querySelector('.randomImage__image')

function randomimage() {
    axios.get(url)
    .then(function (response) {
        img.src = response.data.file
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


