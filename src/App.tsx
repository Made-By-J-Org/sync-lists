import React from "react";
import {Provider} from "jotai";


import Container from './components/Container/Container';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Lists from "./components/Lists/Lists";

const App = (): React.ReactElement => {
  return (
    <Provider>
      <Container
        title="Tasks Collapsable"
        header={<ProgressBar value={30}/>}
        content={<Lists/>}
      />
    </Provider>
  );
}

export default App;
