import React, { Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='App'>
      <Router>
        {!user ? 
        <Login /> 
        :
         <Fragment>
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
        </Fragment>}
      </Router>
    </div>
  );
}

export default App;
