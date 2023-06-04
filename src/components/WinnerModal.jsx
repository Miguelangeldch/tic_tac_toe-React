import React from 'react'
import Square from './Square'
import useGame from '../hooks/useGame'

export default function WinnerModal () {
  const { winner, resetGame } = useGame()

  if (winner === null) return null
  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {
                winner === false ? 'Empate' : 'Ganó:'
              }
        </h2>
        <header className='win'>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Reiniciar partida</button>
        </footer>
      </div>
    </section>
  )
}
