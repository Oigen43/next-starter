import { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { useSignOut } from 'resources/account/account.hooks';

import styles from './styles.module.scss';

export default function MainLayout({ children }) {
  const { mutateAsync: signOut } = useSignOut();

  const onSignOut = useCallback(() => signOut(), [signOut]);

  return (
    <>
      <div className={styles.header}>
        <span>Main</span>
        <Button onClick={onSignOut}>Sign out</Button>
      </div>
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
