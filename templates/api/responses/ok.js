/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 * return res.ok(data, view);
 * return res.ok(data, redirectTo);
 * return res.ok(data, true);
 *
 * @param  {Object} data
 * @param  {Boolean|String} viewOrRedirect
 *         [optional]
 *          - pass string to render specified view
 *          - pass string with leading slash or http:// or https:// to do redirect
 */

module.exports = function sendOK (data, viewOrRedirect) {

	// Get access to `req` & `res`
  var req = this.req;
  var res = this.res;

  // Serve JSON (with optional JSONP support)
  function sendJSON (data) {
    if (!data) {
      return res.send();
    }
    else if ( req.options.jsonp && !req.isSocket ) {
      return res.jsonp(data);
    }
    else return res.json(data);
  }

  // Set status code
  res.status(200);

  // Log error to console
  this.req._sails.log.verbose('Sent OK (200) response:');
  this.req._sails.log.verbose(data);

	// Serve JSON (with optional JSONP support)
	if (req.wantsJSON || !viewOrRedirect) {
		sendJSON(data);
	}

	// Serve HTML view or redirect to specified URL
  if (typeof viewOrRedirect === 'string') {
    if (viewOrRedirect.match(/^(\/|http:\/\/|https:\/\/)/)) {
      return res.redirect(viewOrRedirect);
    }
    else return res.view(viewOrRedirect, data, function viewDoesntExist() {
      return sendJSON(data);
    });
  }
  else return res.view(data, function viewDoesntExist() {
    return sendJSON(data);
  });
};
