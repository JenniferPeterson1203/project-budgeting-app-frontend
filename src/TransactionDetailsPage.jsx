import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TransactionDetailsPage = ({ humanReadableDate }) => {
  // this is for accessing a particular transaction by the ID number
  const { id } = useParams();
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    fetch(`http://localhost:4444/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data.transaction));
  }, []);

  // console.log(transaction.name);

  if (!transaction) return null;
  return (
    <div>
      <h2>Transaction Details</h2>
      <p>Name: {transaction.name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Catehgory: {transaction.category}</p>
      <p>From: {transaction.from}</p>
      <p> Date: {humanReadableDate(transaction.date)}</p>
    </div>
  );
};

export default TransactionDetailsPage;
