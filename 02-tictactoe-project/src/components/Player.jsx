import {useState} from "react"


export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((edting) => !edting);

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleNameChange(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className = "player-name">{playerName}</span>

    let btnCaption = "EDIT"

    if (isEditing) {
        editablePlayerName = <input type ="text" required value = {playerName} onChange={handleNameChange}></input>
        btnCaption = "SAVE"
    }

    return (<li className = {isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick = {handleEditClick}>{btnCaption}</button>
    </li>)
}