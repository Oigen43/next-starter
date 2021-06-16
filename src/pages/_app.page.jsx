import { useEffect } from 'react';
import PropTypes from 'prop-types';

import useUser from 'resources/user/user.hooks';

import 'styles/globals.scss';

/* eslint-disable react/jsx-props-no-spreading */
function App({ Component, pageProps }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }, [user]);

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
