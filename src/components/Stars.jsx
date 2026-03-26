//Recupera valore di rating dal prodotto e stampa 5 stelline corrispondenti al voto 

const Stars = ({value})=>{

        const filled = Math.round(value);                               //quante stelle devo riempire (arrotondo all'intero: 1.4->1, 1.5->2)

        return(
            Array.from({ length:5},(_,i) =>                             //creo array per ciclare 5 volte (0,1,2,3,4)
            <span   key={i}
            //className={"rating "+(i < filled ?"yellow":"")}
            >{i < filled ? "★" : "☆"}                 
            </span>
            )
        ) 
        
}


export default Stars; 