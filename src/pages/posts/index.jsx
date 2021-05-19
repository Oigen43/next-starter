import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postsActions } from 'resources/posts/posts.slice';
import { selectPosts } from 'resources/posts/posts.selectors';

import styles from './posts.module.scss';

export default function Index() {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);

  useEffect(() => {
    async function init() {
      await dispatch(postsActions.fetchPosts());
    }

    init();
  }, [dispatch]);

  return (
    <div>
      {posts.map((p) => (
        <div
          key={p.id}
          className={styles.post}
        >
          {p.title}
        </div>
      ))}
    </div>
  );
}
