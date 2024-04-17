import { Source } from '../src/types';
import findDuplicates from "../src/findDuplicates"

describe('findDuplicates', () => {
    it('returns correct duplicates', () => {
        const sources: Source[] = [
            { url: 'http://example.com/a', spam_score: 10, domain_authority: 100 },
            { url: 'http://example.com/b', spam_score: 20, domain_authority: 100 },
            { url: 'http://example.com/c', spam_score: 10, domain_authority: 101 }
        ];
        expect(findDuplicates('spam_score', sources)).toEqual(['http://example.com/a', 'http://example.com/c']);
        expect(findDuplicates('domain_authority', sources)).toEqual(['http://example.com/a', 'http://example.com/b']);
    });
});
