import { validateSources } from '../src/utils';
import { ApiResponse } from '../src/types';

describe('validateSources', () => {
    it('should return true if all sources have domain authority above the threshold', () => {
        const mockData: ApiResponse = {
            idina_response: {
                sources: [
                    { url: "example.com", spam_score: 1, domain_authority: 100 },
                    { url: "foo.com", spam_score: 2, domain_authority: 101 }
                ]
            }
        };
        expect(validateSources(mockData, 99)).toBe(true);
    });

    it('should return false if any source has domain authority below the threshold', () => {
        const mockData: ApiResponse = {
            idina_response: {
                sources: [
                    { url: "example.com", spam_score: 1, domain_authority: 100 },
                    { url: "bar.com", spam_score: 1, domain_authority: 98 }
                ]
            }
        };
        expect(validateSources(mockData, 99)).toBe(false);
    });
});
