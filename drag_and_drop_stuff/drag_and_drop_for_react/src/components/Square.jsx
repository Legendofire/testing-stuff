const Square = ({children, black}) => {
    const fill = black ? "black" : "white"
    const stroke = black ? "white" : "black"
    return (
        <div style={{backgroundColor: fill, color: stroke}}>
        {children}
        </div>
            
    )
}
export default Square
