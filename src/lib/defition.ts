export type GithubUser = {
  user: {
    avatar_url: string;
    followers: number;
    following: number;
    login: string;
  };
  repos: {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    updated_at: string;
  }[];
};