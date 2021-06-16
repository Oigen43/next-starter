import api from 'services/api.service';

export const getCurrentUser = () => api.get('/users/current');

export const signIn = (data) => api.post('/account/signin', data);
