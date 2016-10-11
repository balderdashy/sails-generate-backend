/**
 * sessionAuth
 *
 * A simple policy that allows any request from an authenticated user.
 *
 * For more about how this policy works and how to use it, see:
 *   http://sailsjs.com/anatomy/api/policies/session-auth-js
 */
module.exports = function sessionAuth(req, res, next) {

  // If `req.session.me` is set, then we know that this request originated
  // from a logged-in user.  So we can safely proceed to the next policy--
  // or, if this is the last policy, the relevant action.
  if (req.session.me) {
    return next();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.forbidden(new Error('You are not permitted to perform this action.'));
};
