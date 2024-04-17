export interface Source {
    url: string;
    spam_score: number;
    domain_authority: number;
}

export interface IdinaResponse {
    sources: Source[];
}

export interface ApiResponse {
    idina_response: IdinaResponse;
}

export type Duplicates = string[];