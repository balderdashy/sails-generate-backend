/**
 * Default model configuration
 * (sails.config.models)
 *
 * Your default project-wide model settings. Can also be overridden on a
 * per-model basis by providing a top-level property with the same name
 * in that model definition.
 *
 * For details about all available model settings, see:
 * http://sailsjs.org/documentation/reference/configuration/sails-config-models
 *
 * For more general background on Sails model settings, and how to configure
 * them on a project-wide or per-model basis, see:
 * http://sailsjs.org/documentation/concepts/models-and-orm/model-settings
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/

  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * > Note that, in production, this is automatically set to `safe`, no      *
  * > matter what.  For more info, see:                                      *
  * > http://sailsjs.org/documentation/concepts/ORM/model-settings           *
  *                                                                          *
  ***************************************************************************/

  // migrate: 'alter'

};
