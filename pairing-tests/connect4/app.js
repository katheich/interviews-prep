
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
  

// player moves
function playerMove(index) {
  console.log(index)

  if (index < 0 || index > 6) { 
    return
  }

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

function endGame() {
  playing = false
  console.log(`Player ${playerOneTurn ? '1' : '2'} has won!`)
}

function checkVictory() {
  const symbol = playerOneTurn ? 'x' : 'o'
  let regex = ''

  for (let i = 0; i < 4; i++) {
    regex += symbol
  }

  // check each row
  gridArray.forEach(row => {
    if (row.join('').includes(regex)) {
      endGame()
    }
  })

  // check each column
  for (let j = 0; j < 7; j++) {
    let column = ''

    for (let i = 0; i < 6; i++) {
      column += gridArray[i][j]
    }
    
    if (column.includes(regex)) {
      endGame()
    }
  }

  // check diagonal
  for (let i = 0; i < 7; i++) {
    let rightDiagonal = ''
    let leftDiagonal = ''

    for (let x = 0; x < 6; x++) {
      if (i + x < 7) {
        rightDiagonal += gridArray[x][i + x]
      } else {
        continue
      }
    }

    for (let x = 0; x < 6; x++) {
      if (i - x > -1) {
        leftDiagonal += gridArray[x][i - x]
      } else {
        continue
      }
    }

    if (rightDiagonal.includes(regex) || leftDiagonal.includes(regex)) {
      endGame()
    }
  }
}





// if full, end game?