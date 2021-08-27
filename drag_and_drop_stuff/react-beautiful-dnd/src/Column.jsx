 import React from 'react'
 import styled from "styled-components"
 import {Droppable} from "react-beautiful-dnd"
 import Task from "./Task"


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px`

const Title = styled.h3`
    color: purple;
    padding: 8px`

const TaskList = styled.div`
    padding: 8px;
    div:hover {cursor: pointer}
    `
 
 const Column = props => {
     
     
     return (
        <Container>
            <Title>{props.column.title}</Title>
                {/* Droppable has one required prop: a droppable id that needs to be unique within the DragDropContext*/}
            <Droppable droppableId={props.column.id}>
            {/* Droppable expects its child to be a function that returns a react component*/}
                {provided => (
                // the first argument to this function is called "provided", which is an object that serves a few important purposes. The provider object has a property called "droppableProps": these are props that need to be applied to the component that you want to designate as your droppable 
                    <TaskList
                // the "provided" object has a property called "innerRef", which is a property used to supply the DOM node of the component to react-beautiful-dnd
                        ref={provided.innerRef} {...provided.droppableProps}
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
 