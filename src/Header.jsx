import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const handleClick = () => {};
  return (
    <div className="title-container">
      <header>
        <Link to={`/`}>
          <h1 className="title">Eazy Budgets</h1>
        </Link>
        <Link to={`/transactions/new`}>
          <button className="new-trans-btn" onClick={handleClick}>
            New Transaction
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
