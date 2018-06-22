import React, { Component } from "react";

class ConnectComponent extends Component {
  constructor(view, presenter) {
    super();
    this.view = view;
    this.presenter = presenter;
  }

  render() {
    const _presenter = new this.presenter();
    return React.createElement(this.view, {
      ...this.props,
      presenter: _presenter
    });
  }
}

export default ConnectComponent;
