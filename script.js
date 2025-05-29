let a = prompt(`Write your name`)
let text = document.createElement(`h1`)
let body = document.querySelector(`body`)

body.appendChild(text)

text.textContent = a
text.style.color = `blue`
text.style.textAlign = `center`
text.style.fontSize = `60px`
body.style.background = `yellow`
text.style.paddingTop = `220px`