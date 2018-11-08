import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Axios from 'axios';


import Physicians   from './physicians';
import Appointments from './appointments';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      appointments: [],
      selected: {},
    };

    this.handlePhysicianClick = this.handlePhysicianClick.bind(this);
  }

  componentDidMount() {
    Axios.get('/api/doctors')
      .then(({data}) => this.setState({
        doctors: data.doctors,
        selectedId: 0,
        selected: null
      }))
      .catch(err => console.log({err}));
  }

  handlePhysicianClick(id) {
    const DOCTOR = this.state.doctors.filter(doc => doc.id === id)[0];

    Axios.get(`/api/doctors/${id}`)
      .then(({data}) => {
        this.setState({
          selected: DOCTOR,
          selectedId: id,
          appointments: data.appointments,
        })
      })
      .catch(err => console.log({err}));
  }

  render() {
    return (
      <div className="main">
        <Physicians
          handleDrClick={this.handlePhysicianClick}
          doctors={this.state.doctors}
          selected={this.state.selectedId}
        />
        {
          this.state.selected && (
            <Appointments
              doctor={this.state.selected}
              appointments={this.state.appointments}
            />
          )
        }
      </div>
    )
  }
}
