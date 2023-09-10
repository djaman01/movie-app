import Filter from './Filter/Filter';
import './App.css';
import Header from './Header/Header';

function App() {

  return (
    //!! Ne pas faire display:grid; sur .all-page, car ca va mettre en colonnes chaque component et non 1 component en colonnes
    //Si on veut faire un grid sur un component, il faut le faire sur le <div> du component qui contient les elements qu'on veut disposés en grid
    <div className="all-page">
      <Header/>
      <Filter />
    </div>
  )

}

export default App;
