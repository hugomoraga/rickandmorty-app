interface IEpisode {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
    image: string;

}

export class Episode implements IEpisode {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
    image: string;
}