import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class BarStep extends Component {
  static propTypes = {
    onNextClicked: PropTypes.func.isRequired,
    formData: PropTypes.object
  }

  onNextClicked = () => {
    this.props.onNextClicked()
  }

  render() {
    return (
      <div>
        <h4>Bar Step</h4>
        <pre>{JSON.stringify(this.props.formData)}</pre>
        <button onClick={this.onNextClicked}>NEXT</button>
      </div>
    )
  }
}
