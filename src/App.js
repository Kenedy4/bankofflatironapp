import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AddTransactionForm from "./components/AddTransactionForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AddTransactionForm />
      <Footer />
    </div>
  );
}

export default App;
