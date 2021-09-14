import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 } from 'uuid'
import images from './data/data';


const itemsToDrag = [
  { id: v4(), content: [images] },
  //   // { id: v4(), content: 'Second Task' },
  //   // { id: v4(), content: 'Third Task' },
  //   // { id: v4(), content: 'Fourth Task' },
  //   // { id: v4(), content: 'Fifth Task' },
]

const targetCircles = {
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
}

const originalCircle = {
  [v4()]: { // every circle is gonna need a unique id
    items: itemsToDrag,
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
  },
  [v4()]: { // every circle is gonna need a unique id
    items: itemsToDrag,
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
  },
}


const onDragEnd = (result, originalCircleState, setOriginalCircle, targetCirclesState, setTargetCircles) => {

  if (!result.destination) return

  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceCircle = originalCircleState[source.droppableId]
    const destCircle = targetCirclesState[destination.droppableId]
    const sourceItems = [...sourceCircle.items]
    const destItems = [...destCircle.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...targetCirclesState,
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
    const circle = originalCircleState[source.droppableId]
    const copiedItems = [...circle.items] // this way, we are not messing up with our original state array
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...originalCircleState,
      [source.droppableId]: {
        ...circle,
        items: copiedItems
      }
    }
    setOriginalCircle(newCircle)
  }
}

const App = () => {

  const [originalCircleState, setOriginalCircle] = useState(originalCircle)
  const [targetCirclesState, setTargetCircles] = useState(originalCircle)


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        justifyItems: 'center',
        alignItems: 'center'
        //  height: '100%'
      }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, originalCircleState, setOriginalCircle)}
      >
        {Object.entries(originalCircle).map(([id, circle]) => {


          return (
            <div>
              {/* <h2 style={{
                paddingTop: 20
              }}>
                {circle.name}
              </h2> */}
              <div style={{
                margin: 8

              }}
              >
                <Droppable
                  droppableId={id}
                  key={id}
                  type='IMAGE'
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
                        {/* {circle.name} */}
                        {circle.items.map((item, index) => {
                          return ( 
                          <Draggable
                            key={item.id}
                            draggableId={item.id} //draggableId needs to be a string
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
                                  <h1>RAQUEL</h1>
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
        {Object.entries(targetCircles).map(([id, circle]) => {


return (
  <div>
    {/* <h2 style={{
      paddingTop: 20
    }}>
      {circle.name}
    </h2> */}
    <div style={{
      margin: 8

    }}
    >
      <Droppable
        droppableId={id}
        key={id}
        type='IMAGE'
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
              {/* {circle.name} */}
              {/* {circle.items.map((item, index) => {
                return ( 
                <Draggable
                  key={item.id}
                  draggableId={item.id} //draggableId needs to be a string
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
                        <h1>RAQUEL</h1>
                      </div>
                    )
                  }}
                </Draggable>
                 )
              }
            )
          } */}

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
