import React from "react";
import "./App.css";
import ConditionalRendering from "./ConditionalRendering";

function App() {
  return (
    <div className="App">
      <div>
        Render conditionally, when <em>isUser</em> is <i className="true">true</i>.
      </div>
      <ConditionalRendering name="User" isUser />

      <div>
        Render conditionally, when <em>isUser</em> is <i className="false">false</i>.
      </div>
      <ConditionalRendering name="User" isUser={false} />
    </div>
  );
}

export default App;
