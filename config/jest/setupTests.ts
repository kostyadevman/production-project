import '@testing-library/jest-dom';

const nodeFetch = require('node-fetch');

global.fetch = nodeFetch;
global.Request = nodeFetch.Requist;
