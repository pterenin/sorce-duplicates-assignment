"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const findDuplicates_1 = __importDefault(require("./findDuplicates"));
const FILE_PATH = './data.json';
fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        const sources = jsonData.idina_response.sources;
        const duplicateSpamScores = (0, findDuplicates_1.default)('spam_score', sources);
        const duplicateDomainAuthorities = (0, findDuplicates_1.default)('domain_authority', sources);
        const result = { duplicateSpamScores, duplicateDomainAuthorities };
        console.log(result);
    }
    catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
