import React, { useState } from "react";
import './App.css';

const mockData = {
  milk: [
    { store: "Walmart", price: "$3.99" },
    { store: "Loblaws", price: "$4.29" },
    { store: "No Frills", price: "$3.89" }
  ],
  bread: [
    { store: "Walmart", price: "$2.49" },
    { store: "Loblaws", price: "$2.99" },
    { store: "No Frills", price: "$2.79" }
  ]
};

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const item = query.toLowerCase();
    setResults(mockData[item] || []);
  };

  return (
    <div className="amazon-container">
      <header className="header">
        <h1>Grocery Price Comparison</h1>
      </header>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for grocery items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {results.length > 0 && (
        <div className="results-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Store</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{item.store}</td>
                  <td className="price">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
