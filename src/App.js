import logo from './logo.svg';
import './App.css';
import UserList from './Screens/UserList';
import Login from './Screens/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route  exact path='/' component={Login}/>
      <Route exact  path='/userlist' component={UserList}/>
    </Switch>
    </>

    // <div>

    //   {/* <UserList/> */}
    //   <Login/>
    // </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
