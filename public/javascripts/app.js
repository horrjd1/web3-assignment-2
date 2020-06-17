//import AddForm from './addForm.js';
//import DeleteForm from './deleteForm.js';
//import Button from '@material-ui/core/Button';
//import TextField from "@material-ui/core/TextField";
function fetchCountryData() {
  return new Promise(resolve => {
    $.get("http://localhost:8080/api/countries", function (data) {
      // Turns json data into a string so that it can be saved into local storage
      var jsonString = JSON.stringify(data); // Save this data into local storage

      localStorage.setItem("countries", jsonString);
      resolve();
    }).fail(function () {
      alert("No Data Was Found");
    });
  });
}

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {}
    };
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let key = event.target.name;
    let value = event.target.value;
    formValues[key] = value;
    this.setState({
      formValues
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // Adding empty data key since form doesnt have option to add the json data 

    this.state.formValues.data = {}; // sending request to api to create the country

    fetch("http://localhost:8080/api/countries", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formValues)
    }).then(response => console.log(response)); //provide success feedback
    //update local storage?
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Add Country"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit.bind(this)
    }, /*#__PURE__*/React.createElement("label", null, " ", "Name:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      value: this.state.formValues["name"],
      onChange: this.handleChange.bind(this)
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "btn btn-primary",
      type: "submit",
      value: "Submit"
    })));
  }

}

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      countryData: this.props.data
    }; // saving the passed country data prop into state

    this.state.countryData = this.props.data; //making the options for the country drop down

    this.countrySelections = this.state.countryData.map((item, key) => /*#__PURE__*/React.createElement("option", {
      value: item.name
    }, item.name));
  } // When data is changed in the input fields


  handleChange(event) {
    event.preventDefault(); //creating an object containing the forms fields and inputted data

    let formValues = this.state.formValues;
    let key = event.target.name;
    let value = event.target.value;
    formValues[key] = value;
    this.setState({
      formValues
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //Makes the delete request to the site

    fetch("http://localhost:8080/api/countries/" + this.state.formValues["name"], {
      method: "DELETE"
    }).then(response => console.log(response)); //provide success feedback
    //update local storage?
  }

  render() {
    // only one tag can be returned so containing h2 and form within empty <>
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Delete Country"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit.bind(this)
    }, /*#__PURE__*/React.createElement("select", {
      name: "name",
      id: "deleteCountryName",
      value: this.state.formValues["name"],
      onChange: this.handleChange.bind(this)
    }, this.countrySelections), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "btn btn-primary",
      type: "submit",
      value: "Submit"
    })));
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: null
    };
  }

  componentDidMount() {
    this.loadCountryData();
  }

  async loadCountryData() {
    // used for testing the fetchCountryData
    // localStorage.removeItem("countries");
    // If countries data doesnt already exist on the browser
    if (!("countries" in localStorage)) {
      //waits until ajax is done getting the countries data
      await fetchCountryData();
    }

    const data = JSON.parse(localStorage.getItem("countries")); // Setting the state
    // this will make the component re-render

    this.setState({
      countryData: data
    });
  }

  render() {
    // waits until the data is loaded from the fetch or local storage before loading the delete form
    // this is so that the form isnt loaded and the empty state isnt passed to the delete component before the countryData is set
    if (this.state.countryData) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AddForm, null), /*#__PURE__*/React.createElement(DeleteForm, {
        data: this.state.countryData
      }));
    } else {
      return /*#__PURE__*/React.createElement("div", null, "Loading...");
    }
  }

}

export default App;