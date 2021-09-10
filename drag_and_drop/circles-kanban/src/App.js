import React, { useState } from 'react';
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
    width: '15%'
  },
  [v4()]: { // every column is gonna need a unique id
    name: ' In Progress',
    items: [],
    width: '15%'
  },
  [v4()]: { // every column is gonna need a unique id
    name: ' Requested ',
    items: [],
    width: '15%'
  },
  [v4()]: { // every column is gonna need a unique id
    name: 'Done',
    items: [],
    width: '600px'
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
        justifyContent: 'center',
        height: '100%'
      }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          
          const divStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: column.width

          }
          return (
            <div style={divStyle}>
              <h2 style={{
                paddingTop: 20
              }}>
                {column.name}
              </h2>
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
                          backgroundColor: snapshot.isDraggingOver ? 'lightsteelblue' : 'lightgrey',
                          padding: 4,
                          width: 250,
                          minHeight: 500
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
  );
}

export default App;
