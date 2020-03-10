
const points = {
  'a': 1,
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 5,
  'l': 1,
  'm': 3,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 10,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 4,
  'x': 8,
  'y': 4,
  'z': 10
}

const frequencies = {
  '12': [ 'e' ], 
  '9': [ 'a', 'i' ], 
  '8': [ 'o' ], 
  '6': [ 'n', 'r', 't' ],
  '4': [ 'l', 's', 'u', 'd' ], 
  '3': [ 'g' ], 
  '2': [ 'b', 'c', 'm', 'p', 'f', 'h', 'v', 'w', 'y' ],
  '1': [ 'k', 'j', 'x', 'q', 'z' ]
}

// calculate score of word

function score(word) {
  return word
    .toLowerCase()
    .split('')
    .reduce((score, letter) => {
      return score += points[letter]
    }, 0)
}

// assign seven letters randomly using correct distribution

const tiles = []

Object.keys(frequencies).forEach(freq => {
  // console.log(parseInt(freq))
  frequencies[freq].forEach(letter => {
    for (let i = 0; i < parseInt(freq); i++) {
      tiles.push(letter)
    }
  })
})

const rack = []

function randomTile() {
  const index = Math.floor(Math.random() * tiles.length)
  rack.push(tiles[index])
  tiles.slice(index, 1)
}

for (let x = 0; x < 7; x++) {
  randomTile()
}

console.log(rack)

// find valid words

const fs = require('fs')
const textByLine = fs.readFileSync('twl06.txt').toString().split('\n')

// console.log(textByLine)

function combinations(array) {

  const combis = []

  if (array.length === 1) return array

  for (let i = 0; i < array.length; i++) {
    combinations(array.join('').replace(array[i], '').split('')).concat('').map(function(subtree) {
      combis.push([array[i]].concat(subtree))
    })
  }
  return combis.map(str => str.join(''))
}

const validWords = combinations(rack).filter(word => textByLine.includes(word))
console.log(validWords)

// find longest valid word
// function longestWord(list) {
//   const maxLength = Math.max(...list.map(word => word.length))

//   console.log(list.filter(word => word.length === maxLength))

// }

// longestWord(validWords)


// find highest scoring word


// find highest scoring word if any letter could score triple