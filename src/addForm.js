import React from "react";
import { Button } from "@material-ui/core";
//("use strict");

function AddForm() {
    return (
      <>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>

        <Button onClick={() => this.setState({ liked: true })}>Submit</Button>
      </>
    );
}

export default AddForm
/*
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<AddForm />, domContainer);
*/