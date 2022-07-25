#!/usr/bin/env node
const execSync = require('child_process').execSync
const path = require('path')

execSync(`flutter run -d chrome`, {stdio: 'inherit', cwd: path.join(__dirname, '../../../client')})