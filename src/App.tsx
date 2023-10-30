import React from "react";

import Container from './components/Container/Container';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Lists from "./components/Lists/Lists";


const App = (): React.ReactElement => {
  // load data

  return (
    <Container
      title="Tasks Collapsable"
      header={<ProgressBar value={30}/>}
      content={<Lists/>}
    />
  );
}

export default App;
