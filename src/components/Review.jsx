import Stars from "./Stars";
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';

function Review({review,func}){

 const {id,name,vote,text} = review;
 const { isAuth } = useAuth();
 const { id : idMovie } = useParams();
 const defaultDelete = {id:0, name:""};

//state per Modale
const [isVisible,setIsVisible] = useState(false);
const [toDelete,setToDelete] = useState(defaultDelete);

 
 const deleteReview = ()=>{

        const apiUrl = `http://localhost:3000/api/movies/${idMovie}/review/${toDelete.id}`;
        
        axios.delete(apiUrl)
        .then(response=>{
                console.log("eliminata"); 
                func();
                hideModal();
                
        })
        .catch(error=>{
                console.error(error);
        })


 }


//funzioni per Modale

        const showModal = (id,name)=>{
        setToDelete(prev=>({id, name}));
        setIsVisible(true);
        }

        const hideModal = ()=>{
        setIsVisible(false);
        setToDelete(prev=>(defaultDelete));
        }

                                  

return(<>
                <div className="card position-relative h-100">
                        <span>{name}</span>  
                        <span>Voto: <Stars value={vote}/></span> 
                        <span>{text}</span> 
                        { isAuth && <button className="btn-close position-absolute top-0 end-0 m-1"  onClick={(e)=>showModal(id,name)}></button>}
                </div>

                {/* MODALE CONFERMA ELIMINAZIONE */}
                <Modal isVisible={isVisible} toDelete={toDelete} hide={hideModal} deleteR={deleteReview} />
                
        </>
    )
                        
}

export default Review