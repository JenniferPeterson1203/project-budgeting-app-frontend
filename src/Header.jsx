import { Link } from "react-router-dom";

const handleClick = () => {
  console.log("I have been clicked");
};

const Header = () => {
  return (
    <div>
      <header>
        <h1>Budgeting App</h1>
      </header>
    </div>
  );
};

export default Header;
