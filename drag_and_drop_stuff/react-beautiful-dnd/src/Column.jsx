 import React from 'react'
 import styled from "styled-components"
 import {Droppable} from "react-beautiful-dnd"
 import Task from "./Task"


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;`

const Title = styled.h3`
    color: purple;
    padding: 8px`

const TaskList = styled.div`
    div:hover {cursor: pointer};
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? "lightgreen" : "white")};
    flex-grow: 1;
    min-height: 100px;
    `
 
 const Column = props => {
     
     
     return (
        <Container>
            <Title>{props.column.title}</Title>
                {/* Droppable has one required prop: a droppable id that needs to be unique within the DragDropContext*/}
            <Droppable
                droppableId={props.column.id}
                //isDropDisabled = {props.isDropDisabled}
                //type={props.column.id === 'column-3' ? 'done' : 'active '} // here, I am conditionally assigning the type of the droppable based on the id of the column
                // you can provide an optional type prop to a droppable: a draggable can only be dropped into a droppable that shares the same type as the droppable it started in
                >
                {/* Droppable expects its child to be a function that returns a react component*/}
                {(provided, snapshot) => (
                    // the first argument to this function is called "provided", which is an object that serves a few important purposes. The provider object has a property called "droppableProps": these are props that need to be applied to the component that you want to designate as your droppable 
                    <TaskList
                    // the "provided" object has a property called "innerRef", which is a property used to supply the DOM node of the component to react-beautiful-dnd
                    ref={provided.innerRef} {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                        {props.tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index}/> 
                            ))}
                        {/* a placeholder is a react element used to increase the available space in a droppable during a drag when it's needed: the placeholder needs to be added as a child of the component that you designate as the droppable */}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
     )
    }
    
    export default Column;
    
    
    // class Column extends React.Component {
       
    //     render() { 
    //         return this.props.column.title ;
    //     }
    // }
     
    // export default Column;
 