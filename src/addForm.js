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
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
export default AddForm
/*
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<AddForm />, domContainer);
*/