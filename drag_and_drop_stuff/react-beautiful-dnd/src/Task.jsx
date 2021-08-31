import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    color: white;
    display: flex;
    background-color: ${props =>
        props.isDragDisabled
        ? 'darkgreen'
        : props.isDragging
            ? 'grey'
            : 'purple'}`
    // this is a nested ternary statement to conditionally set the background-color to 'darkgreen' if a draggable is disabled; isDragDisabled will prevent a Draggable from being dragged but it will still be orderable within the list
        
        
        
    // conditionally styling the background

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;
//     :hover {cursor: pointer};`

const Task = props => {
    const isDragDisabled = props.task.id === 'task-1'

    return (
        <Draggable
        draggableId={props.task.id}
        index={props.index}
        isDragDisabled={isDragDisabled}
        //isDragDisabled={props.task.id === 'task-1'} // this disables the drag when the task.id is 'task-1'
        // if isDragDisabled is set to true, it prevents the element from being draggable 
        >
            {/* Draggable also expects its child to be a function */}
            {(provided, snapshot) => (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                // here, we are passing a prop called isDragging to my styled component which has the value of the snapshot.isDragging property; using the styled-components API, I can conditionally set the background-colour of the component based on this prop
                isDragDisabled={isDragDisabled}
                >
                {/* <Handle {...provided.dragHandleProps} */}

                 {console.log("O QUE SE PASSA AQUI")}
                 {props.task.content}
            </Container>)}
        </Draggable>
    )
}
export default Task