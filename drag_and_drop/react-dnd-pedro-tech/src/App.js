import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';
// we need to wrap the highest order component in some sort of provider that comes with the DND library ---> this provider serves to alert the library that the components inside of it have access to this functionality
function App() {
  return (
      <DndProvider
        backend={HTML5Backend}
      >
          <div className="App">
              <DragDrop/>
          </div>
      </DndProvider>
  );
}

export default App;
