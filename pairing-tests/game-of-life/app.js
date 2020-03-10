// params
const size = 20

// make the grid - array of arrays

const gridArray = []

for (let y = 0; y < size; y++) {
  const row = []
  for (let x = 0; x < size; x++) {
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


// random seed to start
