import React, {useState} from 'react';

const App = () => {
// hooks must be at the top level, they can't be nested inside anything

const [count, setCount] = useState(4)
  //()=>
//{
 //console.log("run function")
 //return 4
//}) //*
const [theme, setTheme] = useState("blue")
//useState always returns an array with two values: the first one is the current state of every single iteration of the render function; the second one is a function that is going to allow us to update that state

//* when the initialState we want to use is hardcoded (like in useState(4)), it will run every time the component renders, but if we use the function version, it will only run the first time the component renders

const decrementCount= () => {
  setCount(prevCount => prevCount-1)
  setTheme("blue")
  // the reason we want to use a function here when updating the state from its previous value is because if we were to call setCount again, it takes the current value set by the first setCount, as opposed to using setCount(count+1) which would take the original state value every time and basically overwrite itself
}

const incrementCount= () => {
  setCount(prevCount => prevCount+1)
  setTheme("red")

}

  return (
    <>
     <button onClick={decrementCount}>-</button> 
     <span>{count}</span> 
     <button onClick={incrementCount}>+</button> 
     <span>{theme}</span> 
    </>
  );
}

export default App;
