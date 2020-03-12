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


// get neighbour cell based on direction
function getNeighbourCell(x, y, direction) {

  direction = direction.toLowerCase()

  switch (direction) {
    case 'n': console.log('NORTH'); y = y - 1 < 0 ? 0 : y - 1; break
    case 'w': console.log('WEST'); x = x - 1 < 0 ? 0 : x - 1; break
    case 'e': console.log('EAST'); x = x + 1 > 9 ? 9 : x + 1; break
    case 's': console.log('SOUTH'); y = y + 1 > 9 ? 9 : y + 1; break
    default: return
  }

  return [x, y]

}

console.log(getNeighbourCell(0, 3, 'W'))