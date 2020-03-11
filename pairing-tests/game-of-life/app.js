// params and vars
const size = 10
let generation = 0

// make the grid - array of arrays

let gridArray = []

for (let y = 0; y < size; y++) {
  const row = []
  for (let x = 0; x < size; x++) {
    row.push('.')
  }
  gridArray.push(row)
}

// fixed seed to start testing
gridArray[2][3] = 'x'
gridArray[3][2] = 'x'
gridArray[3][1] = 'x'
gridArray[7][0] = 'x'
gridArray[7][7] = 'x'
gridArray[6][0] = 'x'
gridArray[5][5] = 'x'
gridArray[7][8] = 'x'
gridArray[1][9] = 'x'
gridArray[4][5] = 'x'
gridArray[5][6] = 'x'
gridArray[2][2] = 'o'

// visualise grid
function visualGrid(grid) {
  grid.forEach(row => {
    const line = row.join(' ')
    console.log(line)
  })
}

visualGrid(gridArray)


// determine all neighbouring cells
function getNeighbourCells(x, y) {
  let minX = x - 1 >= 0 ? x - 1 : size - 1
  let minY = y - 1 >= 0 ? y - 1 : size - 1
  let maxX = x + 1 < size ? x + 1 : 0
  let maxY = y + 1 < size ? y + 1 : 0

  return [[minX, minY], [x, minY], [maxX, minY], [minX, y], [maxX, y], [minX, maxY], [x, maxY], [maxX, maxY]]
}

// getNeighbourCells(2, 2).forEach(coord => {
//   console.log(coord)
//   gridArray[coord[1]][coord[0]] = 'o'
// })

// visualGrid(gridArray)

//// state assessment function
// determine how many neighbouring cells alive

// assign states accordingly

// check if new state is the same as previous, if so end interval

function stateAssessment(x, y) {
  const alive = getNeighbourCells(x, y).reduce((alive, coord) => {
    return alive += gridArray[coord[1]][coord[0]] === 'x' ? 1 : 0
  }, 0)

  // console.log('alive: ', alive)

  if (gridArray[y][x] === 'x') {

    if (alive < 2) {
      // console.log('starve')
      return '.'

    } else if (alive < 4) {
      // console.log('fine')
      return 'x'

    } else {
      // console.log('overpopulated')
      return '.'
    }

  } else {

    if (alive === 3) {
      // console.log('come alive')
      return 'x'

    } else {
      // console.log('still dead')
      return '.'
    }
  }
}


///// run state-assessment function repeatedly at fixed interval

const interval = setInterval(() => {
  generation++
  const newGrid = gridArray.map(row => [...row])
  // console.log(newGrid)
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      // console.log(x, y)
      // console.log(newGrid[y][x])
      // console.log(stateAssessment(x, y))
      newGrid[y][x] = stateAssessment(x, y)
    }
  }
  checkChanges(newGrid, gridArray)
  gridArray = newGrid
  console.log(`Generation ${generation}`)
  visualGrid(gridArray)
}, 3000)


function checkChanges(newGrid, prevGrid) {
  let same = true
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      newGrid[y][x] === prevGrid[y][x] ? same = same && true : same = false
    }
  }

  if (same) {
    clearInterval(interval)
  }
}