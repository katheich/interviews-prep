
// SORT RANKING FUNCTION (USED IN BOTH LEADERBOARD AND LEAGUES)
function   sortRanking(ranking) {
  ranking.sort((a, b) => (a.score < b.score) ? 1 : (a.score === b.score ? ((a.date > b.date) ? 1 : -1) : -1))

  ranking.forEach((person, index) => {
    person.rank = index + 1

    if (index > 0 && ranking[index - 1].score === person.score) {
      person.rank = index
    }
  })
}


// LEADERBOARDS
const leaderboard = {

  ranking: [],

  addScore(name, score) {
    if (this.ranking.find(elem => elem.name === name)) {

      const currentScore = this.ranking.find(elem => elem.name === name).score
      this.ranking.find(elem => elem.name === name).score = currentScore > score ? currentScore : score
    
    } else {
      const date = new Date()
      this.ranking.push({
        name: name,
        score: score,
        rank: 0,
        date: date
      })
    }
    sortRanking(this.ranking)
  }
}


// leaderboard testing
console.log(leaderboard.ranking)

leaderboard.addScore('John', 99)
leaderboard.addScore('Billy', 46)
leaderboard.addScore('Maria', 33)
leaderboard.addScore('Susi', 99)
leaderboard.addScore('Toby', 87)

console.log(leaderboard.ranking)

// setTimeout(() => {
//   leaderboard.addScore('Bjorn', 87)
//   console.log(leaderboard.ranking)
// }, 3000)



// LEAGUES
class League {

  constructor(members) {
    this.members = members
  }

  showRanking() {
    const subset = leaderboard.ranking.filter(member => this.members.includes(member.name))
    sortRanking(subset)
    console.log(subset)
  }

}


// league testing
const testLeague = new League(['John', 'Toby', 'Billy'])
const evenBetterLeague = new League(['John', 'Maria', 'Susi'])

console.log(testLeague)
testLeague.showRanking()

console.log(evenBetterLeague)
evenBetterLeague.showRanking()