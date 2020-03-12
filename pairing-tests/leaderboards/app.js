const leaderboard = {

  ranking: [
    {
      name: 'John',
      score: 55,
      rank: 3
    },
    {
      name: 'Toby',
      score: 84,
      rank: 1
    },
    {
      name: 'Maria',
      score: 78,
      rank: 2
    },
    {
      name: 'Melissa',
      score: 46,
      rank: 4
    },
  ],

  sortRanking() {
    this.ranking.sort((a, b) => (a.score < b.score) ? 1 : -1)
    this.ranking.forEach((person, index) => person.rank = index + 1)
  },

  addScore(name, score) {
    if (this.ranking.find(elem => elem.name === name)) {
      const currentScore = this.ranking.find(elem => elem.name === name).score
      this.ranking.find(elem => elem.name === name).score = currentScore > score ? currentScore : score
    } else {
      this.ranking.push({
        name: name,
        score: score,
        rank: 0
      })
    }
    this.sortRanking()
  }



}

console.log(leaderboard.ranking)

leaderboard.addScore('Susi', 99)
leaderboard.addScore('Toby', 87)
console.log(leaderboard.ranking)
