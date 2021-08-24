import React from 'react'

const Col = ({isOver, children}) => {
    const className = isOver ? "highlight-region" : ""
    // it will highlight the column when an item is being dragged over it

    return (
        <div className={`col${className}`}>
            {children}
        </div>
    )
}

export default Col
// this is gonna know whether an item is being dragged over the column or not