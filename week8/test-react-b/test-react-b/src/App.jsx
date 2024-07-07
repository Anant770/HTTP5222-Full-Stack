import Header from "./components/Header"
import Footer from "./components/Footer"
//import Movie from "./components/Movie"
import MovieList from "./components/MovieList"
//import './App.css'

function App() {
  //comments out here don't need curly brackets because this is just regular JS out here (JSX is in the return statement)
  return (
    <>
      {/* empty tags like above and below define a fragment to allow you to have a root element which doesn't render to an actual element when compiling */}
      {/* anything in the return() statement is JSX so write your comments within the root element with curly brackets */}
      {/* comments which look like a stream comment within curly brackets are JSX comments */}
      <Header />
      <main id="main">
        <h1>Test movie component</h1>
        {/* <Movie title="Turning Red" year="2022" /> */}
        <MovieList />
      </main>
      <Footer />
    </>
  )
}

export default App
