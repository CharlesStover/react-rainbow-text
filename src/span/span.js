import React from 'react';

export default class Span extends React.PureComponent {
  render() {
    return (
      <span
        children={this.props.children}
        style={{
          color: this.props.color
        }}
      />
    );
  }
}
