
// upper limit on crew size is number of gems

// check for each crew size whether a factor of total treasure

// if a factor, check whether gems can be allocated 

function splitTreasure(treasure) {

  console.log(treasure)

  const possibleAllocations = []

  const sortedTreasure = treasure.sort(function(a, b) { return b - a } )

  const totalTreasure = treasure.reduce((total, gem) => {
    return total += gem
  }, 0)

  for (let i = 2; i < treasure.length + 1; i++) {

    if (totalTreasure % i === 0) {
      
      // check whether gems can be allocated
      const split = totalTreasure / i

      if (sortedTreasure[0] <= split) {
        const alloc = allocationCheck(sortedTreasure, i, split)
        alloc && possibleAllocations.push(alloc)
      } 

    } else {
      continue
    }

  }

  console.log('Possible Allocations: ', possibleAllocations)
}


function allocationCheck(treasure, number, split) {
  const tempTreasure = [...treasure]

  const allocation = []

  for (let x = 0; x < number; x++) {
    allocation.push([])
  }

  for (let x = 0; x < number; x++) {
    allocation[x].push(tempTreasure.shift())

    tempTreasure.forEach((gem) => {
      
      const tempTotal = allocation[x].reduce((total, gem) => {
        return total += gem
      }, 0)

      if (tempTotal + gem <= split) {
        allocation[x].push(gem)
      }

    })
    
    allocation[x].forEach(gem => {
      tempTreasure.indexOf(gem) > 0 ? tempTreasure.splice(tempTreasure.indexOf(gem), 1) : ''
    })

  }

  const totals = allocation
    .map(alloc => {
      return alloc.reduce((total, gem) => {
        return total += gem
      }, 0)
    })
    .reduce((correct, alloc) => {
      return correct && alloc === split
    }, true)

  // console.log(allocation, totals)

  if (totals) {
    return allocation
  }
}

splitTreasure([4,4,4])
splitTreasure([27,7,20])
splitTreasure([6,3,2,4,1])
splitTreasure([3,2,7,7,14,5,3,4,9,2])