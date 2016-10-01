/**
 * Default model settings
 * (sails.config.models)
 *
 * Your default, project-wide model settings. Can also be overridden on a
 * per-model basis by setting a top-level properties in the model definition.
 *
 * For details about all available model settings, see:
 * http://sailsjs.org/documentation/reference/configuration/sails-config-models
 *
 * For more general background on Sails model settings, and how to configure
 * them on a project-wide or per-model basis, see:
 * http://sailsjs.org/documentation/concepts/models-and-orm/model-settings
 */

module.exports.models = {


  /*****************************************************************************
  *                                                                            *
  * Your app's default datastore.                                              *
  *                                                                            *
  * > The `datastore` setting indicates which of your configured datastores    *
  * > will be used when executing built-in model methods like `.create()`      *
  * > and `.find()`.  It should match up with the name of one of the keys      *
  * > in your datastore configuration (see `config/datastores.js`).            *
  * >                                                                          *
  * > For more info, see:                                                      *
  * > http://sailsjs.org/documentation/concepts/ORM/model-settings#?datastore  *
  * > http://sailsjs.org/documentation/reference/configuration/datastores      *
  *                                                                            *
  *****************************************************************************/

  // datastore: 'localDiskDb',


  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * > Note that, when running in a production environment, this will be      *
  * > automatically set to `migrate: 'safe'`, no matter what you configure   *
  * > here.  This is a failsafe to prevent Sails from accidentally running   *
  * > auto-migrations on your production database.                           *
  * >                                                                        *
  * > For more info, see:                                                    *
  * > http://sailsjs.org/documentation/concepts/ORM/model-settings#?migrate  *
  *                                                                          *
  ***************************************************************************/

  // migrate: 'alter'


};
