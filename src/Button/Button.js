import { useState } from "react";

export default function Button() {

const [showDiv, setShowDiv] = useState (false);

const handleAdd = () => setShowDiv(true);

const handleRemove= () => setShowDiv(false);


return (
  <>
  <button onClick={handleAdd}> Add </button>

  <button onClick = {handleRemove}> Remove </button>

  <div>
    {(showDiv==true) && <p>Movie added to favorite</p>}
  </div>
  </>
);
}