import { Repo } from "./Repo";

export interface Tech {
	language: string;
	quantity: number;
	size: number;
	stargazers_count: number;
	repos: Repo[];
}
