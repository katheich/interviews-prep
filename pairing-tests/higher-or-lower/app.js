let playing = true

// make deck of cards
const deck = []
for (let i = 1; i <= 10; i++) {
  deck.push(i)
}

// shuffle cards
const shuffledDeck = []
for (let i = 0; i < 10; i++) {
  const index = Math.floor(Math.random() * deck.length)
  shuffledDeck.push(deck[index])
  deck.splice(index, 1)
}

console.log(shuffledDeck)

// reveal first card
let prevCard = 0
let card = shuffledDeck.shift()
console.log(card)

// prompt player whether next one higher or lower
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function recursiveReadline() {
  if (playing) {
    readline.question('Higher or lower (h/l)? ', (input) => {
      playGame(input)
      recursiveReadline()
    })
  } else {
    readline.close()
  }
} 
recursiveReadline()

// if correct, keep playing
function playGame(input) {
  prevCard = card
  card = shuffledDeck.shift()
  
  console.log(card)



  if (prevCard > card && input === 'l') {
    // success
    console.log('Correct!')

    // win whole game
    if (shuffledDeck.length === 0) {
      playing = false
      console.log('You won!')
    }

  } else if (prevCard < card && input === 'h') {
    // success
    console.log('Correct!')

    // win whole game
    if (shuffledDeck.length === 0) {
      playing = false
      console.log('You won!')
    }

  } else {
    // game ends
    console.log('Wrong! You lost.')
    playing = false
  }


}
