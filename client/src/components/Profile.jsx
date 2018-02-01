import React from 'react';
import UserChart from './UserChart.jsx';
import UserFriend from './UserFriend.jsx';
import UserEvent from './UserEvent.jsx';
import axios from 'axios';



class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [] 
    }
    // this.handleFriendClicked = this.handleFriendClicked.bind(this);
    this.getUserData = this.getUserData.bind(this)
  }
  
  getUserData(user_id) {
    axios.get(`/profile/data/${user_id}`)
    .then((results) => {
      this.setState({userData: results.data})
    })
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.id)
  }


  render() {
      if(!this.state.userData) {
        return(
          <div className="profile_container">
            <img src="https://hiretual.com/assets/img/loading.gif" alt=""/>
          </div> 
        ) 
      } else {
      return (
        <div className="profile_container">
          <div className="profile">
            <div className="profile_data">
              {/* <UserChart catagories={this.props.userData[0].catagories}/> */}
            </div>
            <div className="profile_image">
              <img src="stock-user-profile.jpg" alt=""/>
            </div>
            <div className="profile_bio">
              {/* { this.state.userData.bio} */}
              <hr/>
              {
                this.state.userData.gender + '\n' +
                this.state.userData.email
              }
            </div>
            <div className="profile_username">
              <p> {this.state.userData.username} </p>
            </div>
            <div className="profile_events">
              <div className="profile_events_container">
                {/* {
                  this.state.userData.events.map(event => <UserEvent key={event.eventId} event={event}/>)
                } */}
              </div>
            </div>
            <div className="profile_friends">
              <div className="profile_friends_container">
              {/* {
                this.props.userData[0].friends.map(friend => <UserFriend key={friend.userId} friend={friend}/>)
              } */}
              </div>
            </div>
          </div>  
        </div>
      );
    }
  }
}

//changed: from export @ class... 
export default Profile;

/**
 * 1) Profile Photo
 *  a) User can update profile
 * 2) serve up active events 
 * 3) Catagories of Interest
 *  a) User can edit/update their catagories
 * 4) visual analytics of past events participated in 
 */
