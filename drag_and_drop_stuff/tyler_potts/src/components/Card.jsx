const Card = (props) => {
    const dragStart = e => {
        const target = e.target;
        
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => { // this gives the event enough delay for us to see the card that we are dragging, instead of rendering it invisible immediately
         target.style.display = "none";
        });
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable} // you can set it to false for a specific card that you don't want to be draggable 
            onDragStart={dragStart}
            //onDragOver={dragOver}
        >
            {props.children}    
        </div>
    )
}

export default Card
