import { Link } from "react-router-dom";
import './listButton.css'

export default function ListButton() {


  return (
    <>
      <div className="buttons-div">
        <Link to="/Movies" className="link-style">
          <button className="list-button" > Movie List </button>
        </Link>
      </div>


    </>
  );
}

