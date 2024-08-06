import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionTable from "./components/TransactionTable";
import Footer from "./components/Footer";

// App component
function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch transactions on mount
  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch transactions. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    fetch("http://localhost:8000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions((prevTransactions) => [...prevTransactions, data]);
        alert("Transaction Added Successfully");
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
        setError("Failed to add transaction. Please try again later.");
      });
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = (transactionId) => {
    fetch(`http://localhost:8000/transactions/${transactionId}`, {
      method: "DELETE",
    })
      .then(() => {
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => transaction.id !== transactionId
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
        setError("Failed to delete transaction. Please try again later.");
      });
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <br />
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading transactions...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TransactionTable
          transactions={filteredTransactions}
          onDelete={handleDeleteTransaction}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
