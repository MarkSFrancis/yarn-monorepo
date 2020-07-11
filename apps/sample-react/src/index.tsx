import { Log } from "@yarn-monorepo/log";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

Log("Hello from React!");

ReactDOM.render(
  <App title="Hello React!" />,
  document.getElementById("output")
);
