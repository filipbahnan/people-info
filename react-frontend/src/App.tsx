import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AllPeople from './components/AllPeople/AllPeople'
import SearchPeople from './components/SearchPeople/SearchPeople'
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';

/* Write components like this:
import React from 'react'

type AppProps = {
    message: string;
  };

const NavBar = ({ message }: { message: string }): JSX.Element => {
    return <div>{message}</div>
};

export default NavBar;
*/
function App() {
  const user: string = "jmewitt0"
  return (
    <div>
      <div className={styles.center}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/home">
              <SearchPeople />
            </Route>
            <Route exact path="/">
              <SearchPeople />
            </Route>
            <Route exact path="/all">
              <AllPeople/>
            </Route>
            <Route exact path={"/" + user}>
              <UserProfile user={user}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
