import styles from './Board.module.css'
import { Cell } from '../Cell/Cell.jsx'
import PropTypes from 'prop-types'

export const Board = ({ board, click }) => {
	return (
		<div className={styles.container}>
			{board.map((square, index) => (
				<Cell key={index} click={() => click(index)} value={square} />
			))}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.array,
	click: PropTypes.func
}
