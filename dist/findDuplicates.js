"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findDuplicates = (key, data) => {
    const countMap = new Map();
    const duplicates = [];
    data.forEach((source) => {
        const value = source[key];
        if (countMap.has(value)) {
            countMap.get(value).push(source.url); // The '!' is a non-null assertion operator.
        }
        else {
            countMap.set(value, [source.url]);
        }
    });
    countMap.forEach((urls) => {
        if (urls.length > 1) {
            duplicates.push(...urls);
        }
    });
    return duplicates;
};
exports.default = findDuplicates;
