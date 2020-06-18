class CountryDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formValues: {},
        allCountryData: this.props.data,
        countryData: {},
        countryDataCurrentYear: {year: '', income: '', internet_users: '', health: '', population: ''},
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
  
      // getting the country data for the country with the same name as one selected in dropdown
      var countryData = this.state.countryData
      countryData = this.state.allCountryData.find(obj => {
        if (obj.name === this.state.formValues['name']) {
          return obj
        }
         
      })
      console.log(countryData['data'])
  
      let year = '2010'
  
      // filling info thats going to be displayed on the page
  
      this.state.countryDataCurrentYear.year = year;
      this.state.countryDataCurrentYear.income = ('income_per_person_gdppercapita_ppp_inflation_adjusted' in countryData['data']) ? countryData['data']['income_per_person_gdppercapita_ppp_inflation_adjusted'][year] : 'null';
      this.state.countryDataCurrentYear.internet_users = ('internet_users' in countryData['data']) ? countryData['data']['internet_users'][year] : 'null';
      this.state.countryDataCurrentYear.health = ('total_health_spending_per_person_us' in countryData['data']) ? countryData['data']['total_health_spending_per_person_us'][year] : 'null';
      this.state.countryDataCurrentYear.population = ('population_total' in countryData['data']) ? countryData['data']['population_total'][year] : 'null';
  
    }
  
    handleSubmit(event) {}
  
    render() {
      // only one tag can be returned so containing h2 and form within empty <>
      return (
        <>
          <h2>Search Country</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <select
              name="name"
              id="selectCountryName"
              value={this.state.formValues["name"]}
              onChange={this.handleChange.bind(this)}
            >
              <option value=''>Select a Country:</option>
              {this.countrySelections}
            </select>
            <br />
          </form>
          <br />
          <p>year: {this.state.countryDataCurrentYear['year']}</p>
          <p>avg_income: ${this.state.countryDataCurrentYear['income']}</p>
          <p>internet_users: {this.state.countryDataCurrentYear['internet_users']}%</p>
          <p>health: {this.state.countryDataCurrentYear['health']}</p>
          <p>population: {this.state.countryDataCurrentYear['population']}</p>
        </>
      );
    }
  }

  export default CountryDisplay