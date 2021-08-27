import React, {useState} from 'react'
import initialData from './initial-data'
import Column from "./Column"

const App = (props) => {
const [data, setData] = useState(initialData)


const sthWithColumns =
    setData(initialData.columns.map(columnId => {
        const column = initialData.columns[columnId]
        const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])
    
 }))
return(
    <Column/>
)


}

export default App