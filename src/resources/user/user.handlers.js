import Router from 'next/router';

import apiClient from 'services/api.service';
import queryClient from 'services/queryClient.service';

import { path } from 'pages/routes';

apiClient.on('error', async (error) => {
  if (error.status === 401 && Router.pathname !== path.signIn) {
    queryClient.clear();
    await Router.push(path.signIn);
  }
});
