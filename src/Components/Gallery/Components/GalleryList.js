import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, fetchUsers, updateUser } from "../Store";
import { Button, Modal } from "react-bootstrap";

const GalleryList = () => {
  // Declaration
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.user;
  });

  const [showModal, setShowModal] = React.useState(false);

  const initialState = {
    name: "",
  };
  const errorInitialState = {
    error: "",
  };
  const [formData, setFormData] = React.useState(initialState);
  const [formError, setFormError] = React.useState(errorInitialState);
  const [modalState, setModalState] = React.useState("");

  // Declaration
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //   Functionality

  const userHandleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const renderListing = data.map((v, i) => {
    return (
      <Fragment key={i}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#flush-collapseOne" + i}
                aria-expanded="false"
                aria-controls={"flush-collapseOne" + i}
              >
                <i
                  className="fa fa-solid fa-xmark fa-spin text-danger"
                  onClick={() => userHandleDelete(v?.id)}
                ></i>
                <i
                  className="fa fa-edit fa-spin fa-xmark text-success mx-2"
                  onClick={() => handleOpenModal(v?.id)}
                ></i>
                &nbsp; &nbsp;
                {v?.name}
              </button>
            </h2>
            <div
              id={"flush-collapseOne" + i}
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {/* 2nd body */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample2"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse2"
                        data-bs-target={"#flush-collapseOne" + (i + 1)}
                        aria-expanded="false"
                        aria-controls={"flush-collapseOne" + (i + 1)}
                      >
                        <i className="fa fa-solid fa-xmark fa-spin text-danger"></i>{" "}
                        &nbsp; &nbsp; Albums (i + 1)
                      </button>
                    </h2>
                    <div
                      id={"flush-collapseOne" + (i + 1)}
                      className="accordion-collapse collapse2"
                      data-bs-parent="#accordionFlushExample2"
                    >
                      <div className="accordion-body">
                        {/*  3rd body */}

                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample3"
                        >
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse3"
                                data-bs-target={"#flush-collapseOne" + (i + 2)}
                                aria-expanded="false"
                                aria-controls={"flush-collapseOne" + (i + 2)}
                              >
                                <i className="fa fa-solid fa-xmark fa-spin text-danger"></i>{" "}
                                &nbsp; &nbsp; (i + 2)
                              </button>
                            </h2>
                            <div
                              id={"flush-collapseOne" + (i + 2)}
                              className="accordion-collapse collapse3"
                              data-bs-parent="#accordionFlushExample3"
                            >
                              <div className="accordion-body">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the{" "}
                                <code>.accordion-flush</code> className. This is
                                the first item's accordion body.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });

  // Functionality

  // Modal

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setFormData(initialState);
    setFormError(errorInitialState);
    setShowModal(false);
  };

  const handleOpenModal = (event) => {
    setModalState(event);
    let findData = data?.find((v) => v.id == event);
    if (findData) {
      setFormData(findData);
    } else {
      setFormData(initialState);
    }

    setFormError(errorInitialState);
    setShowModal(true);
  };

  // Modal

  const handleUserAdd = () => {
    if (modalState == "addUser") {
      triggerUserThunk("add");
    }

    if (modalState > 0) {
      triggerUserThunk("update");
    }
  };

  const triggerUserThunk = (event) => {
    let checkDuplicacy = data.findIndex((v) => v.name == formData.name);
    if (checkDuplicacy == -1) {
      if (event == "add") {
        dispatch(addUser({ name: formData.name }));
      }

      if (event == "update") {
        dispatch(updateUser({ id: formData.id, name: formData.name }));
      }
    

      handleCloseModal();
    } else {
      setFormError((data) => ({
        ...data,
        error: "Duplicate Entry",
      }));

      setTimeout(() => {
        setFormError(errorInitialState);
      }, 1000);
    }
  };

  return (
    <Fragment>
      <h4>Listing</h4> <br></br>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleOpenModal("addUser");
          }}
        >
          <i className="fa fa-plus" style={{ color: "#02f276" }}></i> &nbsp; Add
          user
        </button>

        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            handleOpenModal("addAlbum");
          }}
        >
          <i className="fa fa-plus" style={{ color: "#02f276" }}></i> &nbsp; Add
          Albums
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            handleOpenModal("addPhotos");
          }}
        >
          <i className="fa fa-plus" style={{ color: "#02f276" }}></i> &nbsp; Add
          Photos
        </button>
      </div>{" "}
      <br></br>
      <div>
        {isLoading ? (
          <i
            className="fa fa-duotone fa-spinner fa-spin fa-4x d-flex justify-content-center"
            style={{ color: "#02f276" }}
          ></i>
        ) : error ? (
          "Something Went wrong"
        ) : renderListing?.length > 0 ? (
          renderListing
        ) : (
          "No data found!"
        )}
      </div>
      {/* Modal Render */}
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Username"
                  value={formData.name}
                  onChange={(event) => handleFormChange(event)}
                  className="form-control"
                ></input>

                <div>
                  <span className="text-danger">
                    {formError.error ? formError.error : ""}
                  </span>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUserAdd}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Modal Render */}
    </Fragment>
  );
};

export default GalleryList;
