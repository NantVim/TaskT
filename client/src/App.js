import React from 'react';
import './App.css';
import FormContainer from "./components/Form/FormContainer";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import SendObjectCreatorContainer from "./components/SendObjectCreator/SendObjectCreatorContainer";
import TrafficTableContainer from "./components/TrafficTable/TrafficTableContainer";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className="app-wrapper-content">
        <Route
          path='/Auth'
          render={() => <FormContainer store={props.store} />}
        />
        <Route
          path='/send-object'
          render={() => <SendObjectCreatorContainer  store={props.store}/>}
        />
        <Route
          path='/traffic-table'
          render={() => <TrafficTableContainer  store={props.store}/>}
        />
      </div>
    </div>
  );
}

export default App;
