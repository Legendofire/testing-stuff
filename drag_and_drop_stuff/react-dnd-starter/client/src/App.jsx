import React from "react";
import Homepage from "./pages/Homepage";
import Header from './components/Header';
import { DndProvider } from 'react-dnd'; // this is a way to supply the state that we will need (like Context)

const App = () => {
    return (
        <DndProvider backend={Backend}>
        {/* // this is a wrapper for the entire project so you can use the dnd functionality */}
        <Header/>
        <Homepage />
        </DndProvider>
    );
};

export default App;