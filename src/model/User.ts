import BaseModel from "./BaseModel";

export class User extends BaseModel {
  id: number;
  login: string | undefined;
  name: string;
  avatar: string;
  repos: string;
  blog: string | undefined;
  location: string | undefined;
  twitter: string | undefined;

  constructor(
    id: number,
    login: string,
    name: string,
    avatar: string,
    repos: string,
    blog: string,
    location: string,
    twitter: string
  ) {
    super();
    this.id = id;
    this.login = login;
    this.name = name;
    this.avatar = avatar;
    this.repos = repos;
    this.blog = blog;
    this.location = location;
    this.twitter = twitter;
  }
}

export default User;
