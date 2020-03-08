// params
const timing = 500
const display = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']
const spaces = 5



// prompt user for message
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Please type a message: ', (input) => {
  
  let formattedInput = input
  for (let i = 0; i < spaces; i++) {
    formattedInput += '_'
  }
  
  scrollMessage(formattedInput)
  readline.close()
})


//function that prints message in loop

function scrollMessage(input) {

  console.log(display.join(''))
  
  input.split('').forEach((letter, i) => {

    setTimeout(() => {
      display.shift()
      display.push(letter)
      console.log(display.join(''))
      
    }, timing * i)
    
  })

  setTimeout(() => {
    scrollMessage(input)
  }, input.length * timing)

}