import React, {useState} from "react"
import "@atlaskit/css-reset"
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from "./initial-data"
import Column from "./Column"
    
const Container = styled.div`
    display: flex;`


const App = () => {
   
    const [state, setState] = useState(initialData)

    
    const onDragStart = start => {
        const homeIndex = state.columnOrder.indexOf(start.source.droppableId)
        setState({
            ...state,
            homeIndex,
        })
    }
    
    const onDragEnd = result => {
        setState({
            ...state,
            homeIndex: null,
        })
        // it is the responsibility of your onDrag function to synchronously update your state to reflect the Drag and Drop result
        const  {destination, source, draggableId} = result

        if(!destination){
        return
        }

        // if (
        //     destination.droppableId === source.droppableId && // when we are dragging and dropping stuff inside the same element
        //     destination.index === source.index
        // ) {
        //     return
        // }
        // const column = state.columns[source.droppableId]
        const start = state.columns[source.droppableId]
        const finish = state.columns[destination.droppableId]

        if (start === finish) {

            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1) // this means: from the index "source.index", we want to remove 1 item
            newTaskIds.splice(destination.index, 0, draggableId) // this means: from the index "destination.index" I am going to remove nothing (0) and I am going to add the draggableId
        
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }

            setState({          
                ...state,
                columns:{
                  ...state.columns,
                [newColumn.id]: newColumn, 
                }
            })}
        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        }

        setState({
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart, 
                [newFinish.id]: newFinish,
            }

        })
      }

    

    return (
    <DragDropContext
        onDragStart={onDragStart}
        //onDragUpdate // called when something changes during a drag
        onDragEnd={onDragEnd}
        // called at the end of a drag (this is the ONLY REQUIRED CALLBACK for the DragDropContext)
    >   

        <Container>


    {state.columnOrder.map((columnId, index) => {
        const column = state.columns[columnId]
        const tasks = column.taskIds.map(
            taskId => state.tasks[taskId],
            )
        
        const isDropDisabled = index < state.homeIndex

        return (
            <Column
                key={column.id}
                column={column}
                tasks={tasks}
                isDropDisabled={isDropDisabled}/>
            )
        })}
        </Container>
        
    </DragDropContext>
    )
}

export default App

// class App extends React.Component{

//     state = initialData;

//     render(){

//         return this.state.columnOrder.map(columnId => {
//             const column = this.state.columns[columnId]
//             const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

//             return <Column key={column.id} column={column} tasks={tasks}/>
//         })
//     }        
// }

// export default App