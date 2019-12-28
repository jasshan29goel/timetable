import React, { Component } from 'react';
import TimeSlot from './TimeSlot';
import { Consumer } from '../../context';

class TimeSlots extends Component {
  render() {
    return (
      <Consumer>{
            value => {
                const { timeSlots } = value;
                return (
                    <React.Fragment>
                    {timeSlots.map(timeSlot => (
                        <TimeSlot key={timeSlot.id} timeSlot={timeSlot} />
                    ))}
                    </React.Fragment>
                );
            }
        }
      </Consumer>
    );
  }
}

export default TimeSlots;