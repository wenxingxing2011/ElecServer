import React from 'react'
import {render} from 'react-dom'
import Header from './Header'
import Continer from './Continer'
import Footer from './Footer'
import './glob.css'
class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
	      <Header/>
	      	<Continer/>
	      <Footer/>
      	</div>
    );
  }
}

render(<App/>, document.getElementById('root')) 