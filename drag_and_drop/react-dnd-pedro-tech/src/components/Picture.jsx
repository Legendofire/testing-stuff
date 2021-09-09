import React from 'react'
import { useDrag } from 'react-dnd' // you need to call this hook for every element that you want to make draggable

const Picture = ({id, url}) => {
    
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'image', // every element in React DND requires a type property ---> it is just an identifier, you can name it whatever you want
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
        //  the collect function is optional, but it is how I track information such as whether an element is dragging or not {isDragging}
    }))

    return (
        <img
            ref={drag}
            src={url}
            alt="women dancing"
            height='250px'
            style={{
                // border: isDragging && '5px solid pink',
                opacity: isDragging && 0,
            }}
        />
            
        
    )
}

export default Picture
