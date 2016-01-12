import React from 'react';
import Section from './Section'
export default class Continer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    initcount: React.PropTypes.number,
  };

  state = {
  	count:this.props.initcount,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id ='continer'>
        <Section/> 
        <Section/> 
      </div>
    );
  }
}
