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

const originalCirclesFromBackend = {
  [v4()]: { // every circle is gonna need a unique id
    items: itemsFromBackEnd,
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
  },
}

const targetCirclesFromBackend = {
  [v4()]: {
    name: 'col1',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col2',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col3',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col4',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col5',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col6',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col7',
    items: [],
    width: '8rem',
    height: '8rem',
    borderRadius: '8rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    name: 'col8',
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


const onDragEnd = (result, columns, setColumns, targetCircles, setTargetCircles) => {

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




  if (source.droppableId !== destination.droppableId) {
    const sourceCircle = targetCircles[source.droppableId]
    const destCircle = targetCircles[destination.droppableId]
    const sourceItems = [...sourceCircle.items]
    const destItems = [...destCircle.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...targetCircles,
      [source.droppableId]: {
        ...sourceCircle,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destCircle,
        items: destItems
      }
    }
    setTargetCircles(newCircle)
  } else {
    const circle = targetCircles[source.droppableId]
    const copiedItems = [...circle.items] // this way, we are not messing up with our original state array
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...targetCircles,
      [source.droppableId]: {
        ...circle,
        items: copiedItems
      }
    }
    setTargetCircles(newCircle)
  }
}

const App = () => {

  const [columns, setColumns] = useState(originalCirclesFromBackend)
  const [targetCircles, setTargetCircles] = useState(targetCirclesFromBackend)

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
        onDragEnd={result => onDragEnd(result, columns, setColumns, originalCirclesFromBackend, setTargetCircles)}
      >


        <Droppable
          droppableId='droppableId'
          type='circle'
          key='1'
        >
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? 'lightsteelblue' : 'lightgrey',
                  padding: 4,
                  width: '10rem',
                  height: '10rem',
                  borderRadius: '10rem',
                }}

              >
                {/* {column.name} */}
                {Object.values(originalCirclesFromBackend)[0].items.map((item, index) => {
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


          )

        {Object.entries(targetCircles).map(([id, circle]) => {
          return (
            <div
              key={id}
              style={{
                margin: 8

              }}
            >
              <Droppable
                droppableId={id}
                key={id}
                type='circle'
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver ? 'lightsteelblue' : 'lightgrey',
                        padding: 4,
                        width: circle.width,
                        height: circle.height,
                        borderRadius: circle.borderRadius,
                      }}

                    >
                      {/* {column.name} */}
                      {circle.items?.map((item, index) => {
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

          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
