export type UrlItem = {
  shortened: string;
  original: string;
  base62: string;
};

export type User = {
  name: string;
  email: string;
  image: string;
};

export type Auth = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
};

export type AuthResponse = {
  authenticated: boolean;
  user: User;
};
