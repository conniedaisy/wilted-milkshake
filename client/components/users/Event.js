import React from 'react';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.event.title}
      </div>
    )
  }
};