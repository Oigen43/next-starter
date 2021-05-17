import { memo } from 'react';

import styles from './Block.module.scss';

function Block() {
  return <div className={styles.container}>AAAA</div>
}

export default memo(Block);
