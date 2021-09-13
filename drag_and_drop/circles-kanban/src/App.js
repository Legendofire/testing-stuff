import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 } from 'uuid'
import images from './data/data';


const itemsFromBackEnd = [
  { id: v4(), content: [images] },
  //   // { id: v4(), content: 'Second Task' },
  //   // { id: v4(), content: 'Third Task' },
  //   // { id: v4(), content: 'Fourth Task' },
  //   // { id: v4(), content: 'Fifth Task' },
]

const columnsFromBackend = {
  [v4()]: {
    name: 'first',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'second',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: itemsFromBackEnd,
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  // [v4()]: { // every circle is gonna need a unique id
  //   name: '+',
  // }}

  // { // every circle is gonna need a unique id
  //   items: itemsFromBackEnd,
  //   width: '10rem',
  //   height: '10rem',
  //   borderRadius: '10rem',
}


const onDragEnd = (result, columns, setColumns) => {

  if (!result.destination) return

  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
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
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr) 1.5fr',
        gridTemplateRows: 'repeat(2, 1fr)',
        justifyItems: 'center',
        alignItems: 'center'
        //  height: '100%'
      }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {


          return (
            <div>
              {/* <h2 style={{
                paddingTop: 20
              }}>
                {column.name}
              </h2> */}
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
                          width: column.width,
                          height: column.height,
                          borderRadius: column.borderRadius,
                        }}

                      >
                        {/* {column.name} */}
                        {column.items.map((item, index) => {
                          return ( 
                          <Draggable
                            key='1'
                            draggableId='1' //draggableId needs to be a string
                          //index={index} // this will tell us what index we're dragging from and dropping to
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    //userSelect: 'none',
                                    // padding: 16,
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '50%',
                                    backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                    color: 'white',
                                    ...provided.draggableProps.style
                                  }}
                                >
                                </div>
                              )
                            }}
                          </Draggable>
                           )
                        }
                      )
                    }

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
