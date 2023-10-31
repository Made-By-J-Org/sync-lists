import React from "react";
import {Provider, useAtomValue} from "jotai";

import {loadableFetchDataAsyncAtom} from "./store/atoms";

import Container from './components/Container/Container';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Lists from "./components/Lists/Lists";
import Loader from "./components/Loader/Loader";

const App = (): React.ReactElement => {
  const data = useAtomValue(loadableFetchDataAsyncAtom)

  // there should be better screen for handling error
  if (data.state === 'hasError') return <div>{typeof data.error === 'string' ? data.error : 'Sorry, something went wrong'}</div>
  if (data.state === 'loading') return <Loader message="Loading the app..."/>

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
