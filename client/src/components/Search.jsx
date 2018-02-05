import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      term: '',
      events: [{eventName: 'Hiking',
                date: '02-14-2018',
                description: 'Anyone want to go hiking around that weekend in tristates?',
                creator: 'Jackie'}, 

                {eventName: 'BBQ',
                 date: '03-18-2018',
                description: 'Advanced JS coding in downtown Manhattan',
                creator: 'Aaron'}]
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.handleEventJoin = this.handleEventJoin.bind(this);
  }

  handleTermChange (e) {
    this.setState({term: e.target.value});
  }

  handleSubmit () {
    if(this.state.term.length) {
      this.getEvents();
      this.setState({term: ''});
    }
  }

  handleKeyPress (e) {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleEventJoin (event) {
    const eventID = event.eventID;
    const userID = this.props.userData;
    if(this.props.isLogin) {
      // update the clicked event by adding user as attendee, if success, 
      axios.post('/events/addAttendee', {eventID, userID})
      .then((event) => {
        axios.post('/users/addEvent', {userID: userID, eventID: event.eventID})
        .then((user) => {
          this.setState({redirect: true})
        })
      })
        //get user's events from server
         // push the clicked event into user's events, then
          // redirect to user's dashboard, better sets the clicked event's chatrrom as default
    } else {
      window.alert("You need to sign in to be able to join an event")
    }
  }

  getEvents () {
    axios.get('/search/events', {params: {term: this.state.term}})
    .then((response) => {
      // console.log('response data from getEvents: ', response.data);
      this.setState({events: response.data});
    })
  }

  render() {
    if(!this.state.redirect) {
      return (
        <div className="search_container">
          <div className="search">
            <div className="search_bar">
              <input value={this.state.term} onChange={(e) => this.handleTermChange(e)} onKeyPress={(e) => this.handleKeyPress(e)} placeholder="what do you want to do"/>
              <button onClick={this.handleSubmit}>Search</button>
            </div>
            <div className="search_events">
              <h4>Search result: {this.state.events.length} found</h4>
              <br/>
              <table>
                <tbody>
                  <tr><td>Event</td><td>Date</td><td>Description</td><td>Creator</td><td>Join</td></tr>
                    {this.state.events.map((event, index) => <ListItem key={index} event={event} handleEventJoin={(event) => this.handleEventJoin(event)}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    } else {
      return <Dashboard userID={this.props.userData} useName={this.props.userName}/>
    }
  }
}

const ListItem = (props) => (
  <tr>
    <td>{props.event.eventName}</td>
    <td>{props.event.date}</td>
    <td>{props.event.description}</td>
    <td>{props.event.creator}</td>
    <td><button onClick={props.handleEventJoin}>Join</button></td>
  </tr>
)

export default Search