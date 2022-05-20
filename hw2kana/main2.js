// let interval = document.querySelector(".interval");




// const button = document.querySelector(".button")
function button(from = 1) {
    let button = from;

    let timerId = setInterval(function () {
        console.log(button)
        button++;
    }, 1000)
}

button();