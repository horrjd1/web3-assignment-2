import AddForm from "./addForm.js";
import DeleteForm from "./deleteForm.js";
import CountryDisplay from "./countryDisplay.js";

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
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        class: "row"
      }, /*#__PURE__*/React.createElement("div", {
        class: "col-lg-4 d-flex align-items-stretch"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card shadow-lg"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card-body"
      }, /*#__PURE__*/React.createElement(CountryDisplay, {
        data: this.state.countryData
      })))), /*#__PURE__*/React.createElement("div", {
        class: "col-lg-4 d-flex align-items-stretch"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card shadow-lg"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card-body"
      }, /*#__PURE__*/React.createElement(AddForm, null)))), /*#__PURE__*/React.createElement("div", {
        class: "col-lg-4 d-flex align-items-stretch"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card shadow-lg"
      }, /*#__PURE__*/React.createElement("div", {
        class: "card-body"
      }, /*#__PURE__*/React.createElement(DeleteForm, {
        data: this.state.countryData
      }))))));
    } else {
      return /*#__PURE__*/React.createElement("div", null, "Loading...");
    }
  }

}

export default App;