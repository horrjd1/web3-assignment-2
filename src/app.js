//import AddForm from './addForm.js';
//import DeleteForm from './deleteForm.js';

//import Button from '@material-ui/core/Button';
//import TextField from "@material-ui/core/TextField";

function fetchCountryData() {
  return new Promise((resolve) => {
    $.get("http://localhost:8080/api/countries", function(data) {
      // Turns json data into a string so that it can be saved into local storage
      var jsonString = JSON.stringify(data);
      // Save this data into local storage
      localStorage.setItem("countries", jsonString);
      resolve();
    }).fail(function() {
      alert("No Data Was Found");
    });
  });
}

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
    };
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let key = event.target.name;
    let value = event.target.value;

    formValues[key] = value;

    console.log(event.target.name)
    console.log(event.target.value)

    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formValues);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={this.state.formValues["name"]}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <br />
        <label>
          {" "}
          Data:
          <input
            type="text"
            name="data"
            value={this.state.formValues["data"]}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryData: [] };
  }

  componentDidMount() {
    this.loadCountryData();
  }

  async loadCountryData() {
    localStorage.removeItem("countries");

    // If data doesnt already exist on the browser
    if (!("countries" in localStorage)) {
      //waits until ajax is done getting the countries data
      await fetchCountryData();
    }

    const data = JSON.parse(localStorage.getItem("countries"));
    this.setState({ countryData: data });
    console.log(data);
  }

  render() {
    return (
      <div>
        <AddForm />
        <h2>test text</h2>
      </div>
    );
  }
}

export default App;
