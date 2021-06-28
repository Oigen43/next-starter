import { useQuery } from 'react-query';

import { getCurrentUser } from './user.api';

export function useUser() {
  const { data, isLoading } = useQuery('currentUser', getCurrentUser, {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return {
    user: data,
    userLoading: isLoading,
  };
}
