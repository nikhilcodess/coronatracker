import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import React from "react";
class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
