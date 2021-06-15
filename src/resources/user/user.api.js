import apiClient from 'services/api.service';

export const signIn = (data) => apiClient.post('/account/signin', data);
