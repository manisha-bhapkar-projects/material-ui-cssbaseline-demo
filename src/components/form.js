import { Container } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Form = () => {
  return (
    <Container>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="name"
        label="Name"
        name="name"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </Container>
  );
};

export default Form;
