import {WINNERS_COMBOS} from './../constants.js'

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNERS_COMBOS){
      const [a,b,c] = combo
  
      if(boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c] ){
        return boardToCheck[a]
      }    
    }  
    return null
  }

 export const checkEndGame = (newBoard) => {
    return newBoard.every(e => e != null)
  }
