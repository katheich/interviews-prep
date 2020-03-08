
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

  console.log(totalTreasure)

  for (let i = 2; i <= treasure.length; i++) {

    if (totalTreasure % i === 0) {
      
      console.log(i, 'possible solution')

      // check whether gems can be allocated
      const split = totalTreasure / i

      if (sortedTreasure[0] > split) {
        console.log('cant split')

      } else {
        // allocate gems

        allocationCheck(sortedTreasure, i, split)

      }

    } else {
      continue
    }

  }

  return possibleAllocations

}


function allocationCheck(treasure, number, split) {
  const tempTreasure = treasure

  console.log(tempTreasure, split)



}

splitTreasure([4,4,4])
splitTreasure([27,7,20])
splitTreasure([6,3,2,4,1])
splitTreasure([3,2,7,7,14,5,3,4,9,2])