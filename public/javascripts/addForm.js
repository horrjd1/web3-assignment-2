import React from "react";
import { Button } from "@material-ui/core"; //("use strict");

function AddForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "standard-basic",
    label: "Standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-basic",
    label: "Filled",
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-basic",
    label: "Outlined",
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: () => this.setState({
      liked: true
    })
  }, "Submit"));
}

export default AddForm;
/*
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<AddForm />, domContainer);
*/