import { Link } from "react-router-dom";

import '../ListButton/listButton.css'



export default function HomeButton() {
  return (
    <>

      <div className="buttons-div">
        <Link to="/" className="link-style"> 
          <button className="list-button" style={{backgroundColor: "grey"}}> Home </button>
        </Link>
      </div>

    </>
   
  )
}
