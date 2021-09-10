import React from 'react';
import './App.css';
import Draggable from 'react-draggable';

const App = () => {
  const eventControl = (event, info) => {
    console.log('Event name: ', event.type);
    console.log(event, info);
  }
  return (
    <Draggable
    onDrag={eventControl}
    onStart={eventControl}
    onStop={eventControl}
    onMouseDown={eventControl}
    onMouseUp={eventControl}
    onTouchStart={eventControl}
    onTouchEnd={eventControl}>
  <div className="drag-wrapper">
    <div>You can drag me now.</div>
  </div>
</Draggable>
  )
}

export default App