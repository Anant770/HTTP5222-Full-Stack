import Menu from "./Menu";

export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">SuperMart</a>
      </h2>
      <Menu/>
    </header>
  );
}