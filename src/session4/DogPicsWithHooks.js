import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DogPicsWithHooks() {
  const defaultBreed = "random";
  const [breed, setBreed] = useState(defaultBreed);
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    renderDogImage(breed);
  }, [breed]);

  const renderDogImage = async (breed) => {
    let url = "";
    if (breed === defaultBreed) {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    const res = await axios.get(url);
    const imageLink = res.data.message;

    setImgLink(imageLink);
  };

  const handleBreedChange = (e) => {
    const newBreed = e.target.value;
    setBreed(newBreed);
  };

  return (
    <div>
      <label>
        Select a breed:
        <select
          value={breed}
          onChange={(e) => handleBreedChange(e)}
          style={{ marginBottom: "10px" }}
        >
          <option value={defaultBreed}>Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
      </label>
      <div>
        <div>
          <img src={imgLink} alt="Not available" height="400" />
        </div>
        <div>
          <button
            onClick={() => renderDogImage(breed)}
            style={{ padding: "5px" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
