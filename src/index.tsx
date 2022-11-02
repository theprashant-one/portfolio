import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NextUIProvider, createTheme } from "@nextui-org/react";
// import ScrollToTop from "react-scroll-to-top";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const myDarkTheme = createTheme({
  type: "dark",
});

root.render(
  <NextUIProvider theme={myDarkTheme}>
    <React.StrictMode>
      <App />
      {/* <ScrollToTop smooth style={{ borderRadius: "50%" }} /> */}
    </React.StrictMode>
  </NextUIProvider>
);
