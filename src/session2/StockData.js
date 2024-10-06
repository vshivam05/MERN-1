import React, { Component } from "react";
import axios from "axios";

class StockData extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: 0, value: null };
  }

  componentDidMount() {
    console.log("Component is mounted");
    this.timerID = setInterval(() => this.getStockData(), 1000);
  }

  // componentWillUnmount() {
  //   console.log("Component is being unmounted");
  //   clearInterval(this.timerID);
  // }

  getStockData = async () => {
    const res = await axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const data = res.data;
    const value = Object.values(data["Time Series (5min)"])[this.state.entry][
      "4. close"
    ];
    console.log(value);

    this.setState((state, props) => ({
      entry: state.entry + 1,
      value: value,
    }));
  };

  render() {
    return (
      <div>
        IBM stock value {this.state.value && <span>{this.state.value}</span>}
      </div>
    );
  }
}

export default StockData;
