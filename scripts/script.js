const sortBTN = document.querySelector('#sortBTN')
const resultado = document.querySelector('#result h1')
var interval

sortBTN.addEventListener('click', () => {

    interval = setInterval(changeNum, 1000)
    setTimeout(stop, 4000)

})

function changeNum() {

    let newNum = Math.round(Math.random() * 100)
    resultado.innerHTML = newNum

}

function stop() {
    clearInterval(interval)
    resultado.classList.add('done')
    setTimeout(() => {
        resultado.classList.remove('done')
    }, 3000);
}