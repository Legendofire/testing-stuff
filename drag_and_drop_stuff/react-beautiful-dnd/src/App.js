import React, { useState } from "react"
import "@atlaskit/css-reset"
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from "./initial-data"
import Column from "./Column"

const Container = styled.div`
    display: flex;
`

const App = () => {


    const [toDoList, setToDoList] = useState(initialData)

    // const onDragStart = start => {
    //     const homeIndex = initialData.columnOrder.indexOf(start.source.droppableId)
        

    //     setToDoList({
    //         homeIndex,
    //     })
    // }

    const onDragEnd = result => {

        // setToDoList({
        //     homeIndex: null
        // })


        // it is the responsibility of your onDrag function to synchronously update your state to reflect the Drag and Drop result
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        // if (
        //     destination.droppableId === source.droppableId && // when we are dragging and dropping stuff inside the same element
        //     destination.index === source.index
        // ) {
        //     return
        // }
        // const column = toDoList.columns[source.droppableId]
        const start = toDoList.columns[source.droppableId]
        const finish = toDoList.columns[destination.droppableId]

        if (start === finish) {

            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1) // this means: from the index "source.index", we want to remove 1 item
            newTaskIds.splice(destination.index, 0, draggableId) // this means: from the index "destination.index" I am going to remove nothing (0) and I am going to add the draggableId

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }



            setToDoList({
                ...toDoList,
                columns: {
                    ...toDoList.columns,
                    [newColumn.id]: newColumn,
                }
            })
        }
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

        const newToDoList = {...toDoList,
        columns: {
            ...toDoList.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
        }}

        setToDoList(newToDoList)  

    }

    return (
        <DragDropContext
           // onDragStart={onDragStart}
            //onDragUpdate // called when something changes during a drag
            onDragEnd={onDragEnd}
        // called at the end of a drag (this is the ONLY REQUIRED CALLBACK for the DragDropContext)
        >
            <Container>
                {console.log(initialData.columnOrder)}
                {initialData.columnOrder.map((columnId) => {
                    const column = initialData.columns[columnId]
                    const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])

                    //const isDropDisabled = index < toDoList.homeIndex
                    // isDropDisabled will be set to true when the index of our map function is less than the index of the column we started the drag in: this will prevent dragging backwards between the columns

                    return (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks}
                        //    isDropDisabled={isDropDisabled}
                           />
                    )
                })}
            </Container>
        </DragDropContext>
    )
}

export default App

// class App extends React.Component{

//     toDoList = initialData;

//     render(){

//         return this.toDoList.columnOrder.map(columnId => {
//             const column = this.toDoList.columns[columnId]
//             const tasks = column.taskIds.map(taskId => this.toDoList.tasks[taskId])

//             return <Column key={column.id} column={column} tasks={tasks}/>
//         })
//     }        
// }

// export default App