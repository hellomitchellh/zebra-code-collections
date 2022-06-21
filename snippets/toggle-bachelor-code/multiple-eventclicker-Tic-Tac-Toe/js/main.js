
//global variable keeping track of turn
let marker = 'O'


//adds an event listner to all tiles
Array.from(document.querySelectorAll(".tiles")).forEach((element) => {
  element.addEventListener("click", (event) => {
    //x & o placer
    (event.target.innerHTML === '') ? event.target.innerHTML = xAndo() : ''
  })
})


//checks to see if win
document.querySelector('.main-container').addEventListener('click', checkWin)


//rest button
document.querySelector('#resetButton').addEventListener('click', resetFunction)

function resetFunction(){
  Array.from(document.querySelectorAll(".tiles")).forEach((element) => {
    element.innerHTML = ''
  })
}



//decides if it's X or O that need to be placed
function xAndo() {
  if(marker === 'O') {
    marker = 'X'
    return 'X'
  } else {
    marker = 'O'
    return 'O'
  }
}

//check win function
function checkWin(){
  //assigns win value
  let tripXO = marker.repeat(3)

  //grabs all board elements to check
  let one = document.querySelector('#one').innerHTML
  let two = document.querySelector('#two').innerHTML
  let three = document.querySelector('#three').innerHTML
  let four = document.querySelector('#four').innerHTML
  let five = document.querySelector('#five').innerHTML
  let six = document.querySelector('#six').innerHTML
  let seven = document.querySelector('#seven').innerHTML
  let eight = document.querySelector('#eight').innerHTML
  let nine = document.querySelector('#nine').innerHTML

  
  //win combinations
  let win1 = one+two+three
  let win2 = four+five+six
  let win3 = seven+eight+nine

  let win4 = one+four+seven
  let win5 = two+five+eight
  let win6 = three+six+nine

  let win7 = one+five+nine
  let win8 = three+five+seven

  //execution
  if(
    (win1 == tripXO) ||
    (win2 == tripXO) ||
    (win3 == tripXO) ||
    (win4 == tripXO) ||
    (win5 == tripXO) ||
    (win6 == tripXO) ||
    (win7 == tripXO) ||
    (win8 == tripXO) 
    ) {
    alert(`${marker}'s Win!`)
  }
}
