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
  isAuthenticated: boolean;
  user: User;
};
