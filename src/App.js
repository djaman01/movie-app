import MovieList from './MovieList/MovieList'
import Filter from './Filter/Filter';
import './App.css';

function App() {

  return (
    //Si on fait display:grid; sur .all-page, ca va mettre en colonnes chaque component et non 1 component en colonnes
    //Si on veut faire un grid sur un component, il faut le faire sur le <div> du component qui contient les elements qu'on veut disposés en grid
    <div className="all-page">
      <Filter />
    </div>
  )

}

export default App;
