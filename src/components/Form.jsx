import { useState, useEffect } from 'react';
import axios from "axios";

const Form = ({url, id, func})=>{

  const fieldsDefault = {name:'', vote:0, text:''}

  const [form, setForm] = useState(fieldsDefault)      //salvo i valori degli input del form
  const [isDisabled, setIsDisabled] = useState(false)  //salvo lo stato del submit

  useEffect(()=>{                                      //Controllo Button Disabled true/false
     setIsDisabled(Object.values(form)                 //cerco dentro i valori delle proprietà dell'oggetto form;
                  .some(value=>String(value).trim()===""));   //some: almeno uno soddisfa la condizione stringa vuota? true(disabled) oppure false
  }, [form]);

  const handleField = (e)=>{                            //Salva dati del form in uno stato
    const{name,value}= e.target;                        //destructuring del target
    setForm(form=>({...form, [name]:value}));           //crea oggetto da form e sovrascrive l'attributo che corrisponde al nome dell'input
  }

  //Iniziale maiuscola, togli spazi prima e dopo e quelli multipli in mezzo
  const capitalize = (str)=>str.trim().charAt(0).toUpperCase()+str.trim().slice(1).replace(/\s+/g,' ');   
  
  const addReview = (e)=>{                              //Aggiunge una nuova recensione da form
    e.preventDefault();                                  //non fa ricaricare la pagina al submit
    
    axios.post(`${url}${id}`, form)
    .then(response=>{
        console.log(response);
        func();
        setForm(fieldsDefault);                            //resetta il form, tutti gli input a ''
    }).catch(err=> console.error(err.message));
    
    

    /* createNewReview(lista=>[...lista,                      //creo nuova lista dalla lista
                        {
                            name: capitalize(form.new_name),  //titolo normalizzato (vedi capitalize)
                            vote: capitalize(form.genre),  //genere normalizzato (vedi capitalize)
                            text: form.url
                        }
    ]);   */                             
  }

  /* //AddMovie con FormData
  const addMovie = (e)=>{
    e.preventDefault();                                                     //non fa ricaricare la pagina al submit del form
    const form = new FormData(e.target);                                    //FormData recupera i dati di un form
    const data = Object.fromEntries(form.entries());                        //creo un oggetto con i name degli input passati col form
    //if (Object.values(data).some(valore=>valore.trim()==="")) return      //se uno degli input è vuoto non far nulla
    //if(!data.title || !data.genre || !data.url) return                    //fa la stessa cosa sopra ma solo per gli input indicati
    setMovieList(lista=>[...lista,                                          //aggiungo alla lista film il nuovo oggetto creato dal form
        {
            id: lista.length+1,                                             //aggiungo un id progressivo da lista.length
            title: capitalize(data.title),                                 
            genre: capitalize(data.genre),
            url: data.url
        }
    ]);    
    setForm(fieldsDefault);                                                  //cancello i dati nel form
  } */

  return(
    <form onSubmit={addReview} className="newReview">
        <h2>Aggiungi Recensione</h2>
        
        <label htmlFor="new-name">Nome</label>
        <input id="new-name" name="name" placeholder='Riempire il campo' value={form.name} onChange={handleField}/>
        
        <label htmlFor="new-vote">Voto</label>
        <input id="new-vote" name="vote" placeholder='Riempire il campo' value={form.vote} onChange={handleField} />
        
        <label htmlFor="new-text">Testo</label>
        <input id="new-text" name="text" placeholder='Riempire il campo' value={form.text} onChange={handleField} />
        
        <button type="submit" disabled={isDisabled}>Aggiungi</button>
    </form>
  )
}

export default Form