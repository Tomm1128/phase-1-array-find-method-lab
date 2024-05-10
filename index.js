// code your solution here

const superbowlWin = record => {
  const yearWon = record.find(findWin)

  // return yearWon ? yearWon.year : yearWon
  if (yearWon) {
    return yearWon.year
  }
}

const findWin = winner => winner.result === "W"
