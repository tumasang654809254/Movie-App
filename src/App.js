import './App.css';
import { useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=81022efc';

function App() {
  //Usestate function to pass the data we collected from our API to down to the movies container

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }


  useEffect(()=>{
   searchMovies('Spiderman');
  },  []);

  return (
    <div className='app'>
       <h1>TUMASANG'S MOVIE APP</h1>

  <div className='search'>
      <input
      placeholder='search movie'
      value={searchTerm}
      onChange={(e) =>{
          setsearchTerm(e.target.value)
      }}/>

      <img 
      src={searchIcon} 
      alt="search" 
      onClick={()=>{
          searchMovies(searchTerm);
      }} />

  </div>

       {movies?.length > 0 
       ?(
            <div className='container'>

           {movies.map((movie)=>(
            <MovieCard  movie ={movie} />
           ))}
            </div>
       ):(
        
        <h1>No movies found</h1>
       )
      }

    </div>
  );
}

export default  App;
