let robot = [0, 0]
let playing = true

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

// visualGrid(gridArray)


// get neighbour cell based on direction
function getNeighbourCell(x, y, direction) {

  switch (direction) {
    case 'n': console.log('NORTH'); y = y - 1 < 0 ? 0 : y - 1; break
    case 'w': console.log('WEST'); x = x - 1 < 0 ? 0 : x - 1; break
    case 'e': console.log('EAST'); x = x + 1 > 9 ? 9 : x + 1; break
    case 's': console.log('SOUTH'); y = y + 1 > 9 ? 9 : y + 1; break
    default: return
  }

  return [x, y]

}

// console.log(getNeighbourCell(9, 3, 'e'))

// interface for issuing commands

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function recursiveReadline() {
  if (playing) {
    readline.question('Enter a direction (n, w, e, s) ', (direction) => {
      direction = direction.toLowerCase()

      if (['n', 'w', 'e', 's'].includes(direction)) {
        gridArray[robot[1]][robot[0]] = '.'
        robot = getNeighbourCell(...robot, direction)
        gridArray[robot[1]][robot[0]] = 'x'
        visualGrid(gridArray)
      } else {
        playing = false

      }
      recursiveReadline()
    })
  } else {
    readline.close()
  } 
}

gridArray[robot[1]][robot[0]] = 'x'
visualGrid(gridArray)

recursiveReadline()