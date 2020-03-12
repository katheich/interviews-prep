const leaderboard = {

  ranking: [],

  sortRanking() {
    this.ranking.sort((a, b) => (a.score < b.score) ? 1 : (a.score === b.score ? ((a.date > b.date) ? -1 : 1) : -1))

    const tempRanking = this.ranking
    this.ranking.forEach((person, index) => {
      person.rank = index + 1

      if (index > 0 && tempRanking[index - 1].score === person.score) {
        person.rank = index
      }
    })
  },

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
    this.sortRanking()
  }



}

console.log(leaderboard.ranking)

leaderboard.addScore('John', 99)
leaderboard.addScore('Billy', 46)
leaderboard.addScore('Maria', 33)
leaderboard.addScore('Susi', 99)
leaderboard.addScore('Toby', 87)

console.log(leaderboard.ranking)
