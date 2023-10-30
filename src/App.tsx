import React from "react";

import Container from './components/Container/Container';
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = (): React.ReactElement => (
  <Container title="Tasks List">
    <ProgressBar value={30}/>
  </Container>
);

export default App;
