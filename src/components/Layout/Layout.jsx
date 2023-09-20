import styles from './Layout.module.css'
import { Scoreboard } from '../ Scoreboard/ Scoreboard.jsx'
import { useState } from 'react'
import { Board } from '../Board/Board.jsx'
import { calculation } from '../../calculation.js'

export const Layout = () => {
	const [board, setBoard] = useState(Array(9).fill(''))
	const [xIsNext, setXIsNext] = useState(true)

	const winner = calculation(board)

	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) return
		boardCopy[index] = xIsNext ? 'X' : 'O'
		setBoard(boardCopy)
		setXIsNext(!xIsNext)
	}

	const newGame = () => {
		setBoard(Array(9).fill(''))
	}

	const isDraw = (array) => {
		const cheackResult = array.every((item) => item !== '')
		return cheackResult
	}

	const draw = isDraw(board)

	return (
		<>
			<Scoreboard move={xIsNext} winner={winner} draw={draw} />
			<Board board={board} click={handleClick} />
			<button className={styles.button} onClick={newGame}>
				Начать игру заново
			</button>
		</>
	)
}
