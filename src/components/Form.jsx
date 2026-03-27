import { useState, useEffect } from 'react';
import axios from "axios";

const Form = ({url, id, func})=>{

  const fieldsDefault = {name:'', vote:0, text:''}

  const [form, setForm] = useState(fieldsDefault)      //salvo i valori degli input del form
  const [isDisabled, setIsDisabled] = useState(false)  //salvo lo stato del submit
  const [errors, setErrors] = useState({});
  

  useEffect(()=>{                                      //Controllo Button Disabled true/false
     setIsDisabled(Object.values(form)                 //cerco dentro i valori delle proprietà dell'oggetto form;
                  .some(value=>String(value).trim()===""));   //some: almeno uno soddisfa la condizione stringa vuota? true(disabled) oppure false
  }, [form]);

  //Iniziale maiuscola, togli spazi prima e dopo e quelli multipli in mezzo
  const capitalize = (obj)=>{
    return Object.fromEntries(Object.entries(obj).map(([key,value])=>[
      key,
      typeof value === "string" ? value.trim().charAt(0).toUpperCase()+value.trim().slice(1).replace(/\s+/g,' ') : value] ));
  }

  const handleField = (e)=>{                            //Salva dati del form in uno stato
    let{name,value}= e.target;                        //destructuring del target
    setForm(form=>({...form, [name]:value}));           //crea oggetto da form e sovrascrive l'attributo che corrisponde al nome dell'input
  }

  const handleVote = (star)=>{                            //Salva dati del form in uno stato                        //destructuring del target
    setForm(form=>({...form, vote:star}));           //crea oggetto da form e sovrascrive l'attributo che corrisponde al nome dell'input
    setErrors(errors=>({...errors, vote:""}));
  }
  
  const addReview = ()=>{                              //Aggiunge una nuova recensione da form
                                   //non fa ricaricare la pagina al submit
    axios.post(`${url}${id}`, capitalize(form))
    .then(response=>{
        console.log(response);
        func();
        setForm(fieldsDefault);                            //resetta il form, tutti gli input a ''
        setErrors({});
    }).catch(err=> console.error(err.message));
        
  }

  const sendForm = (e)=>{
    e.preventDefault();  
    if(!checkForm()) return;
    addReview();
  }
  
    
      
  const checkForm = () => {
    const newErrors = {};

    if (!form.name.trim()) 
              {newErrors.name = "Inserisci il nome";}
console.log("vote:", form.vote, "tipo:", typeof form.vote);
    if (isNaN(form.vote)) 
              {newErrors.vote = "Inserisci un numero";}
    else if (Number(form.vote) < 1 || Number(form.vote) > 5) 
              {console.log("attenzione");newErrors.vote = "Voto non valido";}

    if (!form.text.trim()) 
            {newErrors.text = "Inserisci il testo";} 
    else if (form.text.trim().length < 5) 
            {newErrors.text = "Il testo è troppo corto";}
    else if (form.text.trim().length > 100) 
            {newErrors.text = "Il testo è troppo lungo";}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
    

  

  return(
    <form onSubmit={sendForm} className="newReview">
        <h4>Aggiungi Recensione</h4>
        <div className="row text-start">
          <div className="col-md-2">
            <label htmlFor="new-name">Nome</label>
            <input id="new-name" name="name" 
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder='Nome' value={form.name} onChange={handleField}/>
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          <div className="col-md-2">
            <label>Voto</label>
            <div className={`star-wrapper ${errors.vote ? "is-invalid" : ""}`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} 
                  type="button"
                  className= "stars"
                  onClick={() => handleVote(star)}
                >
                {star <= form.vote ? "★" : "☆"}
                </button>
              ))}
              </div>
          <div className="invalid-feedback">{errors.vote}</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="new-text">Testo</label>
            <input id="new-text" name="text" 
                  className={`form-control ${errors.text ? "is-invalid" : ""}`}
                  placeholder='Testo' value={form.text} onChange={handleField} />
            <div className="invalid-feedback">{errors.text}</div>
          </div>

          <div className="col-md-2">
            <button className={`btn mt-4 ${isDisabled ? "btn-secondary" : "btn-primary"}`} type="submit" disabled={isDisabled}>Aggiungi</button>
          </div>
        </div>
        
        
        
    </form>
  )
}

export default Form