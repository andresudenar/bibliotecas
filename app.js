'use strict';

const express = require('express'),
    pug = require('pug'),
    routes = require('./routes/index'),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000);

let app = express();

app
	.set( 'views', viewDir )
	.set( 'view engine', 'pug' )
    .set( 'port', port )

    .use(publicDir)
    .use(routes);

module.exports = app;