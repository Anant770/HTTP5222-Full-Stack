const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String
});
const Movie = mongoose.model("Movie", MovieSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all Movies from the Movies collection
async function getMovies() {
  await connect();
  return await Movie.find({}).sort({age: 1}); //return array for find all
}
//Initialize Movies collection with some data.
async function initializeMovies() {
  await connect();
  const movieList = [
    {
      title: "kimi no nawa",
      year: 2020,
      rating: "PG-13"
      
    },
    {
      title: "Raw",
      year: 2021,
      rating: "R"
    },
    {
      title: "Haikyuu",
      year: 2024,
      rating: "G"
    }
  ];
  await Movie.insertMany(movieList);
}

//Function to update Movie rating by name.
async function updateMovieRating(title, newRating){
  await connect();
  await Movie.updateOne(
    { title: title },
    { rating: newRating }
  );
}

//Function to add a movie to the movies collection
async function addMovie(movieTitle, movieYear, movieRating) {
  let newMovie = new Movie({
    title: movieTitle,
    year: movieYear,
    rating: movieRating,
  });
  newMovie.save(); //this is the line which actually saves newMovie to the DB
}

//function to deleteMovies by rating
async function deleteMoviesByRating(rating) {
  await connect();
  await Movie.deleteMany({
    rating:rating
  });
}

module.exports = {
  getMovies,
  initializeMovies,
  addMovie,
  updateMovieRating,
  deleteMoviesByRating
}