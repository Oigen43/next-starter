import apiClient from 'services/api';

export const signIn = (data) => apiClient.post('/account/signin', data);
