import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/room/:roomId'>
              <Chat />
            </Route>
            <Route exact path='/'>
              <h1>Welcome to Yaniv`s slack clone</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
