var Image=()=>{
    return (
        <img  src="react-meme1_(1).png"/>
    )
}

var Card=()=>{
    return(
        <div className="card" >
            <h2>
                this is a card
            </h2>
            <Image/>
            <p>this is card</p>
        </div>
    );
}
export default Card;