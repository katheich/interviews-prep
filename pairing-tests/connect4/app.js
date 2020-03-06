
// make the grid - array of arrays

const grid = []

for (let y = 0; y < 6; y++) {
  const row = []
  for (let x = 0; x < 7; x++) {
    row.push('.')
  }
  grid.push(row)
}

console.log(grid)


// players take turns, input column to place piece


// after piece is placed, check whether anyone won


// if full, end game?