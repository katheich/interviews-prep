const options = ['black', 'white', 'green', 'yellow']
let slots = []
let jackpot = 50
let playerBudget = 10
const price = 1
let playing = true


// function that determines what is in a single slots
function selectSlot() {
  const index = Math.floor(Math.random() * 4)
  return options[index]
}

// loop that runs slot selection function four times
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function recursiveReadline() {
  if (playing) {
    readline.question(`Budget: ${playerBudget}, Jackport: ${jackpot} - keep playing? (y/n) `, (input) => {
      if (input === 'y') {
        playerBudget -= price
        playGame()
        recursiveReadline()
      } else {
        playing = false
        readline.close()
      }
    })
  } 
} 
recursiveReadline()

function playGame() {
  slots = []
  for (let i = 0; i < 4; i++) {
    slots.push(selectSlot())
  }

  // show results of slots
  console.log(slots)

  determinePrize()

  if (playerBudget < price) {
    playing = false
  }
}

// function checking whether 4 of them same, if so pay out
function determinePrize() {

  // all 4 the same, jackpot
  const jp = slots.reduce((victory, slot, i) => {
    if (i === 0) {
      return true
    } 
    return victory && slot === slots[ i - 1 ]
  }, true)

  if (jp) {
    console.log(`JACKPOT! You won ${jackpot}!`)
    jackpotBudget(jackpot)
  }

  // all differnt, half 
  let allDifferent = true
  slots.forEach((slot, i) => {
    for (let x = i + 1; x < 4; x++) {
      allDifferent = allDifferent && slots[i] !== slots[x]
    }
  })

  if (allDifferent) {
    console.log(`ALL DIFFERENT! You won ${jackpot / 2}!`)
    jackpotBudget(jackpot / 2)
  }

  // 2+ next to each, 5*price
  const streak = slots.reduce((victory, slot, i) => {
    if (i === 0) {
      return false
    } 
    return victory || slot === slots[ i - 1 ]
  }, false)

  if (streak) {
    console.log(`STREAK! You won ${price * 5}!`)
    jackpotBudget(price * 5)
  }

  // if not enough money, play credit


}

function jackpotBudget(prize) {
  if (jackpot < prize) {
    playerBudget += prize
    jackpot = 0
  } else {
    playerBudget += prize
    jackpot -= prize
  }
}

