import React from 'react';

export default class Section extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  };
  render() {
    return (
      <section id='posts'>
        <article class='post'>
          <header>
            dcu.log
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
