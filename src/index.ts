import fs from 'fs';
import findDuplicates from './findDuplicates';
import { Source, ApiResponse } from './types';

const FILE_PATH: string = './data.json';

fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData: ApiResponse = JSON.parse(data);
        const sources: Source[] = jsonData.idina_response.sources;
        const duplicateSpamScores = findDuplicates('spam_score', sources);
        const duplicateDomainAuthorities = findDuplicates('domain_authority', sources);

        const result = { duplicateSpamScores, duplicateDomainAuthorities }
        console.log(result);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
