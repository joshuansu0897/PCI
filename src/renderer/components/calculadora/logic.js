'use strict'
const submitFormButton = document.getElementById('form')
const responseText = document.getElementById('response')
submitFormButton.addEventListener('submit', (event) => {
  event.preventDefault()
  let firstname = document.getElementById('firstname').value

  responseText.innerHTML = firstname
})