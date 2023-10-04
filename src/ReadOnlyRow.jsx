import React from "react";

const ReadOnlyRow = ({ item, index, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
          <button type="button" onClick={() => handleEditClick(index, item)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(index)}>Delete</button>
          
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
