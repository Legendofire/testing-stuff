const Board = (props) => {
    
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id'); // we transfer the id
        const card = document.getElementById(card_id); // we get the element
        card.style.display = 'block'

        e.target.appendChild(card); // we append the element to the other board
    
    }

    const dragOver = e => {
        e.preventDefault()
    }
    
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )}    

export default Board




