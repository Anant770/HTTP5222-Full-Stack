import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main id="main">
        <h1>Test movie </h1>
        <MovieList />
      </main>
      <Footer />
    </>
  )
}

export default App
