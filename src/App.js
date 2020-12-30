import React from 'react'
import Setup from './tutorial/4-forms/setup/3-myInputs'
import About from './tutorial/4-forms/setup/about'
import Error from './tutorial/4-forms/setup/Error'
import Navbar from './tutorial/4-forms/setup/Navbar'
import Contact from './tutorial/4-forms/setup/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='container'>
      <Navbar/>
      <Switch>
    <Route exact path='/'>
          <Setup />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contactus'>
          <Contact/>
        </Route>
        <Route exact path="*">
          <Error></Error>
        </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default App
