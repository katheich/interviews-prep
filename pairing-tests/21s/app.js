

// create deck of cards
const deck = []

const suits = [ 
  { suit: 'hearts' }, 
  { suit: 'diamonds' },
  { suit: 'spades' },
  { suit: 'clubs' }
]

const cards = [ 
  { value: 'Q' , points: 10 }, 
  { value: 'J', points: 10 }, 
  { value: 'K', points: 10 },
  { value: 'A', points: 11 }
]

for (let i = 1; i < 11; i++) {
  cards.push( { value: i.toString(), points: i })
}

suits.forEach(suit => {
  cards.forEach(card => {
    deck.push( { ...suit, ...card } )
  })
})

// shuffle deck

const shuffledDeck = []
const length = deck.length

for (let i = 0; i < length; i++) {
  const index = Math.floor(Math.random() * deck.length)
  shuffledDeck.push(deck[index])
  deck.splice(index, 1)
}

// console.log(shuffledDeck)

// deal 2 cards for both sam and dealer
const sam = []
const dealer = []

sam.push(...shuffledDeck.splice(0, 2))
dealer.push(...shuffledDeck.splice(0, 2))

// console.log(shuffledDeck)
console.log('SAM', sam)
console.log('DEALER', dealer)

// determine score of both players
function score(hand) {
  return hand.reduce((score, card) => {
    return score += card.points
  }, 0)
}

// if 21, win
if (score(sam) === 21) {
  console.log('Sam has won.')

} else if (score(dealer) === 21) {
  console.log('Dealer has won.')

} else {

  console.log('Keep playing')

  // Sam stops if total is > 17
  // Dealer stops when total is higher than Sam, loses if > 21

  while (score(sam) < 17) {
    sam.push(shuffledDeck.shift())
    console.log('SAM', sam, score(sam))
  }

  if (score(sam) > 21) {
    console.log('Dealer has won.')


  } else {

    dealer.push(shuffledDeck.shift())
    console.log('DEALER', dealer, score(dealer))


    while (score(dealer) < score(sam)) {
      dealer.push(shuffledDeck.shift())
      console.log('DEALER', dealer, score(dealer))
    }

    if (score(dealer) > 21) {
      console.log('Sam has won.')
    } else {
      console.log('Dealer has won.')
    }

  }

}

