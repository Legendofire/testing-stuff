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
    background-color: ${props => (props.isDragging ? "grey" : "purple")};`
    // conditionally styling the background

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;
//     :hover {cursor: pointer};`

const Task = props => {
    return (
        <Draggable 
            draggableId={props.task.id} index={props.index}>
            {/* Draggable also expects its child to be a function */}
            {(provided, snapshot) => (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                // here, we are passing a prop called isDragging to my style component which has the value of the snapshot.isDragging property; using the styled-components API, I can conditionally set the background-colour of the component based on this props
                >
                {/* <Handle {...provided.dragHandleProps} */}

                 {props.task.content}
            </Container>)}
        </Draggable>
    )
}
export default Task