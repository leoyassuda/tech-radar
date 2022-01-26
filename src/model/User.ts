export interface User {
  id: number;
  login: string | undefined;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  repos: string;
  blog: string | undefined;
  location: string | undefined;
  twitter: string | undefined;
}