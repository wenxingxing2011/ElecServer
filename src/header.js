import React from 'react';


export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) { 
    super(props);
  }

  render() {
    return (
      	<header id = 'page_header'>
			<h2 >herder2</h2>
			<nav >
	            <ul>
	                <li><a href="#">Home</a></li>
	                <li><a href="#">One</a></li>
	                <li><a href="#">Two</a></li>
	                <li><a href="#">Three</a></li>
	            </ul>
			</nav>
		</header>
    );
  }
}
