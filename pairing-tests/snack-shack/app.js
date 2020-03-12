
// time formatting

function formatTime(time, min, sec) {
  let seconds = parseInt(time.substring(time.indexOf(':') + 1))
  let minutes = parseInt(time.substring(0, time.indexOf(':')))

  seconds += sec

  if (seconds >= 60) {
    minutes += 1
    seconds = seconds % 60
  }

  minutes += min

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

// sandwich function

function sandwichTiming(time, num) {

  let timestamp = time

  console.log(`${timestamp}: start making sandwich ${num}`)
  
  timestamp = formatTime(timestamp, 1, 0)
  console.log(`${timestamp}: serve sandwich ${num}`)

  timestamp = formatTime(timestamp, 0, 30)

  return timestamp
}

// sandwichTiming('03:30', 1)


// schedule function

function schedule(sandwichNum) {

  let time = '0:00'

  for (let i = 1; i <= sandwichNum; i++) {
    time = sandwichTiming(time, i)
  }

  console.log(`${time}: stake a break!`)

}

schedule(4)