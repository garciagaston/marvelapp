import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Search from './containers/Search'
import Character from './containers/Character'
import Comic from './containers/Comic'
import Serie from './containers/Serie'
import Creator from './containers/Creator'
import Story from './containers/Story'

class Routes extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search}/>
              <Route path="/characters/:id" component={Character}/>
              <Route path="/comics/:id" component={Comic}/>
              <Route path="/series/:id" component={Serie}/>
              <Route path="/creators/:id" component={Creator}/>
              <Route path="/stories/:id" component={Story}/>
              <Route render={() => <p>Not found</p>}/>
              {/*<Route component={Error404}/>*/}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Routes;
