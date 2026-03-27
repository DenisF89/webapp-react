import Stars from "./Stars";

function Review({review}){

 const {name,vote,text} = review;
                                  

return(
                <div className="card h-100">
                        <span>{name}</span>  
                        <span>Voto: <Stars value={vote}/></span> 
                        <span>{text}</span> 
                </div>
    )
}

export default Review