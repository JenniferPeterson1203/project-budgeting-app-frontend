import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TransactionForm = ({ setTransactions }) => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  function handleChange(e) {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  }

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };
    fetch("http://localhost:4444/transactions", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) alert("All Inputs Must Be Filled");
        else {
          setTransactions(data.transactions);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Enter transaction details below</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">
          Date:
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={transaction.date}
          />
        </label>

        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={transaction.name}
          />
        </label>

        <label htmlFor="amount">
          Amount:
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
          />
        </label>

        <label htmlFor="from">
          From:
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={transaction.from}
          />
        </label>
        <button type="submit">Create New Item</button>
      </form>
    </>
  );
};

export default TransactionForm;
