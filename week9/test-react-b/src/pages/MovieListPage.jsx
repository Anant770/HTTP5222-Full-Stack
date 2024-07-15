import MovieList from "../components/MovieList"
import {useEffect} from "react"

export default function MovieListPage() {
  useEffect(() => {
    document.title = "Movies | Test site"
  }, []);
  return(
    <main id="main">
      <h1>Movies</h1>
      <MovieList />
    </main>
  )
}