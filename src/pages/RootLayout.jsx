import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  <>
    <Header>
      <Link to="/" className="logo"></Link>
      <nav>
        <Link to="/" className="logo">
          Início
        </Link>
        <Link to="/items" className="logo">
          Items
        </Link>
      </nav>
    </Header>
    <div>
        <Outlet />
    </div>
    <footer>footer</footer>
  </>;
};
