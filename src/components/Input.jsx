import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import books from "../data";
import { addNew, addSubgenre, flag, getCheck } from "../redux/actions";

const Input = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const genreid = useSelector((state) => state.active.active);

  useEffect(() => {
    dispatch(addNew(false));
    dispatch(getCheck(check));
    const getReq = () =>
      books.map(
        (book) =>
          book.id === genreid &&
          book.subgenres.map((book) =>
            dispatch(getCheck((book.isDescriptionRequired = check)))
          )
      );

    getReq();
  }, [check, dispatch, genreid]);

  const handleCheck = () => {
    setCheck(!check);
    dispatch(getCheck(check));
  };

  const handleChange = (e) => {
    dispatch(flag(true));
    dispatch(addSubgenre(e.target.value));
  };

  return (
    <Form className="input">
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
