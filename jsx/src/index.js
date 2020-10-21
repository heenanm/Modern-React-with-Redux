// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = {text: 'click me!'};
  const labelText = 'Enter name:';
  const style = { backgroundColor: "blue", color: "white" };  

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Render the component
ReactDOM.render(<App />, document.querySelector("#root"));
