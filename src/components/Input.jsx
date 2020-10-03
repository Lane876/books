import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import books from "../data";
import { addNew, flag, getCheck } from "../redux/actions";

const Input = () => {
  const [check, setCheck] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const genreid = useSelector((state) => state.active.active);
  const checkiftrue = useSelector((state) => state.check.check);

  useEffect(() => {
    dispatch(addNew(false));
    dispatch(getCheck(check));
    const getReq = () =>
      books.map(
        (book) =>
          book.id === genreid &&
          book.subgenres.map((book) =>
            dispatch(getCheck(book.isDescriptionRequired === check))
          )
      );

    getReq();
  }, [check]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleCheck = () => {
    setCheck(!check);
    // dispatch(flag(true));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(flag(true));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3 rounded pt-3">
        <FormControl
          placeholder="Subgenre name"
          aria-label="Subgenre name"
          aria-describedby="basic-addon2"
          className="rounded"
          style={{ outlineColor: "gray", border: "1px solid gray" }}
          onChange={handleChange}
        />
      </InputGroup>

      <Form.Check
        type="checkbox"
        label="Description is required for this subgenre"
        value={check}
        onClick={handleCheck}
      />
    </Form>
  );
};

export default Input;
