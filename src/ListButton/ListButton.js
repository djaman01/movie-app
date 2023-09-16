import { Link } from "react-router-dom";
import './listButton.css'

export default function ListButton() {


  return (
    <>

      <div className="buttons-div">
        <button className="list-button"> 
          <Link to="/Movies" className="link-style"> Go to Movie List</Link>
        </button>
      </div>

    </>
  );
}