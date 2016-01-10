import React from 'react';

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
      <div><h1>Continer</h1></div>
    );
  }
}
