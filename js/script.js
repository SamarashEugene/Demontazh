"use strict"


let stepOne = document.getElementById('stepOne')
let stepTwo = document.getElementById('stepTwo')
let stepThree = document.getElementById('stepThree')
let stepFour = document.getElementById('stepFour')
let stepFive = document.getElementById('stepFive')
let stepSix = document.getElementById('stepSix')

// let btnHide = document.querySelectorAll('.hide-btn')
let btnHide = document.getElementById('hide-btn')
let btnHide1 = document.getElementById('hide-btn1')

let type = ''
let square = Number
let countOfRoom
let soonToWork

let list = [stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix]
let i = 0

function next() {
    list[i].style.display = 'none'
    i++
    list[i].style.display = 'block'

    if (i === list.length - 1){
        document.getElementById('nextStep').disabled = true
        console.log('finish')
        btnHide.style.display = 'none'
        btnHide1.style.display = 'none'
    }
}

function prev(){
    list[i].style.display = 'block'
    i--
    list[i].style.display = 'none'
}
