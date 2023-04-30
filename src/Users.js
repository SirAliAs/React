import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [getData, setGetData] = useState(false);
  const [userID, setUserID] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetch("https://siraliasreact-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.entries(data));
        setUsers(Object.entries(data));
      });
  }, [getData]);

  const removeHandler = async () => {
   await fetch(
      `https://siraliasreact-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => console.log(response));
    console.log(userID);
    setShowDeleteModal(false);
    setGetData ( prev => !prev)
  };

  return (
    <>
      <Table striped bordered hover variant="dark" className=" container mt-3 ">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user[0]}>
              <td>{index + 1}</td>
              <td>{user[1].firstName}</td>
              <td>{user[1].lastName}</td>
              <td>{user[1].email}</td>
              <td className="  flex justify-evenly space-y-2 space-x-1 ">
                <AiFillDelete
                  onClick={() => {
                    setShowDeleteModal(true);
                    setUserID(user[0]);
                  }}
                  className="cursor-pointer"
                />
                <AiFillEdit className="cursor-pointer relative bottom-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        show={showDeleteModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Confirmation ?!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>
          <p>" Are You Sure You Want This User To Be Deleted?! "</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowDeleteModal(false)}>No, Cancel</Button>
          <Button onClick={() => removeHandler()}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
