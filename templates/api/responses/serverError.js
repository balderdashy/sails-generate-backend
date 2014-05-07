/**
 * 500 (Server Error) Handler
 *
 * Usage:
 * return res.serverError();
 * return res.serverError(err);
 * return res.serverError(err, view);
 * return res.serverError(err, redirectTo);
 *
 * @param {Array|Object|String|Error} err     [optional]
 *
 * NOTE:
 * If something throws in a policy or controller, or an internal
 * error is encountered, Sails will call `res.serverError()`
 * automatically.
 */

module.exports = function serverError (err, viewOrRedirect) {

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
  res.status(500);

  // Log error to console
  this.req._sails.log.error('Server Error (500)');
  this.req._sails.log.error(err);

  // Only include errors in response if application environment
  // is not set to 'production'.  In production, we shouldn't
  // send back any identifying information about errors.
  if (this.req._sails.config.environment === 'production') {
    err = undefined;
  }

  // If the user-agent wants JSON, always respond with JSON
  if (req.wantsJSON || !viewOrRedirect) {
    return sendJSON(err);
  }

  // Serve HTML view or redirect to specified URL
  if (typeof viewOrRedirect === 'string') {
    if (viewOrRedirect.match(/^(\/|http:\/\/|https:\/\/)/)) {
      return res.redirect(viewOrRedirect);
    }
    else return res.view(viewOrRedirect, err, function viewDoesntExist() {
      return sendJSON(err);
    });
  }
  else return res.view('500', err, function viewDoesntExist() {
    return sendJSON(err);
  });
};
