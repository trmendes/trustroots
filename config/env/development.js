'use strict';

/*
 * Please don't make your own config changes to this file!
 * Copy local.sample.js to local.js and make your changes there. Thanks.
 *
 * Load order:
 * - default.js
 * - {development|production|test}.js
 * - local.js
 */

module.exports = {
  db: {
    uri: 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost:27017') + '/trustroots-dev',
    options: {
      autoIndex: true,
      reconnectInterval: 500,
      bufferMaxEntries: 0,
      useNewUrlParser: true
    },
    // Mongoose debug mode
    debug: true
  },
  app: {
    title: 'Trustroots Development version',
    description: 'Trustroots development version.'
  },
  // Configuration to work with default MailDev dev setup
  // https://github.com/djfarrelly/MailDev
  mailer: {
    from: 'trustroots@localhost',
    options: {
      host: 'localhost',
      port: 1025,
      ignoreTLS: true,
      auth: false,
      pool: true
    }
  }
};
