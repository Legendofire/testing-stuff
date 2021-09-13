import { useReducer } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import tw from "xwind";




const dragReducer = (state, action) => {
  return state;
};


const App = () => {

  const data = [
    {
      id: "5f832341cc119a50d1adb972",
      picture: "http://placehold.it/32x32",
      name: {
        first: "Goff",
        last: "Robbins",
      },
    },
  ];

  const [state, dispatch] = useReducer(dragReducer, {
    items: data,
  });

  const onDragEnd = useCallback((result) => {
    if (result.reason === "DROP") {
      if (!result.destination) {
        return;
      }
      dispatch({
        type: "MOVE",
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });
    }
  }, []);

  return (

    <DragDropContext onDragEnd={onDragEnd}>
           
    <div className='flex flex-row h-screen p-4'>
     <Droppable droppableId="items" type="PERSON">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className=
                {snapshot.isDraggingOver}
            >
                      {state.items?.map((person, index) => {
          return (
            <Draggable key={person.id} draggableId={person.id} index={index}>
              {(provided, snapshot) => {
                return (
                  <div
                    className={snapshot.isDragging}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>
                      <img
                        src={person.picture}
                      />
                      <span>
                        {person.name.first} {person.name.last}
                      </span>
                    </div>
                  </div>
                );
              }}
            </Draggable>
          );
        })}

              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
</DragDropContext>

  )
}
export default App