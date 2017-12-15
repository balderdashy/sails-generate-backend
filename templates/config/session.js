/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For a detailed rundown of _all_ available options for configuring session support
 * in Sails, check out:
 * http://sailsjs.com/docs/reference/configuration/sails-config-session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '<%= secret %>',


  /***************************************************************************
  *                                                                          *
  * Set options for the session cookie. See                                  *
  * https://github.com/expressjs/session#cookie for more info.               *
  *                                                                          *
  ***************************************************************************/

  // cookie: {
  //   // Cookie expiration in milliseconds.
  //   // For example, use 24 * 60 * 60 * 1000 to make sessions expire in 24 hours.
  //   // Default is null, making it a browser cookie, so the session will
  //   // last only for as long as the browser is open.
  //   maxAge: null,
  //   // Path that the cookie is valid for.
  //   path: '/',
  //   // Should the session cookie be HTTP-only? (See https://www.owasp.org/index.php/HttpOnly)
  //   httpOnly: true,
  //   // Should the session cookie be secure? (only valid for HTTPS sites)
  //   secure: false
  // },

  /***************************************************************************
  *                                                                          *
  * Uncomment the following lines to set up a Redis session store that can   *
  * be shared across multiple Sails.js servers.                              *
  *                                                                          *
  * Requires connect-redis (https://www.npmjs.com/package/connect-redis)     *
  *                                                                          *
  * See http://bit.ly/redis-session-config for more information about how to *
  * configure                                                                *
  *                                                                          *
  ***************************************************************************/

  // adapter: 'connect-redis',

  /***************************************************************************
  *                                                                          *
  * The following values are optional, if no options are set a redis         *
  * instance running on localhost is expected. Read more about options at:   *
  *                                                                          *
  * https://github.com/visionmedia/connect-redis                             *
  *                                                                          *
  ***************************************************************************/

  // host: 'localhost',
  // port: 6379,
  // ttl: <redis session TTL in seconds>,
  // db: 0,
  // pass: <redis auth password>,
  // prefix: 'sess:',


  /***************************************************************************
  *                                                                          *
  * Uncomment the following lines to set up a MongoDB session store that can *
  * be shared across multiple Sails.js servers.                              *
  *                                                                          *
  * Requires connect-mongo (https://www.npmjs.com/package/connect-mongo)     *
  * Use version 0.8.2 with Node version <= 0.12                              *
  * Use the latest version with Node >= 4.0                                  *
  *                                                                          *
  ***************************************************************************/

  // adapter: 'mongo',
  // url: 'mongodb://user:password@localhost:27017/dbname', // user, password and port optional

  /***************************************************************************
  *                                                                          *
  * Optional Values:                                                         *
  *                                                                          *
  * See https://github.com/kcbanner/connect-mongo for more                   *
  * information about connect-mongo options.                                 *
  *                                                                          *
  * See http://bit.ly/mongooptions for more information about options        *
  * available in `mongoOptions`                                              *
  *                                                                          *
  ***************************************************************************/

  // collection: 'sessions',
  // stringify: true,
  // mongoOptions: {
  //   server: {
  //     ssl: true
  //   }
  // }

  /****************************************************************************
   *                                                                          *
   * Uncomment the following lines to use your Cassandra adapter as a session *
   * store                                                                    *
   *                                                                          *
   * contactPoints: the list of cassandra instances                           *
   * keyspace: cassandra keyspace, must be created before running sails       *
   *                                                                          *
   ***************************************************************************/

  //adapter: 'cassandra',
  //contactPoints : [ '127.0.0.1' ],
  //keyspace: 'sessions',

  /****************************************************************************
   *                                                                          *
   * Optional Values for cassandra                                            *
   * ttl: how long, in seconds, to save the session. if the session cookie    *
   *      have maxAge, it will be used, otherwise, 86400 (one day).           *
   * table: the table name to use                                             *
   * readConsistency: cassandra read consistency, defaults to 1.              *
   * writeConsistency: cassandra write consistency, defaults to any.          *
   *   valid consistency values are:
   *      any:          0x00,                                                 *
   *      one:          0x01,                                                 *
   *      two:          0x02,                                                 *
   *      three:        0x03,                                                 *
   *      quorum:       0x04,                                                 *
   *      all:          0x05,                                                 *
   *      localQuorum:  0x06,                                                 *
   *      eachQuorum:   0x07,                                                 *
   *      serial:       0x08,                                                 *
   *      localSerial:  0x09,                                                 *
   *      localOne:     0x0a                                                  *
   *                                                                          *
   ***************************************************************************/

  //ttl: 24 * 60 * 60 * 7,
  //table: 'connect_session',
  //readConsistency: 1,
  //writeConsistency: 0,

};
