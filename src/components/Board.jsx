import React from 'react'
import Square from './Square'
import useGame from '../hooks/useGame'

export default function Board () {
  const { board, updateBoard } = useGame()
  return (
    <section className='game'>
      {
    board.map((_, index) => {
      return (
        <Square
          key={index}
          index={index}
          update={updateBoard}
        >
          {board[index]}
        </Square>
      )
    })
  }
    </section>
  )
}
