import React, {useState} from "react"
import "@atlaskit/css-reset"
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from "./initial-data"
import Column from "./Column"


const App = () => {
   
    const [state, setState] = useState(initialData)
    
    const onDragEnd = result => {
    // it is the responsibility of your onDrag function to synchronously update your state to reflect the Drag and Drop result
        const  {destination, source, draggableId} = result

        if(!destination){
        return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }
        const column = state.columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1) // this means: from the index "source.index", we want to remove 1 item
        newTaskIds.splice(destination.index, 0, draggableId) // this means: from the index "destination.index" I am going to remove nothing (0) and I am going to add the draggableId
        
        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        }

        setState({          
            ...state,
            columns:{
              ...state.columns,
              [newColumn.id]: newColumn, 
            }
        })
     
      }
    

    return (
    <DragDropContext
        //onDragStart
        //onDragUpdate // called when something changes during a drag
        onDragEnd={onDragEnd}
        // called at the end of a drag (this is the ONLY REQUIRED CALLBACK for the DragDropContext)
    >

    {state.columnOrder.map(columnId => {
        const column = state.columns[columnId]
        const tasks = column.taskIds.map(taskId => state.tasks[taskId])
        
        return (
        <Column key={column.id} column={column} tasks={tasks}/>
        )
    })}
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