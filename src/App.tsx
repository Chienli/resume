import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';


const Resume = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
`

function App() {
  return (
    <div className="App">
      <Resume />
      <Button variant="contained" color="primary">
      你好，世界
    </Button>
    </div>
  );
}

export default App;
