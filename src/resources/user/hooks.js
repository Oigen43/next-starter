import useSWR from 'swr';

import { signIn } from './api';

export default function useUser() {
  const { data, mutate, error } = useSWR('user', signIn);
  const loading = !data && !error;

  return {
    loading,
    error,
    user: data,
    mutate,
  };
}
