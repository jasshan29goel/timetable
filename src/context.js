import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
      case 'DELETE_TIMESLOT':
        return {
          ...state,
          timeSlots: state.timeSlots.filter(
            timeSlot => timeSlot.id !== action.payload
          )
        };
      case 'ADD_TIMESLOT':
        return{
          ...state,
          timeSlots:[action.payload,...state.timeSlots]
        };
      case 'EDIT_TIMESLOT':
        return{
          ...state,
          timeSlots: state.timeSlots.map(
            timeSlot =>
            timeSlot.id === action.payload.id
                ? (timeSlot = action.payload)
                : timeSlot)
        };
      default:
        return state;
    }
};

  

export class Provider extends Component {
  state = {
    timeSlots: [ ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount(){
    const res = await axios.get('https://my-json-server.typicode.com/jasshan29goel/timetable/timeSlots');

    this.setState({ timeSlots: res.data });
    }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;