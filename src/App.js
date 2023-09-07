import MovieList from './MovieList/MovieList'
import Filter from './Filter/Filter';
import './App.css';

function App() {

  return (
    <div className="all-page">
      <Filter />
      <MovieList />
    </div>
  )

}

export default App;
