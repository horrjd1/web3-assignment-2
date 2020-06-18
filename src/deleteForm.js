class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      countryData: this.props.data,
    };

    // saving the passed country data prop into state
    this.state.countryData = this.props.data;

    //making the options for the country drop down
    this.countrySelections = this.state.countryData.map((item, key) => (
      <option value={item.name}>{item.name}</option>
    ));
  }

  // When data is changed in the input fields
  handleChange(event) {
    event.preventDefault();

    //creating an object containing the forms fields and inputted data
    let formValues = this.state.formValues;
    let key = event.target.name;
    let value = event.target.value;

    formValues[key] = value;

    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();

    //Makes the delete request to the site
    fetch(
      "http://localhost:8080/api/countries/" + this.state.formValues["name"],
      {
        method: "DELETE",
      }
    ).then((response) => console.log(response));

    //provide success feedback

    //update local storage?
  }

  render() {
    // only one tag can be returned so containing h2 and form within empty <>
    return (
      <>
        <h2>Delete Country</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select
            name="name"
            id="deleteCountryName"
            value={this.state.formValues["name"]}
            onChange={this.handleChange.bind(this)}
          >
            {this.countrySelections}
          </select>
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default DeleteForm
