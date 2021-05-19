import apiClient from 'services/api.service';

export const list = () => apiClient.get('/posts');
