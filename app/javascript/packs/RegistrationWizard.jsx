import React, { Component } from 'react';
import PropTypes from 'prop-types'

import FooStep from './registrationSteps/FooStep';
import BarStep from './registrationSteps/BarStep';
import BazStep from './registrationSteps/BazStep';

const STEPS = [FooStep, BarStep, BazStep]

export default class RegistrationWizard extends Component {
  static propTypes = {

  }

  state = {
    currentStep: 0,
    formData: {}
  }

  onNextClicked = data => {
    this.setState(state => {
      if (this.isLastStep(state)) {
        this.onLastStepSubmitted();
        return;
      };
      const nextState = state.currentStep + 1;
      return { currentStep: nextState, formData: Object.assign({}, state.formData, data) };
    });
  }

  isLastStep(state = this.state) {
    return state.currentStep == STEPS.length - 1;
  }

  onLastStepSubmitted() {
    alert('DONE!');
  }

  getCurrentStepComponent() {
    return STEPS[this.state.currentStep];
  }

  render() {
    const CurrentStep = this.getCurrentStepComponent();
    return (
      <div>
        <h3>REGISTRATION</h3>
        <CurrentStep onNextClicked={this.onNextClicked} formData={this.state.formData} />
      </div>
    );
  }
}
