class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
    };
  }

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

    // Adding empty data key since form doesnt have option to add the json data 
    this.state.formValues.data = {}

    // sending request to api to create the country
    fetch(
      "http://localhost:8080/api/countries",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.formValues)
      }
    ).then((response) => console.log(response));

    //provide success feedback

    //update local storage?
  }

  render() {
    return (
      <>
        <h2>Add Country</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              name="name"
              placeholder="New Country Name"
              value={this.state.formValues["name"]}
              onChange={this.handleChange.bind(this)}
            />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default AddForm