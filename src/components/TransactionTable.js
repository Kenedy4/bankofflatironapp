import React from "react";

function TransactionTable({ transactions, onDelete }) {
  return (
    <div className="CustomerData">
      <div className="container">
        <h2 id="data">Updated Customer Details</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>
                  <button onClick={() => onDelete(transaction.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
