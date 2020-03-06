
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


// after piece is placed, check whether anyone won


// if full, end game?