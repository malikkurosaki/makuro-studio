#!/usr/bin/env node
const execSync = require('child_process').execSync
const path = require('path')

execSync(`nodemon server.js`, {stdio: 'inherit', cwd: path.join(__dirname, '../../../server')})