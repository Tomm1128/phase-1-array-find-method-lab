// code your solution here

const superbowlWin = array => {
  const yearWon = array.find(findWin)
  if (typeof yearWon === 'undefined'){
    return yearWon
  } else {
    return yearWon.year
  }
}


const findWin = element => element.result === "W"
