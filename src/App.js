import React, { useState } from "react";

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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Grocery Price Comparison</h1>
      <input
        type="text"
        placeholder="Enter grocery item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
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
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
