import axios from "axios";
import React, { Component } from "react";

class DogPics extends Component {
  constructor(props) {
    super(props);
    this.defaultBreed = "random";
    this.state = { breed: this.defaultBreed, imgLink: "" };
  }

  componentDidMount() {
    this.renderDogImage(this.state.breed);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.renderDogImage(this.state.breed);
    }
  }

  renderDogImage = async (breed) => {
    let url = "";
    if (breed === this.defaultBreed) {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    const res = await axios.get(url);
    const imgLink = res.data.message;

    this.setState({
      imgLink: imgLink
    });
  };

  handleBreedChange = (e) => {
    const newBreed = e.target.value;
    this.setState({
      breed: newBreed
    });
  };

  render() {
    return (
      <div>
        <label>
          Select a breed:
          <select
            value={this.state.breed}
            onChange={(e) => this.handleBreedChange(e)}
            style={{ marginBottom: "10px" }}
          >
            <option value={this.defaultBreed}>Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </label>
        <div>
          <div>
            <img src={this.state.imgLink} alt="Not available" height="400" />
          </div>
          <div>
            <button
              onClick={() => this.renderDogImage(this.state.breed)}
              style={{ padding: "5px" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DogPics;
