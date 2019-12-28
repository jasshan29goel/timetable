import React , {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TimeSlots from './components/timeSlots/TimeSlots';
import AddTimeSlot from './components/timeSlots/AddTimeSlot';
import EditTimeSlot from './components/timeSlots/EditTimeSlot';
import Header from './components/layout/Header';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import NotFound from './components/pages/NotFound';

import {Provider} from "./context"
import './App.css';

class  App extends Component{
  render () {
    return (
      <Provider>
        <Router>
      <div className="App">
      <Header header="Time Table"/>
        <div className="container">
        <Switch>
                <Route exact path="/" component={TimeSlots} />
                <Route exact path="/add" component={AddTimeSlot} />
                <Route exact path="/edit/:id" component={EditTimeSlot} />
                <Route component={NotFound} />
              </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
