import React, { useEffect, useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import books from "../data";
import { addNew, flag, getCheck, setSubgenre } from "../redux/actions";
import Modal from "react-modal";
import fakeFetch from "fake-browser-fetch";

Modal.setAppElement("#root");

const InfoInput = () => {
  const flagmark = useSelector((state) => state.flag.flag);
  const history = useHistory();
  const dispatch = useDispatch();
  const check = useSelector((state) => state.check.check);
  const bookid = useSelector((state) => state.active.active);
  const [isTrue, setIsTrue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const initialState = {
    title: "",
    author: "Author",
    isbn: "",
    publisher: "Publisher",
    date: "",
    numofpages: "",
    format: "Format",
    edition: "",
    language: "",
    desc: "",
  };

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    books.map(
      (book) =>
        bookid === book.id &&
        book.subgenres.map((book) => setIsTrue(book.isDescriptionRequired))
    );
  }, [bookid]);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    dispatch(flag(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let content = values;

    fakeFetch([
      {
        request: "/api/someurl",
        response: new Response(JSON.stringify(content)),
        delay: 1000,
      },
    ]);

    fetch("/api/someurl")
      .then((res) => res.json())
      .then((data) => console.log(data));

    setValues(initialState);
    if (values.desc.length > 0) {
      setIsTrue(false);
    }
    if (values.desc.length > 0) {
      dispatch(getCheck(false));
    }
    dispatch(flag(false));
  };

  const handleBack = () => {
    history.goBack();
    dispatch(addNew(false));
    dispatch(setSubgenre(""));
  };

  const handleModal = () => {
    setIsOpen(true);
  };

  return (
    <form className="infoinput" onSubmit={handleSubmit}>
      <Form.Label>Book title</Form.Label>
      <InputGroup className="mb-1 rounded">
        <FormControl
          placeholder="Book name"
          label="Book name"
          name="title"
          value={values.title}
          onChange={handleInput}
          aria-describedby="basic-addon2"
          className="rounded inputStyle"
        />
      </InputGroup>
      <Form.Label>Author</Form.Label>
      <Form.Control
        as="select"
        className="rounded inputStyle"
        name="author"
        value={values.author}
        onChange={handleInput}
      >
        <option>Author</option>
      </Form.Control>

      <Form.Label className="pt-2">ISBN</Form.Label>
      <InputGroup className="mb-1 rounded">
        <FormControl
          placeholder="ISBN"
          label="ISBN"
          name="isbn"
          onChange={handleInput}
          value={values.isbn}
          aria-describedby="basic-addon2"
          className="rounded inputStyle"
        />
      </InputGroup>

      <Form.Label className="pt-2">Publisher</Form.Label>
      <Form.Control
        as="select"
        className="rounded inputStyle"
        name="publisher"
        onChange={handleInput}
        value={values.publisher}
      >
        <option>Publisher</option>
      </Form.Control>
      <Form.Label className="pt-2">Date Published</Form.Label>
      <InputGroup className="rounded" style={{ width: "300px" }}>
        <FormControl
          type="date"
          placeholder="Date"
          label="Date"
          aria-describedby="basic-addon2"
          className="rounded inputStyle"
          name="date"
          onChange={handleInput}
          value={values.date}
        />
      </InputGroup>
      <Form.Label className="pt-2">Number of pages</Form.Label>
      <InputGroup className="mb-1 rounded" style={{ width: "200px" }}>
        <FormControl
          type="number"
          placeholder="Number of pages"
          label="Number of pages"
          aria-describedby="basic-addon2"
          className="rounded inputStyle"
          name="numofpages"
          onChange={handleInput}
          value={values.numofpages}
        />
      </InputGroup>

      <Form.Label className="pt-2">Format</Form.Label>
      <Form.Control
        as="select"
        className="rounded inputStyle"
        name="format"
        onChange={handleInput}
        value={values.format}
      >
        <option>Format</option>
      </Form.Control>
      <div style={{ display: "flex" }}>
        <div className="d-flex flex-column">
          <Form.Label className="pt-2">Edition</Form.Label>
          <InputGroup className="rounded" style={{ width: "200px" }}>
            <FormControl
              placeholder="Edition"
              label="Edition"
              aria-describedby="basic-addon2"
              className="rounded inputStyle"
              name="edition"
              onChange={handleInput}
              value={values.edition}
            />
          </InputGroup>
        </div>
        <div className="d-flex flex-column pl-3">
          <Form.Label className="pt-2">Edition language</Form.Label>
          <InputGroup className="rounded" style={{ width: "200px" }}>
            <Form.Control
              as="select"
              className="rounded inputStyle"
              name="language"
              onChange={handleInput}
              value={values.language}
            >
              <option>Edition language</option>
            </Form.Control>
          </InputGroup>
        </div>
      </div>
      <Form.Group className="pt-2">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required={isTrue ? true : check ? true : false}
          as="textarea"
          rows={3}
          placeholder="Type the description..."
          className="rounded inputStyle"
          name="desc"
          onChange={handleInput}
          value={values.desc}
        />
        <div className="pt-5 infoadd">
          <Button
            className="m-1 rounded"
            variant="outline-dark"
            onClick={handleBack}
            style={{ width: "120px" }}
          >
            {" "}
            <i
              className="fas fa-chevron-left"
              style={{ marginRight: ".5rem" }}
            ></i>
            Back
          </Button>
          <Button
            className="m-1 rounded"
            variant="outline-dark"
            disabled={!flagmark}
            style={{ width: "120px" }}
            type="submit"
            onClick={handleModal}
            active={flagmark}
          >
            Add
          </Button>
        </div>
      </Form.Group>

      {!isTrue && !check && (
        <Modal
          isOpen={isOpen}
          // onRequestClose={handleClose}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,.5)",
            },
            content: {
              backgroundColor: "#f4f4f4",
              maxWidth: "550px",
              height: "400px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "5px",
              padding: "2rem",
            },
          }}
        >
          <div className="infoInputBtns">
            <i
              className="fas fa-check-circle"
              style={{ fontSize: "170px", padding: "1rem" }}
            ></i>
            <p className="p-2 ">Book added successfully</p>
            <Link to="/">
              <Button className="m-1 rounded">Add another book</Button>
            </Link>
          </div>
        </Modal>
      )}
    </form>
  );
};

export default InfoInput;
