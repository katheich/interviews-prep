// params
const size = 10

// make the grid - array of arrays

const gridArray = []

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

// getNeighbourCells(9, 2).forEach(coord => {
//   console.log(coord)
//   gridArray[coord[0]][coord[1]] = 'o'
// })

// visualGrid(gridArray)

//// state assessment function
// determine how many neighbouring cells alive

// assign states accordingly

// check if new state is the same as previous, if so end interval

function stateAssessment(x, y) {
  const alive = getNeighbourCells(x, y).reduce((alive, coord) => {
    return alive += gridArray[coord[0]][coord[1]] === 'x' ? 1 : 0
  }, 0)

  return alive
}

console.log(stateAssessment(5, 5))

///// run state-assessment function repeatedly at fixed interval