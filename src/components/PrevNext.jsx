import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  addNew,
  setSubgenre,
  getRoute,
  flag,
  addSubgenre,
} from "../redux/actions";

const PrevNext = () => {
  const selected = useSelector((state) => state.subgenre.subgenre);
  const addnew = useSelector((state) => state.addnew.addnew);
  const path = useSelector((state) => state.route.route);
  const flagmark = useSelector((state) => state.flag.flag);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const genres = location.pathname === "/";
  const subgenre = location.pathname === "/subgenre";
  const addsubgenre = location.pathname === "/addnew";
  const info = location.pathname === "/info";

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

  const handleRoute = (e) => {
    history.push(`${path}`);
    dispatch(flag(false));
  };

  const handleBack = () => {
    history.goBack();
    dispatch(addNew(false));
    dispatch(setSubgenre(""));
    dispatch(addSubgenre(""));
  };

  return (
    <div className="ml-auto p-3 pt-5">
      <Button
        className="m-1 rounded"
        variant="outline-dark"
        disabled={genres}
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
        disabled={!flagmark}
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
