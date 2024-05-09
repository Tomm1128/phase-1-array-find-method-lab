// code your solution here

const superbowlWin = record => {
  const yearWon = record.find(findWin)
  if (typeof yearWon === 'undefined'){
    return yearWon
  } else {
    return yearWon.year
  }
}


const findWin = element => element.result === "W"
