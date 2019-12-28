import React, { Component } from 'react';
import FormElement from '../layout/FormElement';
import { Consumer } from '../../context';
import axios from "axios";
class EditTimeSlot extends Component {
    state = {
        startTime:"",
        endTime:"",
        name:"",
        place:"",
        day:"",
    }
    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://my-json-server.typicode.com/jasshan29goel/timetable/timeSlots/${id}`);
         
        const temp=res.data;

        this.setState({ 
            startTime: temp.startTime,
            endTime: temp.endTime,
            name: temp.name,
            place: temp.place,
            day: temp.day 
        });
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
    
        const { startTime,endTime,name,place,day } = this.state;
    
        const newTimeSlot = {
          startTime,
          endTime,
          name,
          place,
          day
        };
        const { id } = this.props.match.params;

        const res = await axios.put(`https://my-json-server.typicode.com/jasshan29goel/timetable/timeSlots/${id}`,newTimeSlot);
        dispatch({ type: 'EDIT_TIMESLOT', payload: res.data });
    
        // Clear State
        this.setState({
          startTime: '',
          endTime: '',
          name: '',
          place: '',
          day: '',
        });
        this.props.history.push('/');
      };

    render() {
        const {startTime,endTime,name,place,day}=this.state;
        return (
            <Consumer>{
                  value => {
                      const { dispatch } = value;
                        return (

                            <div className="card mb-3">
                                <div className="card-header">Edit Time Slot
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <FormElement label="Start Time"  name="startTime" placeholder="Enter Start Time" type="text" value={startTime} onChange={this.onChange}/>
                                    <FormElement label="End Time"  name="endTime" placeholder="Enter End Time" type="text" value={endTime} onChange={this.onChange}/>
                                    <FormElement label="Course Name"  name="name" placeholder="Enter Course Name" type="text" value={name} onChange={this.onChange}/>
                                    <FormElement label="Place"  name="place" placeholder="Enter Place" type="text" value={place} onChange={this.onChange}/>
                                    <FormElement label="Day"  name="day" placeholder="Enter Day" type="text" value={day} onChange={this.onChange}/>
                                    <input
                                        type="submit"
                                        value="Edit Time Slot"
                                        className="btn btn-light btn-block"
                                        />
                                    </form> 
                                </div>
                            </div>
                        )
            
                  }
                }
            </Consumer> 
        );

    }
}

export default EditTimeSlot;