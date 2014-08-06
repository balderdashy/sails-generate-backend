/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/

  // connection: 'localDiskDb',
  //
  // In a production environment (NODE_ENV==="production") Sails always uses
  // migrate:"safe" to protect inadvertent deletion of your data.
  // However during development, you have a few other options for convenience:
  // 1. safe  - never auto-migrate my database(s). I will do it myself (by hand)
  // 2. alter - auto-migrate, but attempt to keep my existing data (experimental)
  // 3. drop  - wipe/drop ALL my data and rebuild models every time I lift Sails
  //
  // migrate: 'alter'
};
