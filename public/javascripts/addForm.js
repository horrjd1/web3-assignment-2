//import React from "react";
//import { Button, TextField } from "../node_modules/@material-ui/core/Button";
//("use strict");
function AddForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Add Form"), /*#__PURE__*/React.createElement("form", {
    action: "localhost:8080/api/countries",
    method: "POST"
  }, "Name ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name"
  }), "Data ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "data",
    name: "data"
  }), /*#__PURE__*/React.createElement("button", null, "Add")));
}
/*
<form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Name" />
          <TextField id="standard-basic" label="Population" />
          <TextField id="standard-basic" label="Data" rows={8}/>
        </form>

        <Button onClick={() => this.setState({ liked: true })}>Submit</Button>
        */


export default AddForm;
/*
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<AddForm />, domContainer);
*/