"use strict"

let modalRecall = document.getElementById('modal-recall')
let hideFormButt = document.getElementById('hideForm')

hideFormButt.addEventListener('click', hideForm)

function showForm() {
    modalRecall.style.display = 'block'
}

function hideForm() {
    modalRecall.style.display = 'none'

}