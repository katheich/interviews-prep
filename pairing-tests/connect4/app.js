
// make the grid - array of arrays

const gridArray = []

for (let y = 0; y < 6; y++) {
  const row = []
  for (let x = 0; x < 7; x++) {
    row.push('.')
  }
  gridArray.push(row)
}

function visualGrid(grid) {
  
  grid.forEach(row => {
    const line = row.join(' ')
    console.log(line)
  })

}

visualGrid(gridArray)


// players take turns, input column to place piece

let playerOneTurn = true
let playing = true


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function recursiveReadline() {

  if (playing) {
    readline.question(`Player ${playerOneTurn ? '1' : '2'}: Enter column number `, (column) => {
      playerMove(parseInt(column) - 1)
      recursiveReadline()
    })
  } else {
    readline.close()
  }

  
 
}

recursiveReadline()
  


function playerMove(index) {
  console.log(index)

  for (let i = 1; i < gridArray.length; i++) {
    const cell = gridArray[gridArray.length - i][index]

    if (cell === '.') {
      gridArray[gridArray.length - i][index] = playerOneTurn ? 'x' : 'o'
      break
    } else {
      continue
    }
  }

  visualGrid(gridArray)
  checkVictory()

  playerOneTurn = !playerOneTurn
}


// after piece is placed, check whether anyone won

function checkVictory() {
  const symbol = playerOneTurn ? 'x' : 'o'
  let regex = ''

  for (let i = 0; i < 4; i++) {
    regex += symbol
  }

  // check each row
  gridArray.forEach(row => {
    if (row.join().includes(regex)) {
      playing = false
      console.log(`Player ${playerOneTurn ? '1' : '2'} has won!`)
    }
  })

  // check each column


  // check diagonal

}





// if full, end game?