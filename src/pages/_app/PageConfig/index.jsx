import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { useUser } from 'resources/user/user.hooks';

import * as routes from 'pages/routes';

import PrivateScope from './PrivateScope';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';

const scopeToComponent = {
  [routes.scope.PRIVATE]: PrivateScope,
  [routes.scope.PUBLIC]: ({ children }) => children,
  [routes.layout.NONE]: ({ children }) => children,
};

const layoutToComponent = {
  [routes.layout.MAIN]: MainLayout,
  [routes.layout.AUTH]: AuthLayout,
  [routes.layout.NONE]: ({ children }) => children,
};

function PageConfig({ children }) {
  const router = useRouter();
  const { user, userLoading } = useUser();

  const page = routes.configurations.find((r) => r.path === router.route);
  const Scope = scopeToComponent[page.scope];
  const Layout = layoutToComponent[page.layout];

  if (userLoading) return null;

  if (page.scope === routes.scope.PUBLIC && user) {
    router.push(router.query.to || routes.path.home);
    return null;
  }

  if (page.scope === routes.scope.PRIVATE && !user) {
    let redirectPath = routes.path.signIn;

    if (router.pathname !== routes.path.home) {
      const searchParams = new URLSearchParams({ to: router.pathname });
      redirectPath = `${redirectPath}/?${searchParams.toString()}`;
    }

    router.push(redirectPath);
    return null;
  }

  return (
    <Scope>
      <Layout>
        {children}
      </Layout>
    </Scope>
  );
}

PageConfig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageConfig;
