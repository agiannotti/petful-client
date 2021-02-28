import React, { Component } from 'react';
import Box from '../Box/box';
import API from '../Service/Service';
import './Adopt.js';

export default class Adopt extends Component {
  state = {
    cat: {},
    dog: {},
    people: [],
    available: true,
  };
  handleClick() {
    console.log('click');
  }
  componentDidMount() {
    API.getCat().then((cat) => {
      this.setState({ cat });
    });
    API.getDog().then((dog) => {
      this.setState({ dog });
    });
  }
  render() {
    return (
      <>
        <div className='pets'>
          {this.state.cat && (
            <Box
              buttonClicked={this.buttonClicked}
              pet={this.state.cat}
              adoptable={this.state.adoptable}
            />
          )}
          {this.state.dog && (
            <Box
              buttonClicked={this.buttonClicked}
              pet={this.state.dog}
              adoptable={this.state.adoptable}
            />
          )}
        </div>
      </>
    );
  }
}
