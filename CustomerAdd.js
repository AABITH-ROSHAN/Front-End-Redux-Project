import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from './slices/CustomerSlice';

function CustomerAdd() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (input.trim() !== '') {
      dispatch(addCustomer(input.trim()));
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1>Add Customer</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter your name"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add" onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default CustomerAdd;
