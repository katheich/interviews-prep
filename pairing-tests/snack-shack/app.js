
// time formatting

function formatTime(time, min, sec) {
  let seconds = parseInt(time.substring(time.indexOf(':') + 1))
  let minutes = parseInt(time.substring(0, time.indexOf(':')))

  seconds += sec

  if (seconds >= 60) {
    minutes += Math.floor(seconds / 60)
    seconds = seconds % 60
  }

  minutes += min

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

// sandwich function

function sandwichTiming(timestamp, num) {

  console.log(`${timestamp}: start making sandwich ${num}`)
  
  timestamp = formatTime(timestamp, 1, 0)
  console.log(`${timestamp}: serve sandwich ${num}`)

  timestamp = formatTime(timestamp, 0, 30)

  return timestamp
}

// sandwichTiming('03:30', 1)


// schedule function

function schedule(sandwichNum) {

  console.log(`${time}: ${sandwichNum} sandwiches ordered`)

  for (let i = 1; i <= sandwichNum; i++) {
    time = sandwichTiming(time, i)
  }

  console.log(`${time}: stake a break!`)

}

let time = '0:00'

schedule(4)
schedule(2)