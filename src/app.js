function fetchCountryData() {
    return new Promise(resolve => {
        $.get("http://localhost:8080/api/countries", function (data) {
            // Turns json data into a string so that it can be saved into local storage
            var jsonString = JSON.stringify(data)
            // Save this data into local storage
            localStorage.setItem('countries', jsonString)
            resolve()
        }).fail(function () {
            alert("No Data Was Found");
        });
    });
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countryData: [] };
    }

    componentDidMount() {
        this.loadCountryData()
    }

    async loadCountryData() {
        localStorage.removeItem('countries')

        // If data doesnt already exist on the browser
        if (!('countries' in localStorage)) {
            //waits until ajax is done getting the countries data
            await fetchCountryData()
        }

        const data = JSON.parse(localStorage.getItem('countries'))
        this.setState({ countryData: data })
        console.log(data)
    }

    render() {
        return <h1>Testing yay</h1>
    }
}

export default App