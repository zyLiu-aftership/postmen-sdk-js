'use strict';

const Postmen = require('./../index');
const Credentials = require('./credentials');

let postmen = Postmen(Credentials.api_key, Credentials.region);

// get all rate labels
postmen.get('/rates', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});

// get a particular rate labels
postmen.get('/rates/put-your-rate-label-here', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
