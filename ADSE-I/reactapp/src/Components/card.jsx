function Card({title, description, children}){
    return <div style={{border: '1px solid blue', 
    padding: '10px', 
    margin: '10px', 
    borderRadius: '10px'}}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
    </div>
}

export default Card;