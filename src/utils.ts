import { ApiResponse } from './types';

export const validateSources = (response: ApiResponse, minDomainAuthority: number): boolean => {
    return response.idina_response.sources.every(source => source.domain_authority >= minDomainAuthority);
};