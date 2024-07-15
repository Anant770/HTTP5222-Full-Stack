import Nav from "./Nav"
export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">Test site</a>
      </h2>
      <Nav />
    </header>
  );
}