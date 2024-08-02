import { useState } from "react"
import './App.css'
import confetti from "canvas-confetti"
import {TURNS} from "./constants.js"
import {Square} from "./components/Square.jsx"
import {checkWinner, checkEndGame} from './logic/checkGame.js'
import { ModalView } from "./components/Modal.jsx"


function App() {

  const [board,setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return JSON.parse(boardFromStorage) ?? Array(9).fill(null)
  })  
  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) =>
  {    

    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)   

    const newTurn = (turn == TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)

    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)  
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <>
      <main className='board'>
        <h3>Tic Tac Toe</h3>
        <button onClick={resetGame}>Reiniciar juego</button>
        
       
            <section className='game'>
            {board.map((el,index) => 
                <Square 
                key={index} 
                index={index}
                updateBoard = {updateBoard}
                >
                {board[index]}
                </Square> 
            )}                           
            </section>        

        <section className='turn'>
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <ModalView winner = {winner} resetGame = {resetGame} />
      </main>      
    </>
  )
}

export default App
