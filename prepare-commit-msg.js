#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

const [, feature] =
  execSync('git branch')
    .toString()
    .match(/\* feature\/(.+)$/m) || []
if (!feature) return

const [msgPath] = process.argv.slice(-2)
const msg = fs
  .readFileSync(msgPath)
  .toString()
  .replace(/^\w+-\d+ /, '')
fs.writeFileSync(msgPath, `${feature} ${msg}`)
