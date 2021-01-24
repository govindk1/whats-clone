import React from "react"
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat.js"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./Login.js"
import {useStateValue} from "./StateProvider"

function App() {  

  const [{user}, dispatch] = useStateValue();  
  

  return (
    <div className="app">
      {!user ? (
        <Login />
        ):(
          <div className="app__body">
        
        <BrowserRouter>
        <Sidebar />
          <Switch>
            

            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route exact path="/">
              <Chat />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
        )}
      
    </div>
  );
}

export default App;
