import Stars from "./Stars";

function Review({review}){

 const {name,vote,text} = review;
                                  

return(
                <div className="card">
                        <span>Nome: {name} </span>  
                        <span>Voto: <Stars value={vote}/></span> 
                        <span>Commento: {text} </span> 
                </div>
    )
}

export default Review