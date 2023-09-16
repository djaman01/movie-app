import { Link } from "react-router-dom";

import '../ListButton/listButton.css'



export default function HomeButton() {
  return (
    <>

      <div className="buttons-div">
        <button className="list-button"> 
          <Link to="/" className="link-style"> Home </Link>
        </button>
      </div>

    </>
   
  )
}


