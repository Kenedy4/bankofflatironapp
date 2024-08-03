import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TransactionTable from "./components/TransactionTable";
import AddTransactionForm from "./components/AddTransactionForm";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  // const [setHeader] = useState(true);
  // const [setNavbar] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  // const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8001/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* <Header /> */}
      <Header setSearchTerm={setSearchTerm} />
      <NavBar />
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
      <Footer />
    </div>
  );
}

export default App;
