import api from 'services/api.service';

export const getCurrentUser = () => api.get('/users/current');

export const updateCurrentUser = () => api.put('/users/current');
