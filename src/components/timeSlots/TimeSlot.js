import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';


 class TimeSlot extends Component {

    onDeleteClick = async (id, dispatch) => {
        try {
          await axios.delete(`https://my-json-server.typicode.com/jasshan29goel/timetable/timeSlots/${id}`);
          dispatch({ type: 'DELETE_TIMESLOT', payload: id });
        } catch (e) {
          dispatch({ type: 'DELETE_TIMESLOT', payload: id });
        }
      };
    render() {
        const {id, startTime ,endTime, name , place , day}= this.props.timeSlot;
        return (
            <Consumer>
              {value => {
                const { dispatch } = value;
                return (
                    <div className="card card-body mb-3">
                        <h4>
                            {startTime}-{endTime}
                            <i
                        className="fa fa-trash"
                        style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                            />
                            <Link to={`/edit/${id}`}>
                        <i
                        className="fas fa-pencil-alt"
                        style={{ cursor: 'pointer', float: 'right', color: 'black',marginRight: 16 }}
                            />
                            </Link>
                        </h4>
                    
                        <ul className="list-group">
                        <li className="list-group-item">Name:{name}</li>
                        <li className="list-group-item">Place: {place}</li>
                        <li className="list-group-item">Day: {day}</li>
                        </ul>
                    
                    </div>
                    
                    
                )
              }}
            </Consumer>
        )
    }
}

TimeSlot.propTypes={
    timeSlot : PropTypes.object.isRequired,
};
export default TimeSlot;