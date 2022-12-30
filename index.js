const express = require('express');
const { mockettaro } = require('mockettaro');
const logger = require("@marketto/js-logger").global();

const app = express();
app.use('/server', mockettaro({
    //foldername to seek for folderTree / json or xml files
    directory : 'server', //default: './'
    //Current working directory to use as a targed for the given directory
    cwd: __dirname, //default: process.cwd()
    responseDelay: 1000, //default: 0
    cacheLifetime: 1000, //default: 3000
    verbose: false, //default
    errors: true, //default
    info: true //default
}));

const port = 3700;
app.listen(port, () => {
    logger.info(`MFE test server running on port ${port}`);
});