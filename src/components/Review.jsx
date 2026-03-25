function Review({review}){

 const {name,vote,text} = review;
                                  

return(
                <div className="">
                        <span>Nome: {name} </span>  
                        <span>Voto: {vote} </span> 
                        <span>Commento: {text} </span> 
                </div>
    )
}

export default Review