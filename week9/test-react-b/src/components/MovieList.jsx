import Movie from "./Movie"
import {useState} from "react"
import "./MovieList.css"

let moviesArray = [
  {
    title: "The King's Man",
    year: "2021"
  },
  {
    title: "The Dark Knight",
    year: "2008"
  }
]

export default function MovieList() {
  const [moviesList, setMoviesList] = useState(moviesArray);

  function handleForm(e) {
    e.preventDefault(); //prevent actual page refresh on submission
    console.log(e.target.title.value);
    let newMovie = {
      title: e.target.title.value,
      year: e.target.year.value
    };
    //Because we do not want to directly modify the moviesList array (a state variable), we need to use the array spread syntax.
    //Below, we are creating an entirely new array using the square brackets. Within the array, we use the spread syntax (...) to "print" out all of the values of the moviesList array then append newMovie after that.
    setMoviesList(
      [
        ...moviesList,
        newMovie
      ]
    );
  }
  return (
    <section className="movies">
      <h2>Movies</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="e.g. Turning Red" />
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" placeholder="e.g. 2022" />
        <button type="submit">Add movie</button>
      </form>
      {
        moviesList.map((m) => (
          <Movie 
            title={m.title} 
            year={m.year} 
            key={m.title + m.year} 
          />
        ))
      }
    </section>
  )
}