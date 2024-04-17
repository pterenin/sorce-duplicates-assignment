import { Source, Duplicates } from './types';

const findDuplicates = (key: keyof Source, data: Source[]): Duplicates => {
    const countMap: Map<any, string[]> = new Map();
    const duplicates: Duplicates = [];

    data.forEach((source: Source) => {
        const value = source[key];
        if (countMap.has(value)) {
            countMap.get(value)!.push(source.url); // The '!' is a non-null assertion operator.
        } else {
            countMap.set(value, [source.url]);
        }
    });

    countMap.forEach((urls: string[]) => {
        if (urls.length > 1) {
            duplicates.push(...urls);
        }
    });

    return duplicates;
}

export default findDuplicates;
