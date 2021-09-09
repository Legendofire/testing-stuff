import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 } from 'uuid'


const itemsFromBackEnd = [
  { id: v4(), content: 'First Task' },
]

const circlesFromBackend = {
  [v4()]: { // every circle is gonna need a unique id
    items: itemsFromBackEnd,
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  },
  [v4()]: { // every circle is gonna need a unique id
    items: [],
  }
}



const onDragEnd = (result, circles, setCircles) => {

  if (!result.destination) return

  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = circles[source.droppableId]
    const destColumn = circles[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...circles,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    }
    setCircles(newCircle)
  } else {
    const circle = circles[source.droppableId]
    const copiedItems = [...circle.items] // this way, we are not messing up with our original state array
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    const newCircle = {
      ...circles,
      [source.droppableId]: {
        ...circle,
        items: copiedItems
      },
    }
    setCircles(newCircle)
  }
}

function App() {

  const [circles, setCircles] = useState(circlesFromBackend)

  return (

    <div
      style={{
        margin:0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(10, 1fr)',
        border: 'solid 3px red',
      }}>
      <div
        className='top-bar'
        style={{
          gridColumn: '1/11',
          gridRow: '1/3',
          border: 'solid 3px purple',
        }}
      >

      </div>

      <div
        className='progress-bar'
        style={{
          gridColumn: '1/9',
          gridRow: '3/4',
          border: 'dashed 3px blue',
        }}
      >Progress Bar component
      </div>
      <div
        className='controller'
        style={{
          gridColumn: '9/11',
          gridRow: '3/11',
          border: 'dashed 3px green',
        }}
      >Controller component </div>
   
          
      <DragDropContext
        onDragEnd={result => onDragEnd(result, circles, setCircles)}
      >
        <div
        className='drag-drop-context'
        style={{
          gridColumn: '1/9',
          gridRow: '4/11',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          border: 'dotted 3px orange',
        }}>
        <div
          style={{
            gridColumn: '1/5',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            border: 'solid 2px grey'
          }}>
        {Object.entries(circles).map(([id, circle]) => {
          return (
          //each circle where the picture can be dropped into
              <div style={{
                border: 'solid 2px pink',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              >
                <Droppable
                  droppableId={id}
                  key={id}
                  type='CIRCLE'             
                >
                {(provided, snapshot) => {
                    return (   
                      <div>
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightsteelblue' : 'lightgreen',
                          //gridColumns: '1/5',
                          padding: 4,
                          width: 60,
                          height: 60,
                          borderRadius: 60,
                        }}
                      >
                        {circle.items.map((item, index) => {
                          return (
                            <div
                              className='draggable'
                              style={{
                                display: 'grid',
                                backgroundColor: 'black'
                              }}
                              >

                            
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
                                      // userSelect: 'none',
                                      padding: 16,
                                      margin: 'auto',
                                      height: '50px',
                                      width: '50px',
                                      borderRadius: '50px',
                                      backgroundColor: snapshot.isDragging ? 'purple' : '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                  
                                )
                              }}
                            </Draggable>
                            </div>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                      <div>OLA</div>
                      </div>                
                    )
                  }}
                  
                </Droppable>
                <Droppable
                droppableId={v4()}
                key= {v4()}
                type='CIRCLE'
                >
                  {(provided, snapshot) => {
                    return (  
                      <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightgoldenrodyellow' : 'lightcoral',
                          padding: 4,
                          width: 60,
                          height: 60,
                          borderRadius: 60,
                        }}
                        >
                          {provided.placeholder}
                        </div>
                    )
                  }}
                </Droppable>
              </div>
            
          )
        })}
        </div>
        <div
          style={{
            backgroundColor: 'lightcoral',
            gridColumn: '5/9',
            height: '200px',
            borderRadius: '50%'
          }}
        >LALA


        </div>
      </div>
      </DragDropContext>

    </div>
  );
}

export default App;
