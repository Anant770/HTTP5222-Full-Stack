import {Link} from "react-router-dom"
import UselessFact from "../components/UselessFact"
import {useEffect} from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Home | Test site"
  }, []);

  return(
    <main id="main">
      <h1>Hello, world!</h1>
      <p>This is my home page content.</p>
      <Link to="/movies">A link to the movies page</Link>
      <UselessFact />
    </main>
  )
}