import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const TransactionDetailsPage = ({ humanReadableDate }) => {
  // this is for accessing a particular transaction by the ID number
  const { id } = useParams();
  const [transaction, setTransaction] = useState();
  const navigate = useNavigate();

  // cancel button function
  function handleHome() {
    navigate("/");
  }

  useEffect(() => {
    fetch(`${API}transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data.transaction));
  }, [id]);

  if (!transaction) return null;

  const { name, amount, category, from, date } = transaction;
  return (
    <div className="details">
      <h2>Transaction Details</h2>
      <p>Name: {name}</p>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
      <p>From: {from}</p>
      <p> Date: {humanReadableDate(date)}</p>
      <button onClick={() => navigate(`/transactions/edit/${id}`)}>Edit</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default TransactionDetailsPage;
