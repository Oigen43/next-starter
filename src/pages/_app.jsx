import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from 'resources/store';

import 'styles/globals.scss';

/* eslint-disable react/jsx-props-no-spreading */
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
