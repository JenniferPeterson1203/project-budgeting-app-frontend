import { Link } from "react-router-dom";

const Home = ({ transactions, humanReadableDate }) => {
  // console.log(transactions.map((transaction) => transaction.item_name));

  // function for the text colors
  const color = (total) => {
    if (total > 0) {
      return "green";
    } else {
      return "red";
    }
  };
  // function for the total
  const total = transactions
    .map((transaction) => +transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h2>Bank Account Total: {total} </h2>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{humanReadableDate(transaction.date)}</p>
          {/* I think i can nest the item name bnetween a link tag for the details page */}
          <Link to={`/transactions/${transaction.id}`}>
            <p>{transaction.name}</p>
          </Link>
          <p>{transaction.amount} </p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
