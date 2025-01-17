import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import TransactionForm from "./TransactionForm";
import TransactionIndex from "./TransactionIndex";
import TransactionDetailsPage from "./TransactionDetailsPage";
const API = import.meta.env.VITE_BASE_URL;
const App = () => {
  const [transactions, setTransactions] = useState([]);

  // useEffect for the fecth call
  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  // function for the date
  const humanReadableDate = (dateString) => {
    const options = { month: "long", day: "numeric" };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Header />
      {/* does this make sense? */}

      <Routes>
        <Route
          path="/"
          element={
            <TransactionIndex
              setTransactions={setTransactions}
              transactions={transactions}
              humanReadableDate={humanReadableDate}
            />
          }
        />
        <Route
          path="/transactions/:id"
          element={
            <TransactionDetailsPage humanReadableDate={humanReadableDate} />
          }
        ></Route>
        <Route
          path="/transactions/edit/:id"
          element={<TransactionForm setTransactions={setTransactions} />}
        ></Route>
        <Route
          path="/transactions/new"
          element={<TransactionForm setTransactions={setTransactions} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
