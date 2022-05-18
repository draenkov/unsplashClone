import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { store } from '../../store';

const Launcher = ({ children }) => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </React.StrictMode>
);

Launcher.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Launcher;
