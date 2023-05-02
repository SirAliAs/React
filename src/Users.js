import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [getData, setGetData] = useState(false);
  const [userID, setUserID] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://siraliasreact-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.entries(data));
        setUsers(Object.entries(data));
      });
  }, [getData]);

  useEffect(() => {
    let mainUserInfo = users.find((user) => user[0] == userID);
    if (mainUserInfo) {
      setFirstName(mainUserInfo[1].firstName);
      setLastName(mainUserInfo[1].lastName);
      setEmail(mainUserInfo[1].email);
    }
  }, [userID]);

  const removeHandler = async () => {
    await fetch(
      `https://siraliasreact-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => console.log(response));
    console.log(userID);
    setShowDeleteModal(false);
    // ---------------> For Real Time Updating <---------------
    setGetData((prev) => !prev);
  };

  const editHandler = async () => {
    let newUserInfos = {
      firstName,
      lastName,
      email,
    };

    await fetch(
      `https://siraliasreact-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newUserInfos),
      }
    ).then((response) => console.log(response));
    console.log(newUserInfos);
    setShowEditModal(false);
    // ---------------> For Real Time Updating <---------------
    setGetData((prev) => !prev);
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
                <AiFillEdit
                  onClick={() => {
                    setShowEditModal(true);
                    setUserID(user[0]);
                  }}
                  className="cursor-pointer relative bottom-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* ---------------> Delete Modal <--------------- */}
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
      {/* ---------------> Edit Modal <--------------- */}

      <Modal
        show={showEditModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User Info ?!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              onChange={(event) => setFirstName(event.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>First name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="New FirstName"
                value={firstName}
              />
            </Form.Group>
            <Form.Group
              onChange={(event) => setLastName(event.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Last name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="New LastName"
                value={lastName}
              />
            </Form.Group>
            <Form.Group
              onChange={(event) => setEmail(event.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                placeholder="New Email"
                value={email}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button onClick={() => editHandler()}>Yes, Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
