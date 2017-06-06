import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import RegistrationWizard from './RegistrationWizard';

const ReactComponentsRegistry = { RegistrationWizard };

document.addEventListener('DOMContentLoaded', () => {
  [].forEach.call(document.querySelectorAll('.react-element'), element => {
    console.log(element);
    const ComponentToRender = ReactComponentsRegistry[element.dataset.reactComponent];
    ReactDOM.render(
      <ComponentToRender {...JSON.parse(element.dataset.reactProps || '{}')} />,
      element,
    )
  });
});
