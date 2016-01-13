import React from 'react';
import Section from './Section'
export default class Continer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };



  constructor(props) {
    super(props);
    this.state = {
      count:2,
    };
  };

  _onCountChange(inputname, e) {
    this.setState({
      count: e.target.value,
    });
    console.log([`${inputName}Value`]);
  };
  render() {
    return (
      <div>
      <div id = 'continerheader'>
        <text>清输入监听框数量：</text>
        <input type='number' name ='itemcount' min="1" max="6" onChange ={this._onCountChange}/>
      </div>
      <div id ='continer'>
        <Section/> 
        <Section/> 
      </div>
      </div>
    ); 
  }
}
