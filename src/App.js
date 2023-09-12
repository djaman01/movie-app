import Filter from './Filter/Filter';
import './App.css';
import Header from './Header/Header';
import NewButton from './NewButton/NewButton';
import NoPage from './NoPage/NoPage';
import Home from './Home/Home';
import Main from './Main/Main';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from './Links/Links';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="/" est obligé car c'est la page par défaut qui va s'ouvrir */}
          <Route path="/" element={<Home />} />
          <Route path="Movies" element={<Main />} />
          <Route path='Links' element={<Links />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {/* //!! Ne pas faire display:grid; sur .all-page, car ca va mettre en colonnes chaque component et non 1 component en colonnes
    //Si on veut faire un grid sur un component, il faut le faire sur le <div> du component qui contient les elements qu'on veut disposés en grid */}
      {/* <div className="all-page">
        <Header />
        <Filter />
        <NewButton />
      </div> */}
    </>
  )

}

export default App;
