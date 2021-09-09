// Draggable

const draggableSnapshot = {
    isDragging: true,
    draggingOver: "column-1"
    // if a draggable is being dragged and it is currently not over a droppable, then the property "draggingOver" will be set to "null"
};

// Droppable

const droppableSnapshot = {
    isDraggingOver: true,
    draggingOverWith: "task-1" // set to the id of the draggable that is dragging over a droppable; it will be set to "null" if the droppable is not being dragged over
};