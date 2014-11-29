'use strict';

var mongoose = require('mongoose');

module.exports = {
	'development':{
		url: 'mongodb://localhost:27017/getperiodicorg_periodic_dev',
		mongoose: mongoose,
		mongooptions:{}
	},
	'qa':{
		url: 'mongodb://localhost:27017/getperiodicorg_periodic_qa',
		mongoose: mongoose,
		mongooptions:{}
	},
	'production':{
		url: 'mongodb://localhost:27017/getperiodicorg_periodic_prod',
		mongoose: mongoose,
		mongooptions:{}
	}
};