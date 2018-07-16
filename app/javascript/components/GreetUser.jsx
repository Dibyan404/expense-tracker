import React from 'react';
import PropTypes from 'prop-types';

class GreetUser extends React.Component{
  constructor(props) {
     super(props);
     this.state = { 
        name: props.name,
     };
  }
  componentDidMount(){}
  render() {
     return (
        <div>
           <h1>Hello: {this.state.name}</h1>
        </div>
     )
  }
}
  GreetUser.PropTypes = {
    name: PropTypes.string
  }

export default GreetUser;
