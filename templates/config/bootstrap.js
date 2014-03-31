/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */
(function () {
	'use strict';
	module.exports = {
		bootstrap: function (cb) {
			sails.on('lifted', function () {
				/* Do something after sails lifted */
			});

			// It's very important to trigger this callack method when you are finished 
			// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
			cb();
		}
	};
}());