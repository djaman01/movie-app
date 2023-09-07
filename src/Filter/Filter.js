import {useState} from 'react'

export default function Filter() {

  const [movie, setMovie] = useState('');
  
  //Vu qu'on va mettre cette variable dans le onChange de l'input; on cible la value de l'input
  const filteredMovie = (e) => setMovie(e.target.value);


  return (
  //Comme on veut donner à l'input une value qui change, on va utiliser le hook useState
  //on donne à l'input la valeur du state + quand on change l'input, on change la valeur
  <input value={movie} type="text" placeholder="Filter" onChange={filteredMovie}/> 
  );

}
