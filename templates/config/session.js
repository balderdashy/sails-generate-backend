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
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.session.html
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
  * Set the session cookie expire time The maxAge is set by milliseconds,    *
  * the example below is for 24 hours                                        *
  *                                                                          *
  ***************************************************************************/

  // cookie: {
  //   maxAge: 24 * 60 * 60 * 1000
  // },

  /***************************************************************************
  *                                                                          *
  * In production, uncomment the following lines to set up a shared redis    *
  * session store that can be shared across multiple Sails.js servers        *
  ***************************************************************************/

  // adapter: 'redis',

  /***************************************************************************
  *                                                                          *
  * The following values are optional, if no options are set a redis         *
  * instance running on localhost is expected. Read more about options at:   *
  * https://github.com/visionmedia/connect-redis                             *
  *                                                                          *
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
  * Uncomment the following lines to use your Mongo adapter as a session     *
  * store                                                                    *
  *                                                                          *
  ***************************************************************************/

  // adapter: 'mongo',
  // host: 'localhost',
  // port: 27017,
  // db: 'sails',
  // collection: 'sessions',

  /***************************************************************************
  *                                                                          *
  * Optional Values:                                                         *
  *                                                                          *
  * # Note: url will override other connection settings url:                 *
  * 'mongodb://user:pass@host:port/database/collection',                     *
  *                                                                          *
  ***************************************************************************/

  // username: '',
  // password: '',
  // auto_reconnect: false,
  // ssl: false,
  // stringify: true

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
