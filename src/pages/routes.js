export const scope = {
  PUBLIC: 'public',
  PRIVATE: 'private',
};

export const layout = {
  AUTH: 'auth',
  MAIN: 'main',
  NONE: null,
};

export const routes = {
  signIn: {
    path: '/sign-in',
    scope: scope.PUBLIC,
    layout: layout.AUTH,
  },
  home: {
    path: '/',
    scope: scope.PRIVATE,
    layout: layout.MAIN,
  },
};
