"use strict"


let stepOne = document.getElementById('stepOne')
let stepTwo = document.getElementById('stepTwo')
let stepThree = document.getElementById('stepThree')
let stepFour = document.getElementById('stepFour')
let stepFive = document.getElementById('stepFive')

let btnHide = document.getElementById('hide-btn')
let btnHide1 = document.getElementById('hide-btn1')

let countStep = document.getElementById('countStep')

let testBlock1 = document.getElementById('test-block-1')
let testBlock2 = document.getElementById('test-block-2')
let testBlock3 = document.getElementById('test-block-3')
let testBlock4 = document.getElementById('test-block-4')

let testCircle2 = document.getElementById('test-circle-2')
let testCircle3 = document.getElementById('test-circle-3')
let testCircle4 = document.getElementById('test-circle-4')
let testCircle5 = document.getElementById('test-circle-5')

let arrTestBlock = [testBlock1, testBlock2, testBlock3, testBlock4]
let arrTestCircle = [testCircle2, testCircle3, testCircle4, testCircle5]

let prevStep = document.getElementById('prevStep')

let list = [stepOne, stepTwo, stepThree, stepFour, stepFive]
let i = 0
let j = 1

prevStep.disabled = true

function prev() {
    list[i].style.display = 'none'
    i--
    list[i].style.display = 'block'

    if (i === 0) {
        prevStep.disabled = true
    }
}

function next() {
    list[i].style.display = 'none'
    i++
    list[i].style.display = 'block'
    countStep.innerHTML = ++j
    addMark()


    if (i === list.length - 1) {
        btnHide.style.display = 'none'
        btnHide1.style.display = 'none'
    }

    if (i > 0) {
        prevStep.disabled = false
    }

    console.log(i);
}

function addMark() {
    arrTestBlock[i - 1].classList.add('test-block-active')
    arrTestCircle[i - 1].classList.add('test-circle-active')
}











