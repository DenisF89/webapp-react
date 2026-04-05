import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import Stars from "./Stars";
import Modal from './Modal';

function Review({review,func}){

 const {id,name,vote,text} = review;
 const { isAuth } = useAuth();
 const { id : idMovie } = useParams();
 const defaultDelete = {id:0, name:""};

//state per Modale
const [isVisible,setIsVisible] = useState(false);
const [toDelete,setToDelete] = useState(defaultDelete);

//funzioni per Modale

        const showModal = (id,name)=>{
        setToDelete(prev=>({id, name}));
        setIsVisible(true);
        }

        const hideModal = ()=>{
        setIsVisible(false);
        setToDelete(prev=>(defaultDelete));
        }
 
//Chiamata API per eliminare recensione
 const deleteReview = ()=>{

        const apiUrl = `http://localhost:3000/api/movies/${idMovie}/review/${toDelete.id}`;
        
        axios.delete(apiUrl)
        .then(response=>{
                func();
                hideModal();
        })
        .catch(error=>{
                console.error(error);
        })
 }

return(
        <>
                <div className="card position-relative h-100">
                        <span>{name}</span>  
                        <span>Voto: <Stars value={vote}/></span> 
                        <span>{text}</span> 
                {/*  Se admin loggato visualizza bottone per eliminare recensione */}
                        { isAuth && <button className="btn-close position-absolute top-0 end-0 m-1"  onClick={(e)=>showModal(id,name)}></button>}
                </div>

                {/* MODALE CONFERMA ELIMINAZIONE */}
                <Modal isVisible={isVisible} toDelete={toDelete} hide={hideModal} deleteR={deleteReview} />
                
        </>
    )
                        
}

export default Review