let robot = [9, 9]
let playing = true
let carryingCrate = false

let crates = [[4, 4], [0, 0]]
let carriedCrate = null


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
    case 'nw': console.log('NORTH-WEST'); y = y - 1 < 0 ? 0 : y - 1; x = x - 1 < 0 ? 0 : x - 1; break
    case 'ne': console.log('NORTH-EAST'); y = y - 1 < 0 ? 0 : y - 1; x = x + 1 > 9 ? 9 : x + 1; break
    case 'sw': console.log('SOUTH-WEST'); y = y + 1 > 9 ? 9 : y + 1; x = x - 1 < 0 ? 0 : x - 1; break
    case 'se': console.log('SOUTH-EAST'); y = y + 1 > 9 ? 9 : y + 1; x = x + 1 > 9 ? 9 : x + 1; break
    default: return
  }

  return [x, y]

}

// console.log(getNeighbourCell(9, 3, 'e'))

// CRATES

function assignCrates(newCrates) {
  crates.forEach(crate => {
    gridArray[crate[1]][crate[0]] = '.'
  })
  
  newCrates.forEach((crate, index) => {
    if (crate[0] !== robot[0] || crate[1] !== robot[1]) {
      gridArray[crate[1]][crate[0]] = 'o'

    } else {

      if (carryingCrate && carriedCrate !== index) {
        gridArray[crate[1]][crate[0]] = 'xoo'
      } else {
        gridArray[crate[1]][crate[0]] = 'xo'
      }
      
    }
  })

  crates = newCrates
}

assignCrates(crates)


function handleCrates(x, y, action) {
  const combi = gridArray[y][x] + ', ' + action
  console.log(combi)

  switch (combi) {
    case 'xo, g': {
      carryingCrate ? console.log('already carrying a crate') : (
        console.log('take the crate'), 
        carryingCrate = true,
        carriedCrate = crates.findIndex(crate => crate[0] === x && crate[1] === y))
      break

    } case 'xo, d': {
      carryingCrate ? (
        console.log('drop the crate'),
        carryingCrate = false,
        carriedCrate = null) 
        : console.log('not carrying any crate') 
      break
    } 
    case 'x, g': console.log('no crate to take'); break
    case 'x, d': console.log('not carrying any crate'); break
    case 'xoo, g': console.log('already carring a crate'); break
    case 'xoo, d': console.log('already a crate in this place'); break
    default: console.log('oops'); break
  }

}


// INTERFACE

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function recursiveReadline() {
  if (playing) {
    readline.question('Enter a direction (n, w, e, s, nw, ne, sw, se) or action (g, d): ', (action) => {
      action = action.toLowerCase()

      if (['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].includes(action)) {
        gridArray[robot[1]][robot[0]] = '.'
        robot = getNeighbourCell(...robot, action)
        gridArray[robot[1]][robot[0]] = carryingCrate ? 'xo' : 'x'
        console.log(carryingCrate, carriedCrate)

        if (carryingCrate) {
          crates[carriedCrate] = robot
        }

        assignCrates(crates)
        
        visualGrid(gridArray)
        
      } else if (['g', 'd'].includes(action)) {
        handleCrates(...robot, action)

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






