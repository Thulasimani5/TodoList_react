import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    } else {
      alert("Error creating item without a name");
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div id="w">
        <input
          id="inp"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd} id="bt">
          ADD
        </button>
      </div>
      <ul id="ul">
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
