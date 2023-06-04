import Square from './components/Square'
import { TURNS } from './constants'
import WinnerModal from './components/winnerModal'
import Board from './components/Board'
import useGame from './hooks/useGame'

function App () {
  const { turn, resetGame } = useGame()
  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reiniciar partida</button>
      <Board />
      <section className='turn'>
        <Square isSelect={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelect={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal />
    </main>
  )
}

export default App
