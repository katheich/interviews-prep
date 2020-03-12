
let startTime = '0:00'
let sandwichesOrdered = 0
let sandwichesScheduled = 0
let schedule = []
let endTime = '0:00'

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

// duration function

function getDuration(startTime, endTime) {

  const startSec = parseInt(startTime.substring(startTime.indexOf(':') + 1))
  const startMin = parseInt(startTime.substring(0, startTime.indexOf(':')))
  const endSec = parseInt(endTime.substring(endTime.indexOf(':') + 1))
  const endMin = parseInt(endTime.substring(0, endTime.indexOf(':')))
  // console.log(startSec, endSec, endSec - startSec - 30)

  const minutes = endSec - startSec - 30 < 0 ? endMin - startMin - 1 : endMin - startMin 
  const seconds = endSec - startSec - 30 < 0 ? 60 - endSec - startSec - 30 : endSec - startSec - 30

  // console.log(startSec, endSec, endSec - startSec - 30, seconds)

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`

}

// sandwich function

function sandwichTiming(timestamp, num) {

  schedule.push({ text: `${timestamp}: start making sandwich ${num}`, time: timestamp })

  // console.log(`${timestamp}: start making sandwich ${num}`)
  
  timestamp = formatTime(timestamp, 1, 0)
  // console.log(`${timestamp}: serve sandwich ${num}`)
  schedule.push({ text: `${timestamp}: serve sandwich ${num}`, time: timestamp })

  sandwichesScheduled++

  timestamp = formatTime(timestamp, 0, 30)

  return timestamp
}

// sandwichTiming('03:30', 1)


// check if order is feasible
function checkFeasible(sandwichNum, startTime, currentEndTime) {
  let newSandwichNum = 0
  for (let i = 0; i < sandwichNum; i++) {
    currentEndTime = formatTime(currentEndTime, 1, 30)
    const waittime = getDuration(startTime, currentEndTime)

    if (parseInt(waittime.substring(0, waittime.indexOf(':'))) >= 5) {
      // console.log(waittime, 'TOO LONG')
      break
    } else {
      newSandwichNum++
    }
  }
  // console.log(newSandwichNum)
  return newSandwichNum
}


// schedule function

function makeSchedule(time, sandwichNum) {

  console.log('----------')
  
  const newSandwichNum = checkFeasible(sandwichNum, time, endTime)

  sandwichesOrdered += newSandwichNum
  // console.log(sandwichesOrdered, sandwichesScheduled)
  // schedule = []


  for (let i = 1 + sandwichesScheduled; i <= sandwichesOrdered; i++) {
    endTime = sandwichTiming(endTime, i)
  }

  schedule.push({ text: `${time}: ${sandwichNum} sandwiches ordered, ${sandwichNum - newSandwichNum} orders reject, estimated wait time: ${getDuration(time, endTime)} min`, time: time })
  // console.log(`${time}: ${sandwichNum} sandwiches ordered`)


  // schedule.push({ text: `${endTime}: stake a break!`, time: endTime })
  
  schedule.sort((a, b) => parseInt(a.time.substring(0, a.time.indexOf(':'))) > parseInt(b.time.substring(0, b.time.indexOf(':'))) ? 1 : (parseInt(a.time.substring(a.time.indexOf(':') + 1)) > parseInt(b.time.substring(b.time.indexOf(':') + 1)) ? 1 : -1)).forEach(item => console.log(item.text))
  console.log(`${endTime}: stake a break!`)

}


makeSchedule(startTime, 4)
makeSchedule('3:00', 3)
makeSchedule('4:00', 3)
