import React, { useState, Container} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 } from 'uuid'


const itemsFromBackEnd = [
  { id: v4(), content: 'First Task' },
  { id: v4(), content: 'Second Task' },
  { id: v4(), content: 'Third Task' },
  { id: v4(), content: 'Fourth Task' },
  { id: v4(), content: 'Fifth Task' },
]

const columnsFromBackend = {
  [v4()]: { // every column is gonna need a unique id
    name: ' To Do',
    items: itemsFromBackEnd,
  },
  [v4()]: { // every column is gonna need a unique id
    name: ' In Progress',
    items: [],
  },
  [v4()]: { // every column is gonna need a unique id
    name: ' Requested ',
    items: [],
  },
  [v4()]: { // every column is gonna need a unique id
    name: 'Done',
    items: [],
  }
}

const onDragEnd = (result, columns, setColumns) => {

  if (!result.destination) return

  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const[removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    const newColumn = {
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    }
    setColumns(newColumn)
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items] // this way, we are not messing up with our original state array
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    const newColumn = {
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    }
    setColumns(newColumn)
  }
}

function App() {

  const [columns, setColumns] = useState(columnsFromBackend)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        height: '75%',
        width: '85%',
        border: 'solid 2px red'
      }}>
        <div
          style={{
            height: '100%',
            width: '85%',
            border: 'solid 2px purple',
          }}
        
        >
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        <div
                  style={{
                    height: '25%',
                    width: '100%',
                    border: 'solid 2px yellow',
                  }}
        ></div>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            
              <div style={{
                margin: 8
              }}
              >
                <Droppable
                  droppableId={id}
                  key={id}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightsteelblue' : 'lightgreen',
                          padding: 4,
                          borderRadius: 150,
                          width: 150,
                          height: 150
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id} //draggableId needs to be a string
                              index={index} // this will tell us what index we're dragging from and dropping to
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )
        })}

      </DragDropContext>
    </div>
    <div
      style={{
        height: '100%',
        width: '15%',
        border: 'solid 2px blue',
      }}
    ></div>
    </div>
  );
}

export default App;
