import React from 'react';
import $ from 'jquery';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      make: false,
      options: ['friends', 'memories', 'connections', 'plans', 'experiences'],
      counter: Math.floor(Math.random()*5)
    }
    this.interval;
  }
  componentDidMount() {
  }
  render () {
    return (<div className="homepage"><div className="homepageHero"><span className="carousel">Make </span><span className="carousel makeWhat">{this.state.options[this.state.counter]}</span></div>
      <div className="homepageContent">
      <br/><br/>
      <div className="container">
        <div className="item"><h1>Create groups</h1><p>Organize a group for your next hangout at the click of a button</p><img style={{objectFit:'contain'}} src="https://placeit.net/uploads/stage/stage_image/11392/default_watermarked_17152base.png"/></div>
        <div className="item"><h1>Join events</h1><p>View what people around you are doing and join them</p><img style={{objectFit:'contain'}} src="https://placeit.net/uploads/stage/stage_image/11392/default_watermarked_17152base.png"/></div>
        <div className="item"><h1>Make new friends</h1><p>A new way to social network<br/>No more missed dates or dropped plans</p><img style={{objectFit:'contain'}} src="https://placeit.net/uploads/stage/stage_image/11392/default_watermarked_17152base.png"/></div>
      </div>
      </div>
      <div className="homepageHeroSecondary"><span className="carouselSecondary">What we do</span></div>

      <div className="homepageContent">
      <div className="container">
        <div className="item"><h1>Greetings from our development team</h1><p>We know that organizing events is hard. Our app Friend.ly aims to take the guesswork out of group events and replace it with an easy to use, intuitive experience. Over the course of several weeks, we built this environment from the ground up with you in mind. Want to experience something new but don't want to do it alone? Easy, simply organize a new event on Friend.ly and meet others interested in the same thing. Not sure what you want to do? No problem, take a look at what people around you are interested in doing and join their group! Go on and take a look around, we hope you enjoy your stay 🙂</p><img src="http://www.site-fusion.co.uk/files/writeable/uploads/webfusion22842/image/stick_figures_team_puzzle1.png"/></div>
      </div>
      <div style={{color: '#ffffff', fontFamily: "'Roboto', sans-serif", backgroundColor:'rgba(21, 116, 205, 1)', padding: '4px'}}>© Copyright 2018 Aaron Chan - Derrick Theodore - Jackie Wang - Bill Eichhold</div>
      </div>

      </div>)
  }
}

export default Homepage