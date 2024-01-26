function strikeThru(){
    document.querySelector("li").style.textDecoration = "line-through"
}
strikeThru()

function setSource(id, url){
    document.querySelector(`#${id}`).src = url
}
setSource('image-1',  'https://storage.googleapis.com/pod_public/1300/138709.jpg')
setSource('image-2', 'https://i.pinimg.com/originals/98/73/dd/9873dd28d172bcd21f114fdff507b4c3.jpg')
setSource('image-3', 'https://i.etsystatic.com/42954949/r/il/8687bf/4920273846/il_794xN.4920273846_hhai.jpg')

function removeFirstLi() {
    let uList = document.querySelector('ul')
    let uListItem = document.querySelector('ul>li')
      uList.removeChild(uListItem)
  }
  removeFirstLi()
  removeFirstLi()
  
  function adjustTextSize(id, size) {
    var element = document.getElementById(id)
    element.style.fontSize = `${size}`
  }
adjustTextSize('thing-2', '5em')

function appendToArguments(element) {
    const newArgument = document.querySelector('#arguments');
    newArgument.appendChild(element);
  }
 var newElement = document.createElement('img')
 appendToArguments(newElement)

 function changeHeight(image){
  document.querySelector(`${image}`).style.height = '30px'
 }
 changeHeight('#image-1')

 function makeInvis(id){
  document.querySelector(`${id}`).classList.add('invisible')
 }
makeInvis('#thing-c')

function makeNewElement(text){
  let newItem = document.createElement('li')
  newItem.innerText = `${text}`
  return newItem
}
let newText = makeNewElement('One last thing')
appendToArguments(newText)

function changeHeader(size, text){
  let newHeading = document.createElement(`h${size}`)
  newHeading.innerText = `${text}`
  return newHeading
}
let newHeader = changeHeader('20', 'Another Header')
appendToArguments(newHeader)