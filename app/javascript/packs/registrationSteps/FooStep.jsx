import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class FooStep extends Component {
  static propTypes = {
    onNextClicked: PropTypes.func.isRequired,
    formData: PropTypes.object
  }

  onNextClicked = () => {
    const inputVal = this.inputElem.value;
    if (inputVal === 'cake') {
      alert('CANNOT BE CAKE!');
      return;
    }
    this.props.onNextClicked({ notCake: inputVal });
  }

  setInput = inputElem => {
    this.inputElem = inputElem;
  }

  render() {
    return (
      <div>
        <h4>Foo Step</h4>
        <pre>{JSON.stringify(this.props.formData)}</pre>
        <input type="text" ref={this.setInput} />
        <button onClick={this.onNextClicked}>NEXT</button>
      </div>
    );
  }
}
