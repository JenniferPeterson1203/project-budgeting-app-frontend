import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {};
  return (
    <div>
      <header>
        <Link to={`/`}>
          <h1>Budgeting App</h1>
        </Link>
        <Link to={`/transactions/new`}>
          <button onClick={handleClick}>New Transaction</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
