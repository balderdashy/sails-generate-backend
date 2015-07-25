var templateFiles = {
  views: '.',
  folder: [
    'api/controllers',
    'api/models',
    'api/policies',
    'api/services',
    'api/responses'
  ],
  copy: [
    'api/controllers/.gitkeep',
    'api/models/.gitkeep',
    'api/services/.gitkeep',
    'config/locales/de.json',
    'config/locales/en.json',
    'config/locales/es.json',
    'config/locales/fr.json',
    'config/locales/_README.md',
    'config/connections.js',
    'config/models.js',
    'config/blueprints.js',
    'config/bootstrap.js',
    'config/cors.js',
    'config/csrf.js',
    'config/http.js',
    'config/globals.js',
    'config/i18n.js',
    'config/local.js',
    'config/log.js',
    'config/policies.js',
    'config/routes.js',
    'config/sockets.js',
    'config/env/production.js',
    'config/env/development.js',
    'api/policies/sessionAuth.js',
    'api/responses/badRequest.js',
    'api/responses/forbidden.js',
    'api/responses/notFound.js',
    'api/responses/serverError.js',
    'api/responses/ok.js'
  ],
  template: [
    'config/session.js',
    'config/views.js'
  ]
};

/**
 * Build a formatted targets object
 *
 * @param templateFiles   {Object} - Contains template files
 * @param coffeeTemplate {Boolean} - Generate the coffee files if true
 *
 * For this given object:
 * {
 *   views: '.',
 *   folder: [
 *     'api/controllers'
 *   ],
 *   copy: [
 *     'api/controllers/.gitkeep',
 *     'config/locales/de.json',
 *     'config/locales/_README.md',
 *     'config/connections.js'
 *   ],
 *   template: [
 *     'config/session.js'
 *   ]
 * }
 * will be returned ():
 * {
 *   '.'                         : ['views'],
 *   './api/controllers'         : { folder: {} },
 *   './api/controllers/.gitkeep': { copy: '.gitkeep' },
 *   './config/locales/de.json'  : { copy: 'config/locales/de.json' },
 *   './config/locales/_README.md': { copy: 'config/locales/_README.md' },
 *   './config/connections.js'   : { copy: 'config/connections.js' },
 *   './config/session.js'       : { template: 'config/session.js' }
 * }
 *
 * @returns {Object}
 */
function buildTargets(templateFiles, coffeeTemplate) {
  var targets = {};
  var type;
  var destination;
  var filesName;
  var isGitkeepFile;
  var filePath;
  var path;

  for (type in templateFiles) {

    if (type === 'views') {
      destination = templateFiles[type];
      targets[destination] = [ type ];
      continue;
    }

    filesName = templateFiles[type];

    filesName.forEach(function (fileName) {
      filePath = fileName;
      path = {};

      if (type !== 'folder') {
        isGitkeepFile = fileName.indexOf('.gitkeep') !== -1;

        if (isGitkeepFile) {
          path = '.gitkeep';
        }
        else {
          if (coffeeTemplate) {
            filePath = filePath.replace(/.js$/, '.coffee')
          }

          path = filePath;
        }
      }

      destination = './' + filePath;
      targets[destination] = {};
      targets[destination][type] = path;
    });
  }

  return targets;
}

exports.templateFiles = templateFiles;
exports.buildTargets = buildTargets;
