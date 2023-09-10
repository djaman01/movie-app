import { useState } from "react";
import './buttons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export default function Buttons() {

  const [showDiv, setShowDiv] = useState(false);

  //Ajout de 2 event handler differents: 1 pour quand on click sur add et 1 pour quand on click sur remove
  const handleAdd = () => setShowDiv(true);

  const handleRemove = () => setShowDiv(false);


  return (
    <>
      <div div className="buttons-div">
        <button onClick={handleAdd}> Add </button>
        <button onClick={handleRemove}> Remove </button>
      </div>


      <div className="added-notice" style= {{color: "green", fontWeight: "bold"}}>
        {(showDiv == true) && <span><FontAwesomeIcon icon={faCheck} /> Movie added to favorite</span>}
      </div>

    </>
  );
}