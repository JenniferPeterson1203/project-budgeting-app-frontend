import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const TransactionForm = ({ setTransactions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    category: "",
  });

  function handleCancel() {
    navigate("/");
  }
  function handleChange(e) {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  }

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      };
      console.log("test");
      fetch(`http://localhost:4444/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message) alert("All Inputs Must Be Filled");
          else {
            setTransactions(data.transactions);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } else {
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
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4444/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransaction(data.transaction));
    }
  }, [id]);

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
        <label htmlFor="category">
          Category:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={transaction.category}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
};

export default TransactionForm;
