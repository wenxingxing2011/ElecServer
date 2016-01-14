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

  onCountChange=(e)=> {
    var cnt = parseInt(e.target.value)
    this.setState({count:cnt});
    console.log(this.state.count);
  };


  render() {
    var onCountChange =this.onCountChange;
    var sectionItems = [];
    for (var i = 0; i < this.state.count; i++) {
      sectionItems.push(<Section key = {'sectionItem' +i}/>);
    };
    return (
      <div>
      <div id = 'continerheader'>
        <text>清输入监听框数量：</text>
        <input type='number' name ='itemcount' min="1" max="6" onChange ={onCountChange}/>
      </div> 
      <div id ='continer'>
        {sectionItems}
      </div>
      </div>
    ); 
  }
}
