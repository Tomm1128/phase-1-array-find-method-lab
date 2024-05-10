// code your solution here

const superbowlWin = record => {
  const yearWon = record.find(findWin)
  if (yearWon) {
    return yearWon.year
  }
}

const findWin = winner => winner.result === "W"
