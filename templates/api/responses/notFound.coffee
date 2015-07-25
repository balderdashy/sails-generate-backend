###
# 404 (Not Found) Handler
#
# Usage:
# return res.notFound();
# return res.notFound(err);
# return res.notFound(err, 'some/specific/notfound/view');
#
# e.g.:
# ```
# return res.notFound();
# ```
#
# NOTE:
# If a request doesn't match any explicit routes (i.e. `config/routes.js`)
# or route blueprints (i.e. "shadow routes", Sails will call `res.notFound()`
# automatically.
###
module.exports = (data, options = {}) ->

# Get access to `req`, `res`, & `sails`
  req = @req
  res = @res
  sails = req._sails

  # Set status code
  res.status 404

  # Log error to console
  if data?
    sails.log.verbose 'Sending 404 ("Not Found") response: \n', data
  else
    sails.log.verbose 'Sending 404 ("Not Found") response'

  # Only include errors in response if application environment
  # is not set to 'production'.  In production, we shouldn't
  # send back any identifying information about errors.
  data = undefined if sails.config.environment == 'production'

  # If the user-agent wants JSON, always respond with JSON
  return res.jsonx(data) if req.wantsJSON?

  # If second argument is a string, we take that to mean it refers to a view.
  # If it was omitted, use an empty object (`{}`)
  options = view: options if typeof options == 'string'

  # If a view was provided in options, serve it.
  # Otherwise try to guess an appropriate view, or if that doesn't
  # work, just send JSON.
  return res.view options.view, data: data if options.view?

  res.view '404', data: data, (err, html) ->
    # If a view error occured, fall back to JSON(P).
    if err
      # Additionally:
      # • If the view was missing, ignore the error but provide a verbose log.
      if err.code == 'E_VIEW_FAILED'
        sails.log.verbose 'res.notFound() :: Could not locate view
          for error page (sending JSON instead).  Details: ', err
      else
        sails.log.warn 'res.notFound() :: When attempting to render error page
          view, an error occured (sending JSON instead).  Details: ', err

      return res.jsonx(data)

    res.send html
