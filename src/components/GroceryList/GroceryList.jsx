import React  from 'react';
import styled from 'styled-components';

  function GroceryList() {
    const [newItem, setNewItem] = React.useState("");
    const [items, setItems] = React.useState([]);
    const id = React.useId();

    const handleAdd  = function(e) {
      e.preventDefault();
      if (!newItem.trim()) return;
      setItems([...items, newItem]);
      setNewItem("");
    }

    const handleRemove = function(indexToRemove) {
      const updatedItems = items.filter((_, index) => index !== indexToRemove);
      setItems(updatedItems);
    }

    return (
      <>
        <form onSubmit={handleAdd}>
          <input 
            type='text'
            value={newItem}
            onChange={(e) => (
              setNewItem(e.target.value)
            )}
            placeholder='Enter grocery item'
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleRemove(index)}>❌</button>
            </li>
          ))}
        </ul>
      </>
    );
  }

export default GroceryList;