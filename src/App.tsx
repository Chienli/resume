import React from "react";
import PropTypes from "prop-types";
import {Container} from "@material-ui/core";

const App = props => {
  return (
    <div>
      <Container maxWidth="xl">
        Hello , world !
      </Container>
    </div>
  );
};

App.propTypes = {

};

export default App;
