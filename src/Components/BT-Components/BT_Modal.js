import React from "react";
import { Button, Modal } from "react-bootstrap";

function BT_Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = (event) => {
    event.preventDefault();
    console.log("form Data", formData);
    setShowModal(false);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="username"
                name="username"
                placeholder="Enter Username"
                value={formData.name}
                onChange={handleFormChange}
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                name="email"
                placeholder="Enter Email"
                className="form-control"
              ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BT_Modal;
