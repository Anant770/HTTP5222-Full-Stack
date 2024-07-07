import Movie from "./Movie"
import { useState } from "react"

let movieArray = [
    {
        title: "The King's Man",
        year: "2021"
    },
    {
        title: "The dark Knight",
        year: "2008"
    }
]

export default function MovieList(){
    const[movieList, setMovieList] = useState(movieArray);

    function handleForm(e){
        e.preventDefault();
        console.log(e.target.title.value);
        let newMovie = {
            title: e.target.title.value,
            year: e.target.year.value
        };
        setMovieList(
            [
                ...movieList,
                newMovie
            ]
        );
    }
    return (
        <section>
            <h2>Movies</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="e.g. Turning Red" />
                <label htmlFor="Year">Year:</label>
                <input type="text" id="Year" name="Year" placeholder="e.g. 2022" />
                <button type="submit">Add Movie</button>

            </form>
            {
                movieList.map((m) =>(
                    <Movie title={m.title} year={m.year} key={m.title + m.year} />
                ))
            }
        </section>
    )

}