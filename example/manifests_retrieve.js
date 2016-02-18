'use strict';

const Postmen = require('./../index');
const Credentials = require('./credentials');

let postmen = Postmen(Credentials.api_key, Credentials.region);

postmen.get('/manifests/put-your-manifests-here', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
