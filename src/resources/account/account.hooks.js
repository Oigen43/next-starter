import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

import { path } from 'pages/routes';

import { signIn, signOut } from './account.api';

export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation('currentUser', signIn, {
    onSettled: async (data) => {
      queryClient.setQueryData('currentUser', data);
    },
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(signOut, {
    onSuccess: () => {
      queryClient.clear();
      router.push(path.signIn);
    },
  });
}
