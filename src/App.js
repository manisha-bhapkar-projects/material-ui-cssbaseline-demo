import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import CardDemo from "./components/CardDemo";
import Demo from "./components/demo";
import Form from "./components/form";
import Header from "./components/Header";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <CardDemo /> */}
      <Demo/>
     {/* <Form/> */}
     {/* <Header/> */}
    </ThemeProvider>
  );
}

export default App;
