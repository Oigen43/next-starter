import useSWR from 'swr';

import { getCurrentUser } from './user.api';

export default function useUser() {
  const { data, mutate, error } = useSWR('user', getCurrentUser);
  const loading = !data && !error;

  return {
    loading,
    error,
    user: data,
    mutate,
  };
}
