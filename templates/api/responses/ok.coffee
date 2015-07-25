###
# 200 (OK) Response
#
# Usage:
# return res.ok();
# return res.ok(data);
# return res.ok(data, 'auth/login');
#
# @param  {Object} data
# @param  {String|Object} options
#          - pass string to render specified view
###
module.exports = (data, options = {}) ->

  # Get access to `req`, `res`, & `sails`
  req = @req
  res = @res
  sails = req._sails
  sails.log.silly 'res.ok() :: Sending 200 ("OK") response'

  # Set status code
  res.status 200

  # If appropriate, serve data as JSON(P)
  return res.jsonx(data) if req.wantsJSON?

  # If second argument is a string, we take that to mean it refers to a view.
  # If it was omitted, use an empty object (`{}`)
  options = view: options if typeof options == 'string'

  # If a view was provided in options, serve it.
  # Otherwise try to guess an appropriate view, or if that doesn't
  # work, just send JSON.

  return res.view options.view, data: data if options.view

  res.guessView data: data, ->
    res.jsonx data
