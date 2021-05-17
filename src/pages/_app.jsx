import PropTypes from 'prop-types';

import 'styles/globals.scss';

/* eslint-disable react/jsx-props-no-spreading */
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
