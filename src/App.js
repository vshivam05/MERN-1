// import React from "react";
import ReactDOM from "react-dom";

/* Imports/exports - Final code
import Header from "./session1/Header";
import { Button, TextField } from "./session1/Utils";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TextField placeholder="Custom text field" />
        <Button>My custom button</Button>
        <Button>
          <a href="https://www.google.com">Visit google.com</a>
        </Button>
      </div>
    );
  }
}
*/

/* Session 1 Takehome - UserData from reqres.in API
import UserData from "./session1-takehome/UserData";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserData />
      </div>
    );
  }
}
 */

/* Controlled components 
import React, { Component } from "react";
import Form from "./session2/Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
*/

/* Lifecycle methods on mounting demo 

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  render() {
    console.log("render()");
    return <div>Lorem ipsum</div>;
  }
}
*/

/* ComponentDidMount activity
import React, { Component } from "react";
import CDMountActivity from "./session2/CDMountActivity";

export default class App extends Component {
  render() {
    return (
      <div>
        <CDMountActivity />
      </div>
    );
  }
}
 */

//  ComponentDidUpdate Activity

// import React, { Component } from "react";
// import CDUpdateActivity from "./session2/CDUpdateActivity";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userId: 1 };
//   }

//   componentDidUpdate() {
//     console.log("App.js - componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.state.userId}
//           onChange={(e) => this.setState({ userId: e.target.value })}
//           min={1}
//         />
//         <CDUpdateActivity userId={this.state.userId} />
//       </div>
//     );
//   }
// }

//  ComponentWillUnmount *Demo*

import React, { Component } from "react";
import StockData from "./session2/StockData";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleChecked(e) {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    // console.log("Hi");
    return (
      <div>
        Show live stock data
        <input
          type="checkbox"
          value={this.state.checked}
          onClick={(e) => this.handleChecked(e)}
        />
        {this.state.checked && <StockData />}
      </div>
    );
  }
}

/* Component Hierarchy and Lifecycle methods

import React, { Component } from "react";
import Details from "./session2/Details";
import Captcha from "./session2/Captcha";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log("App.js - constructor()");
  }
  componentDidMount() {
    console.log("App.js - componentDidMount()");
  }
  componentDidUpdate() {
    console.log("App.js - componentDidUpdate()");
  }
  render() {
    console.log("App.js - render()");
    return (
      <div style={{ border: "3px solid black", padding: "5px" }}>
        Name:{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <Details name={this.state.name} />
        <Captcha />
      </div>
    );
  }
}
 */

/* Session 2 Takehome - UserData from reqres.in API
import DogPics from "./session2-takehome/DogPics";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <DogPics />
      </div>
    );
  }
}
*/

/* React Hooks Demo 
import WithFunctions from "./session3/WithFunctions";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <WithFunctions />
      </div>
    );
  }

}
*/

/* React Hooks Activity - Counter app with functions

import CounterHooks from "./session3/CounterHooks";
import React, { Component } from "react";

export default function App() {
  return (
    <div>
      <CounterHooks diff={1} />
      <CounterHooks diff={10} />
    </div>
  );
}
 */

/* Conditional rendering Demo 
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let text;
  if (isLoggedIn) {
    text = "Log out";
  } else {
    text = "Log in";
  }

  return <div><button>{text}</button></div>;
}
*/

/* Conditional rendering if-else Activity
import { useState } from "react";

export default function App() {
  const [value, setNumber] = useState(0);

  let text;
  if (value % 2 === 0) {
    text = "Even";
  } else {
    text = "Odd";
  }

  const handleValueChange = (e) => setNumber(e.target.value);

  return (
    <div>
      <input
        type="number"
        name="oddOrEven"
        value={value}
        onChange={(e) => handleValueChange(e)}
      />
      <p>{text}</p>
    </div>
  );
}
*/

/* Conditional rendering Ternary Operator Activity
import { useState } from "react";

export default function App() {
  const [value, setNumber] = useState(0);

  const handleValueChange = (e) => setNumber(e.target.value);

  return (
    <div>
      <input
        type="number"
        name="oddOrEven"
        value={value}
        onChange={(e) => handleValueChange(e)}
      />
      <p>{value % 2 === 0 ? "Even" : "Odd"}</p>
    </div>
  );
}
*/

/* Conditional rendering && Activity 
import { useState } from "react";
import axios from "axios";
const GET_RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  const [imgLink, setImgLink] = useState("");

  const displayRandomDogImage = async () => {
    const res = await axios.get(GET_RANDOM_DOG_API);
    const imgLink = res.data.message;
    setImgLink(imgLink);
  };

  return (
    <div>
      {imgLink && <img src={imgLink} alt="Not loaded" />}
      <div>
        <button type="button" onClick={displayRandomDogImage}>
          Show image
        </button>
      </div>
    </div>
  );
}
*/

/* Session 3 Takehome - Book appointment 
import Takehome from "./session3-takehome/";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Takehome />
      </div>
    );
  }
}
*/

/* Lists and keys - Activity1.1: Rendering multiple similar elements 
import List from "./session4/List";

const superheroes = [
  { id: "a2jdkjd", name: "Winter Soldier" },
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" }
];

export default function App() {
  return (
    <div>
      <div>
        <List name={superheroes[0].name} />
        <List name={superheroes[1].name} />
        <List name={superheroes[2].name} />
      </div>
    </div>
  );
}
*/

/* Lists and keys - Activity1.2: Rendering multiple similar elements
import List from "./session4/List";

const superheroes = [
  { id: "a2jdkjd", name: "Winter Soldier" },
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" }
];

export default function App() {
  return (
    <div>
      <div>
        {[
          <List name={superheroes[0].name} />,
          <List name={superheroes[1].name} />,
          <List name={superheroes[2].name} />
        ]}
      </div>
    </div>
  );
}
 */

/* Lists and keys - Activity1.3: Rendering multiple similar elements
import List from "./session4/List";

const superheroes = [
  { id: "a2jdkjd", name: "Winter Soldier" },
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" }
];

export default function App() {
  return (
    <div>
      <div>
        {superheroes.map((superhero) => (
          <List name={superhero.name} />
        ))}
      </div>
    </div>
  );
}
 */

/* Lists and keys - Activity1.4: Rendering multiple similar elements 
import React, { useState } from "react";
import List from "./session4/List";

// const superheroes = ["Winter Soldier", "Iron Man", "Black Widow", "Loki"];

export default function App() {
  const data = [
    { id: "a2jdkjd", name: "Winter Soldier" },
    { id: "jdkdjk1", name: "Iron Man" },
    { id: "b3dkdj2", name: "Black Widow" }
  ];

  const [superheroes, setSuperheroes] = useState(data);

  const shuffleSuperheroesArray = () => {
    // https://javascript.info/task/shuffle
    const arrCopy = [...superheroes];
    arrCopy.sort(() => Math.random() - 0.5);
    setSuperheroes(arrCopy);
  };

  return (
    <div>
      <button onClick={() => shuffleSuperheroesArray()}>Shuffle array</button>
      <div>
        {superheroes.map((superhero) => (
          <List name={superhero.name} key={superhero.id} />
        ))}
      </div>
    </div>
  );
}
*/

/* [Archived] Lists and Keys - Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroes: ["Winter Soldier", "Iron Man", "Black Widow", "Loki"]
    };
  }
  shuffleArray(arr) {
    const arrCopy = [...arr];
    // https://javascript.info/task/shuffle
    arrCopy.sort(() => Math.random() - 0.5);
    this.setState({ superheroes: arrCopy });
  }
  render() {
    return (
      <div>
        <div>
          <List name={this.state.superheroes[0]} />
          <List name={this.state.superheroes[1]} />
          <List name={this.state.superheroes[2]} />
          <List name={this.state.superheroes[3]} />
        </div>
        <div>
          {[
            <List
              name={this.state.superheroes[0]}
              key={this.state.superheroes[0].length}
            />,
            <List
              name={this.state.superheroes[1]}
              key={this.state.superheroes[1].length}
            />,
            <List name={this.state.superheroes[2]} />,
            <List name={this.state.superheroes[3]} />
          ]}
        </div>
        <div>
          <button onClick={() => this.shuffleArray(this.state.superheroes)}>
            Shuffle array
          </button>
          {this.state.superheroes.map((hero) => (
            <List name={hero} key={hero.length} />
          ))}
        </div>
      </div>
    );
  }
}
*/

/* useEffect Demo for not requiring cleanup - Classes
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleCountChange = (e) => {
    this.setState({
      count: e.target.value
    });
  };

  componentDidMount() {
    document.title = `Count - ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Count - ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="name"
          value={this.state.count}
          onChange={this.handleCountChange}
        />
      </div>
    );
  }
}
*/

/* useEffect Demo for not requiring cleanup - Hooks 
import { useState, useEffect } from "react";

export default function App(props) {
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    document.title = `Count - ${count}`;
  });

  return (
    <div>
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
    </div>
  );
}
*/

/* useEffect Activity for not requiring cleanup
import { useState } from "react";
import UseEffectNoCleanup from "./session4/UseEffectNoCleanup";
import UseEffectNoCleanupSolution from "./session4/UseEffectNoCleanupSolution";

export default function App() {
  const [userId, setUserId] = useState(1);
  const [msg, setMsg] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={msg}
        onChange={(e) => handleMsgChange(e)}
        placeholder="Add a message"
      />
      <input
        type="number"
        value={userId}
        onChange={(e) => handleUserIdChange(e)}
        min={1}
      />
      <UseEffectNoCleanup userId={userId} msg={msg} />
      <UseEffectNoCleanupSolution userId={userId} msg={msg} />
    </div>
  );
}
*/

/* useEffect demo for  requiring cleanup
import { useState } from "react";
import UseEffectWithCleanup from "./session4/UseEffectWithCleanup";
import UseEffectNoCleanup from "./session4/UseEffectNoCleanup";

export default function App() {
  const [enabled, setEnabled] = useState(false);
  const [userId, setUserId] = useState(1);
  const [msg, setMsg] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleOptionChange = (e) => {
    setEnabled(e.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        value={msg}
        onChange={(e) => handleMsgChange(e)}
        placeholder="Add a message"
      />
      <input
        type="number"
        value={userId}
        onChange={(e) => handleUserIdChange(e)}
      />
      <div>
        Show component
        <input
          type="checkbox"
          value={enabled}
          onChange={(e) => handleOptionChange(e)}
        />
        {enabled && <UseEffectWithCleanup userId={userId} msg={msg} />}
      </div>
    </div>
  );
}
*/

/* DogPicsWithHooks Activity 
import DogPicsWithHooks from "./session4/DogPicsWithHooks";

export default function App () {
  render() {
    return (
      <div>
        <DogPicsWithHooks />
      </div>
    );
  }
}
*/

/* Debouncing Demo
import DebouncingDemo from "./session5/DebouncingDemo";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <DebouncingDemo />
      </div>
    );
  }
}
 */

/* Module 1 Debrief - Snackbar 
import Register from "./module1/Snackbar";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        preventDuplicate
      >
        <Register />
      </SnackbarProvider>
    </div>
  );
}
*/
