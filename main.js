let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")

let player = {
  name: "Sid",
  chips: 180
}

const playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
  return Math.floor( Math.random() * 13) + 1
  
  if (randomNumer > 10) {
    return 10
  } else if ( randomNumer === 1) {
    return 11
  } else {
    return randomNumer
  }
}
 

function startGame() {
  isAlive = true 
   firstCard = getRandomCard()
   secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
  renderGame()
}

function renderGame() {

  cardsEl.textContent = "Cards: " 
  
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
  message = "Do you want to draw a new card?" }
  else if (sum === 21) {
    message = "You've got a Blackjack"
    hasBlackJack = true
  } else {
    message = "You are out"
    isAlive = false
  }
  
  messageEl.textContent = message
  
 }

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
  } else {
    
  }
  
}

