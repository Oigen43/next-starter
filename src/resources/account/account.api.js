import api from 'services/api.service';

export const signIn = (data) => api.post('/account/signin', data);

export const signUp = (data) => api.post('/account/signup', data);

export const signOut = (data) => api.post('/account/logout', data);
