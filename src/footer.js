import React from 'react';
export default class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <footer id="page_footer">
        <h2>Footer</h2>
      </footer>
    );
  }
}
