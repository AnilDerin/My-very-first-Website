const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','yellow','blue','#fff','green','pink','purple']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeBgColor)

function changeBgColor() {

  const colorIndex = parseInt(Math.random()*color.length)
  body.style.backgroundColor = color[colorIndex]


}
