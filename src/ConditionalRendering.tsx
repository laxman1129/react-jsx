import * as React from "react";
import "./App.css";

interface DemoProps {
  name: string;
  isUser: boolean;
}

const ConditionalRendering = (props: DemoProps) => {
  const greeting = "Hello, ";
  //declaring JSX
  //Embedding expression
  //Specifying attributes
  const userElement = (
    <h1>
      {greeting} <i className="true">{props.name} !!!</i>
    </h1>
  );
  //declaring JSX
  //Embedding expression
  //Specifying attributes
  const guestElement = (
    <h1>
      {greeting} <i className="false">Guest !!!</i>
    </h1>
  );

  //Conditional rendering
  //Embedding expression
  //Specifying attributes
  return (
    <div className="App-header">
      {props.isUser ? userElement : guestElement}
    </div>
  );
};

export default ConditionalRendering;
