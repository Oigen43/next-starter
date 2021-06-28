import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';

import PageConfig from './PageConfig';

import 'styles/globals.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageConfig>
        <Component {...pageProps} />
      </PageConfig>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
