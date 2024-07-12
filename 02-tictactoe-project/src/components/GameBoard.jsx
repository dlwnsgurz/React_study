import {useState} from 'react'


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    function handleSelectSquare(row,col) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedGameBoard[row][col] = activePlayerSymbol;
            return updatedGameBoard  
        });

        onSelectSquare()
    }
    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key={columnIndex}><button onClick = {() => {
                    handleSelectSquare(rowIndex,columnIndex)
                }}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol> 
}