'use strict'

require('source-map-support').install()
require('ts-node').register()

exports.onCreatePage = require('./src/libs/createPage').onCreatePage
