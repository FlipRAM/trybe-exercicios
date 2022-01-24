let backColor = document.querySelector('#input-backcolor')
let fontColor = document.querySelector('#input-color')
let fontSize = document.querySelector('#input-size')
let spaceLine = document.querySelector('#input-space')
let font = document.querySelector('#input-font')

backColor.addEventListener('change',changeCookieBackColor);
fontColor.addEventListener('change',changeCookieColor);
fontSize.addEventListener('change',changeCookieSize);
spaceLine.addEventListener('change',changeCookieSpace);
font.addEventListener('change',changeCookieFont);

function changeCookieBackColor (event) {
  localStorage.setItem('backcolor', backColor.value)
}

function changeCookieColor (event) {
  localStorage.setItem('color', fontColor.value)
}

function changeCookieSize (event) {
  localStorage.setItem('fontSize', fontSize.value)
}

function changeCookieSpace (event) {
  localStorage.setItem('spaceLine', spaceLine.value)
}

function changeCookieFont (event) {
  localStorage.setItem('font', font.value)
}

function readCookieBackColor () {
  let cookieBackColorValue = localStorage.getItem('backcolor')
  document.body.style.backgroundColor = cookieBackColorValue
}

function readCookieColor () {
  let cookieColorValue = localStorage.getItem('color')
  document.body.style.color = cookieColorValue
}

function readCookieSize () {
  let cookieSizeValue = localStorage.getItem('fontSize')
  document.body.style.fontSize = cookieSizeValue + 'px'
}

function readCookieSpace () {
  let cookieSpaceValue = localStorage.getItem('spaceLine')
  document.body.style.lineHeight = cookieSpaceValue + 'px'
}

function readCookieFont () {
  let cookieFontValue = localStorage.getItem('font')
  document.body.style.fontFamily = cookieFontValue
}

readCookieBackColor()

readCookieColor()

readCookieSize()

readCookieSpace()

readCookieFont()
