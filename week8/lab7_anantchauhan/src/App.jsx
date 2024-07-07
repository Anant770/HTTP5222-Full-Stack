import Header from "./components/Header"
import Footer from "./components/Footer"
import MovieList from "./components/GroceryList"

function App() {
  //comments out here don't need curly brackets because this is just regular JS out here (JSX is in the return statement)
  return (
    <>
      
      <Header />
      <main id="main">
        <h1>Grocery</h1>
        <MovieList />
      </main>
      <Footer />
    </>
  )
}

export default App
