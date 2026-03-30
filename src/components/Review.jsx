import Stars from "./Stars";
import { useAuth } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Review({review,func}){

 const {id,name,vote,text} = review;
 const { isAuth } = useAuth();
 const { id : idMovie } = useParams();

 
 const deleteReview = (id,name)=>{

        const apiUrl = `http://localhost:3000/api/movies/${idMovie}/review/${id}`;
        
        axios.delete(apiUrl)
        .then(response=>{
                console.log("eliminata"); 
                func();
        })
        .catch(error=>{
                console.error(error);
        })


 }
                                  

return(<>
                <div className="card position-relative h-100">
                        <span>{name}</span>  
                        <span>Voto: <Stars value={vote}/></span> 
                        <span>{text}</span> 
                        { isAuth && <button className="btn-close position-absolute top-0 end-0 m-1"  onClick={(e)=>deleteReview(id,name)}></button>}
                </div>
                
        </>
    )
                                        //(e)=>openModal(id,name)
}

export default Review