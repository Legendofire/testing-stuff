import React, {Fragment, useState} from 'react'
import Picture from './Picture.jsx'
import { useDrop } from 'react-dnd'
import "../App.css"


// for every single element that you want to make draggable, you have to use a different implementation of the useDrag hook

const PictureList = [
    {
        id: 1, // we have to use an id so every element is identifiable  
        url: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhbmNpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1571975617551-9adb2acede66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRhbmNpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1523662398158-cc9ecad78b38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRhbmNpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
]




const DragDrop = () => {

    const [board, SetBoard] = useState([])

    const [{isOver}, drop] = useDrop(()=>({
        accept: 'image', // setting that we only accept elements with the type of image
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            })
        })
    )

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter(picture => id === picture.id)
        SetBoard(board => [...board, pictureList[0]])
        //SetBoard([pictureList[0]]) // this will replace one picture for the other every time
    }

    return (
        <Fragment>
            <div
                className= 'Pictures'
            >
                {PictureList.map(picture => {
                    return (
                    <Picture
                        url={picture.url}
                        id={picture.id}  
                        key={picture.id} 
                    />                    
                    )
                })}
            </div>
            <div
                className= 'Board'
                ref={drop}
                style={{
                    backgroundColor: isOver ? 'lightcoral' : 'red',
                    transition: '0.25s'
            }}

            >
                {board.map(picture => {
                    return <Picture url={picture.url} id={picture.id}/>
                })}
            </div>

        </Fragment>

    )
}

export default DragDrop
