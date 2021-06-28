export const scope = {
  PUBLIC: 'public',
  PRIVATE: 'private',
  NONE: null,
};

export const layout = {
  AUTH: 'auth',
  MAIN: 'main',
  NONE: null,
};

export const path = {
  home: '/',
  error: '/_error',
  signIn: '/sign-in',
  signUp: '/sign-up',
  profile: '/profile',
};

export const configuration = {
  home: {
    path: path.home,
    scope: scope.PRIVATE,
    layout: layout.MAIN,
  },
  error: {
    path: path.error,
    scope: scope.NONE,
    layout: layout.NONE,
  },
  signIn: {
    path: path.signIn,
    scope: scope.PUBLIC,
    layout: layout.AUTH,
  },
  signUp: {
    path: path.signUp,
    scope: scope.PUBLIC,
    layout: layout.AUTH,
  },
  profile: {
    path: path.profile,
    scope: scope.PRIVATE,
    layout: layout.MAIN,
  },
};

export const configurations = Object.values(configuration);
