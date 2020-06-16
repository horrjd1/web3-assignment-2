//import React from "react";
//import { Button, TextField } from "../node_modules/@material-ui/core/Button";
//("use strict");

/*
function AddForm() {
    return (
      <>
        <h1>Add Form</h1>
        <form action="localhost:8080/api/countries" method="POST">
          Name <input type="text" id="name" name="name" />
          Data <input type="text" id="data" name="data" />
        </form>
      </>
    );
}
*/
import React from 'react';

class AddForm extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h1", null, "Hello"), /*#__PURE__*/React.createElement("p", null, "Enter your name:"), /*#__PURE__*/React.createElement("input", {
      type: "text"
    }));
  }

}

export default AddForm;
/*
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<AddForm />, domContainer);
*/