"use strict"

let hours = document.getElementById('hour')
let minutes = document.getElementById('minute')
let seconds = document.getElementById('second')


setInterval(timer, 1000)
timer()

function timer() {
    let now = new Date()
    let midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0
    )

    let diff = Math.floor((midnight - now) / 1000)
    let hour = Math.floor(diff / (60 * 60))
    let minute = Math.floor((diff - hour * 60 * 60) / 60)
    let second = Math.floor(diff % 60)

    hours.innerHTML = hour
    minutes.innerHTML = addZero(minute)
    seconds.innerHTML = addZero(second)

}

function addZero(num) {
    if (num >= 0 && num <= 9) {
        num = '0' + num
    }

    return num
}
