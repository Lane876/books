import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addNew, setSubgenre, getRoute } from "../redux/actions";

const PrevNext = () => {
  const selected = useSelector((state) => state.subgenre.subgenre);
  const disabled = useSelector((state) => state.active.active);
  const addnew = useSelector((state) => state.addnew.addnew);
  const path = useSelector((state) => state.route.route);
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState(true);
  const [route, setRoute] = useState("");
  const location = useLocation();
  const genres = location.pathname === "/";
  const subgenre = location.pathname === "/subgenre";
  const addsubgenre = location.pathname === "/addnew";
  const info = location.pathname === "/info";

  useEffect(() => {
    if (disabled.length === 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [disabled]);

  useEffect(() => {
    if (genres) {
      dispatch(getRoute("/subgenre"));
    }
    if (subgenre) {
      dispatch(getRoute("/info"));
    }
    if (addnew) {
      dispatch(getRoute("/addnew"));
    }
    if (addsubgenre) {
      dispatch(getRoute("/info"));
    }
  }, [genres, subgenre, addnew, addsubgenre, dispatch]);

  const handleRoute = () => {
    history.push(`${path}`);
  };

  const handleBack = () => {
    history.goBack();
    setRoute("/");
    dispatch(addNew(false));
    dispatch(setSubgenre(""));
  };

  return (
    <div className="ml-auto p-3 pt-5">
      <Button
        className="m-1 rounded"
        variant="outline-dark"
        disabled={genres}
        active={!subgenre && !disabled.length}
        onClick={handleBack}
        style={{ width: "120px" }}
      >
        {" "}
        <i className="fas fa-chevron-left" style={{ marginRight: ".5rem" }}></i>
        Back
      </Button>
      <Button
        className="m-1 rounded"
        variant="outline-dark"
        disabled={active}
        active={selected >= 0}
        onClick={handleRoute}
        style={{ width: "120px" }}
      >
        {info ? "Add" : "Next"}
        {info ? null : (
          <i
            className="fas fa-chevron-right  "
            style={{ marginLeft: ".5rem" }}
          ></i>
        )}
      </Button>
    </div>
  );
};

export default PrevNext;
