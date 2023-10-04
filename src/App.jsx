import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "./data";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function App() {
  const [tableData, setTableData] = useState(data);

  //  For form creation to enter data into the table
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newFormData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    const newData = [...tableData, newFormData];

    setTableData(newData);
  };

  //                  Edit table
  const [editRowIndex, setEditRowIndex] = useState(null);

  const handleEditClick = (index, rowData) => {
    setEditRowIndex(index);

    const currentFormData = {
      name: rowData.name,
      email: rowData.email,
      phone: rowData.phone,
    };

    setEditRowData(currentFormData);
  };

  // Managing the edit
  const [editRowData, setEditRowData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEditRowChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setEditRowData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //            Saving the Data
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedData = {
      name: editRowData.name,
      email: editRowData.email,
      phone: editRowData.phone,
    };

    const currentIndex = editRowIndex;

    const newData = [...tableData];

    newData[currentIndex] = editedData;

    setTableData(newData);
    setEditRowIndex(null);
  };

  //            Cancel Button
  const handleCancelClick = (event) => {
    event.preventDefault();
    setEditRowIndex(null);
  };

  //            Delete feature
  const handleDeleteClick = ( index) => {   

    const newData = [...tableData];
    //Delete the data at the index
    newData.splice(index, 1);

    setTableData(newData);
  };

  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <>
                  {editRowIndex === index ? (
                    <EditableRow
                      index={index}
                      editRowData={editRowData}
                      handleEditRowChange={handleEditRowChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      item={item}
                      index={index}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleFormChange} />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={handleFormChange} />

        <label htmlFor="phone">Phone: </label>
        <input type="phone" name="phone" onChange={handleFormChange} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
