import { Link } from "react-router-dom";
import { useState } from "react";
import "./TransactionIndex.css";
// import { useParams } from "react-router-dom";
const TransactionIndex = ({
  transactions,
  setTransactions,
  humanReadableDate,
}) => {
  // const [totalBalance, setTotalBalance] = useState(0);

  // function for the total
  const total = transactions
    .map((transaction) => +transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);

  // const total = -90;
  let totalColor = "";
  if (total < 0) {
    totalColor = "red";
  } else if (total > 100) {
    totalColor = "green";
  } else {
    totalColor = "yellow";
  }

  const handleDelete = (id) => {
    const options = {
      method: "DELETE",
    };
    fetch(`http://localhost:4444/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  };

  if (!transactions.length) return null;
  return (
    <div>
      <h2>
        Bank Account Total:
        <span className={`${totalColor}`}>{total}</span>
      </h2>
      <div className="transactions">
        {transactions.map(({ id, date, name, amount }) => (
          <div className="card" key={id}>
            <p>{humanReadableDate(date)}</p>
            {/* I think i can nest the item name between a link tag for the details page */}
            <Link to={`/transactions/${id}`}>
              <p>{name}</p>
            </Link>
            <p>{amount} </p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionIndex;
