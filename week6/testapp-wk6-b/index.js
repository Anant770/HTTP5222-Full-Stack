//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let moviesList = await trakt.getTrendingMovies();
  console.log(moviesList);
  response.render("index", { title: "Movies", movies: moviesList });
});
app.get("/movie/:id", async (request, response) => {
  //to get the value of :id (a placeholder for a dynamic value), use request.params.id
  let studioList = await trakt.getMovieStudios(request.params.id);
  response.render("studios", { title: "Movie Studios", studios: studioList })
})
app.get("/shows/watched", async (request, response) => {
  let showList = await trakt.getTopMovie();
  response.render("top", { title: "top15shows", shows: showList });
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


