var templateFiles = {
  simpleJs: {
    given: {
      templateFiles: {
        views: '.',
        folder: [
          'api/controllers'
        ],
        copy: [
          'api/controllers/.gitkeep',
          'config/locales/de.json',
          'config/locales/_README.md',
          'config/connections.js'
        ],
        template: [
          'config/session.js'
        ]
      },
      coffeeTemplate: false
    },
    expected: {
      '.': ['views'],
      './api/controllers'         : {folder: {}},
      './api/controllers/.gitkeep': {copy: '.gitkeep'},
      './config/locales/de.json'  : {copy: 'config/locales/de.json'},
      './config/locales/_README.md': {copy: 'config/locales/_README.md'},
      './config/connections.js'   : {copy: 'config/connections.js'},
      './config/session.js'       : {template: 'config/session.js'}
    }
  },

  simpleCoffee: {
    given: {
      templateFiles: {
        views: '.',
        folder: [
          'api/controllers'
        ],
        copy: [
          'api/controllers/.gitkeep',
          'config/locales/de.json',
          'config/locales/_README.md',
          'config/connections.js'
        ],
        template: [
          'config/session.js'
        ]
      },
      coffeeTemplate: true
    },
    expected: {
      '.': ['views'],
      './api/controllers': {folder: {}},
      './api/controllers/.gitkeep': {copy: '.gitkeep'},
      './config/locales/de.json'  : {copy: 'config/locales/de.json'},
      './config/locales/_README.md': {copy: 'config/locales/_README.md'},
      './config/connections.coffee'   : {copy: 'config/connections.coffee'},
      './config/session.coffee'       : {template: 'config/session.coffee'}
    }
  },
  originalJs: {
    expected: {
      '.': ['views'],
      './api/controllers': {folder: {}},
      './api/models': {folder: {}},
      './api/policies': {folder: {}},
      './api/services': {folder: {}},
      './api/responses': {folder: {}},

      './api/controllers/.gitkeep': {copy: '.gitkeep'},
      './api/models/.gitkeep': {copy: '.gitkeep'},
      './api/services/.gitkeep': {copy: '.gitkeep'},
      './config/connections.js': {copy: 'config/connections.js'},
      './config/models.js': {copy: 'config/models.js'},
      './config/blueprints.js': {copy: 'config/blueprints.js'},
      './config/bootstrap.js': {copy: 'config/bootstrap.js'},
      './config/cors.js': {copy: 'config/cors.js'},
      './config/csrf.js': {copy: 'config/csrf.js'},
      './config/http.js': {copy: 'config/http.js'},
      './config/globals.js': {copy: 'config/globals.js'},
      './config/i18n.js': {copy: 'config/i18n.js'},
      './config/local.js': {copy: 'config/local.js'},
      './config/log.js': {copy: 'config/log.js'},
      './config/policies.js': {copy: 'config/policies.js'},
      './config/routes.js': {copy: 'config/routes.js'},
      './config/sockets.js': {copy: 'config/sockets.js'},

      './config/session.js': {template: 'config/session.js'},
      './config/views.js': {template: 'config/views.js'},

      './config/locales/de.json': {copy: 'config/locales/de.json'},
      './config/locales/en.json': {copy: 'config/locales/en.json'},
      './config/locales/es.json': {copy: 'config/locales/es.json'},
      './config/locales/fr.json': {copy: 'config/locales/fr.json'},
      './config/locales/_README.md': {copy: 'config/locales/_README.md'},

      './config/env/production.js': {copy: 'config/env/production.js'},
      './config/env/development.js': {copy: 'config/env/development.js'},

      './api/policies/sessionAuth.js': {copy: 'api/policies/sessionAuth.js'},

      './api/responses/badRequest.js': {copy: 'api/responses/badRequest.js'},
      './api/responses/forbidden.js': {copy: 'api/responses/forbidden.js'},
      './api/responses/notFound.js': {copy: 'api/responses/notFound.js'},
      './api/responses/serverError.js': {copy: 'api/responses/serverError.js'},
      './api/responses/ok.js': {copy: 'api/responses/ok.js'},

      // Excluding `res.negotiate()` from the generated files for now,
      // since it's best if its definition is consistent between projects.
      // It can still be overridden by creating api/responses/negotiate.js.
      // './api/responses/negotiate.js': { copy: 'api/responses/negotiate.js' },
    }
  },
  originalCoffee: {
    expected: {
      '.': ['views'],
      './api/controllers': {folder: {}},
      './api/models': {folder: {}},
      './api/policies': {folder: {}},
      './api/services': {folder: {}},
      './api/responses': {folder: {}},

      './api/controllers/.gitkeep': {copy: '.gitkeep'},
      './api/models/.gitkeep': {copy: '.gitkeep'},
      './api/services/.gitkeep': {copy: '.gitkeep'},
      './config/connections.coffee': {copy: 'config/connections.coffee'},
      './config/models.coffee': {copy: 'config/models.coffee'},
      './config/blueprints.coffee': {copy: 'config/blueprints.coffee'},
      './config/bootstrap.coffee': {copy: 'config/bootstrap.coffee'},
      './config/cors.coffee': {copy: 'config/cors.coffee'},
      './config/csrf.coffee': {copy: 'config/csrf.coffee'},
      './config/http.coffee': {copy: 'config/http.coffee'},
      './config/globals.coffee': {copy: 'config/globals.coffee'},
      './config/i18n.coffee': {copy: 'config/i18n.coffee'},
      './config/local.coffee': {copy: 'config/local.coffee'},
      './config/log.coffee': {copy: 'config/log.coffee'},
      './config/policies.coffee': {copy: 'config/policies.coffee'},
      './config/routes.coffee': {copy: 'config/routes.coffee'},
      './config/sockets.coffee': {copy: 'config/sockets.coffee'},

      './config/session.coffee': {template: 'config/session.coffee'},
      './config/views.coffee': {template: 'config/views.coffee'},

      './config/locales/de.json': {copy: 'config/locales/de.json'},
      './config/locales/en.json': {copy: 'config/locales/en.json'},
      './config/locales/es.json': {copy: 'config/locales/es.json'},
      './config/locales/fr.json': {copy: 'config/locales/fr.json'},
      './config/locales/_README.md': {copy: 'config/locales/_README.md'},

      './config/env/production.coffee': {copy: 'config/env/production.coffee'},
      './config/env/development.coffee': {copy: 'config/env/development.coffee'},

      './api/policies/sessionAuth.coffee': {copy: 'api/policies/sessionAuth.coffee'},

      './api/responses/badRequest.coffee': {copy: 'api/responses/badRequest.coffee'},
      './api/responses/forbidden.coffee': {copy: 'api/responses/forbidden.coffee'},
      './api/responses/notFound.coffee': {copy: 'api/responses/notFound.coffee'},
      './api/responses/serverError.coffee': {copy: 'api/responses/serverError.coffee'},
      './api/responses/ok.coffee': {copy: 'api/responses/ok.coffee'},

      // Excluding `res.negotiate()` from the generated files for now,
      // since it's best if its definition is consistent between projects.
      // It can still be overridden by creating api/responses/negotiate.coffee.
      // './api/responses/negotiate.coffee': { copy: 'api/responses/negotiate.coffee' },
    }
  }
};

module.exports = templateFiles;
