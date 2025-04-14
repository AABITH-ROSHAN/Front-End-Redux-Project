import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, editCustomer } from './slices/CustomerSlice';

function CustomerView() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);

  const handleDelete = (index) => {
    dispatch(deleteCustomer(index));
  };

  const handleEdit = (index) => {
    const updatedName = prompt("Edit customer name:", customer[index]);
    if (updatedName && updatedName.trim() !== "") {
      dispatch(editCustomer({ index, editname: updatedName.trim() }));
    }
  };

  return (
    <div className="container">
      <h1>Customer List</h1>
      <ul>
        {customer.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerView;
