import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AllPeople from './components/AllPeople/AllPeople'

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
  return (
    <div className="App">
      <NavBar />
      <AllPeople />
    </div>
  );
}

export default App;
