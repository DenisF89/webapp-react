const Modal = ({isVisible,toDelete,hide,deleteR})=>{

    console.log(toDelete);

return(<>
            {
                isVisible && toDelete?.name &&

                <div className="overlay">

                    <div className="confirm-modal">
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-2" onClick={hide} ></button>

                        <h3 className="m-title">Conferma eliminazione</h3>

                        <p className="m-text">Stai per eliminare la recensione di <b>{toDelete.name}</b>.</p>

                        <p className="m-text">Sei sicuro di voler continuare?</p>

                        <div className="m-buttons">
                            <button className="m-btn m-cancel" onClick={hide}>Annulla</button>
                            <button className="m-btn m-delete" onClick={deleteR}>Elimina</button>
                        </div>
                    </div>
                </div>

                
            }
        </>
)

}
export default Modal;