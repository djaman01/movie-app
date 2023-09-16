import { Link } from "react-router-dom";

export default function ListButton() {


  return (
    <>

      <div div className="buttons-div">
        <button> 
          <Link to="/Movies"> Go to Movie List</Link>
        </button>
      </div>

    </>
  );
}