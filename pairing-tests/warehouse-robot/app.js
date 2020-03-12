// Grid
const gridArray = []

for (let y = 0; y < 10; y++) {
  const row = []
  for (let x = 0; x < 10; x++) {
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