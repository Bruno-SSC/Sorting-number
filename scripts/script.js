const sortBTN = document.querySelector('#sortBTN')
const resultado = document.querySelector('#result h1')
var interval


sortBTN.addEventListener('click', () => {

    interval = setInterval(changeNum, 1000)
    setTimeout(stop, 6000)

})

function changeNum() {

    let newNum = Math.round(Math.random() * 100)
    resultado.innerHTML = newNum

    let animateText = {
        display: ['inline'],
        fontSize: [0, '7rem'],
        transform: ['rotate(360deg)']
    }

    let animate = {
        display: ['grid'],
        width: [0, '15vw'],
        height: [0, '30vh'],
    }

    let animateOption = {
        duration: 300,
        iterations: 1
    }

    resultado.animate(animateText, animateOption)
    resultado.parentElement.animate(animate, animateOption)
}

function stop() {
    clearInterval(interval)
}