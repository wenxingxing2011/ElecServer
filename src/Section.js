import React from 'react';

export default class Section extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      name :this.props.name,
    }
  };

  onNameChange=(e)=>{
    //判断是否有对应的key
    this.setState({name:e.target.value});
    console.log('item name :'+e.target.value);
  };
  render() {
    var name = this.state.name;
    var onNameChange = this.onNameChange;
    return (
      <section id='posts'>
        <article class='post'>
          <header>
            <input type='text' name ='itemname' placeholder = '请输入要监听的设备' onChange ={onNameChange}/>
          </header>
            <textarea name="linstentext" id="linstentext" ></textarea>
          <footer>
             Article Footer 
          </footer>
       </article>
      </section>
    );
  }
}
