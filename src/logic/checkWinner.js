import { WINNER_COMBINATION } from '../constants'

const checkWinner = (board) => {
  for (const combination of WINNER_COMBINATION) {
    const [a, b, c] = combination
    if (
      board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
    ) {
      return board[a]
    }
  }
  return null
}

export default checkWinner
