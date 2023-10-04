import React from "react";

const EditableRow = ({ index, editRowData, handleEditRowChange, handleCancelClick }) => {

   
  return (
    <>
      <tr key={index}>
        <td>
          <input
            type="text"
            name="name"
            value={editRowData.name}
            onChange={handleEditRowChange}
          />
        </td>
        <td>
          <input
            type="email"
            name="email"
            value={editRowData.email}
            onChange={handleEditRowChange}
          />
        </td>
        <td>
          <input
            type="tel"
            name="phone"
            value={editRowData.phone}
            onChange={handleEditRowChange}
          />
        </td>
        <td><button type="submit">Save</button>
        <button onClick={handleCancelClick} >Cancel</button></td>
      </tr>
    </>
  );
};

export default EditableRow;
