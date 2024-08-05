import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionTable from "./components/TransactionTable";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch transactions on mount
  useEffect(() => {
    console.log("Fetching transactions...");
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setTransactions(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    console.log("Adding transaction:", newTransaction);
    fetch("http://localhost:8000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Transaction added:", data);
        setTransactions((prevTransactions) => [...prevTransactions, data]);
        alert("Transaction Added Successfully");
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = (transactionId) => {
    console.log("Deleting transaction:", transactionId);
    fetch(`http://localhost:8000/transactions/${transactionId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Transaction deleted:", transactionId);
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => transaction.id !== transactionId
          )
        );
      })
      .catch((error) => console.error("Error deleting transaction:", error));
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) => {
    const isMatch = transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    console.log(`Filtering: ${transaction.description} - Match: ${isMatch}`);
    return isMatch;
  });

  console.log("Filtered Transactions:", filteredTransactions);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <br />
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable
        transactions={filteredTransactions}
        onDelete={handleDeleteTransaction}
      />
      <Footer />
    </div>
  );
}

export default App;
