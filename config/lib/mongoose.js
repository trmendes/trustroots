'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
    chalk = require('chalk'),
    path = require('path'),
    mongoose = require('mongoose');

// Load the mongoose models
module.exports.loadModels = function (callback) {
  // Globbing model files
  config.files.server.models.forEach(function (modelPath) {
    require(path.resolve(modelPath));
  });

  if (callback) callback();
};

// Initialize Mongoose
module.exports.connect = function (callback, logprefix, optionOverride) {

  var options = optionOverride ?
    _.merge(config.db.options || {}, optionOverride) :
    config.db.options;

  mongoose.Promise = global.Promise;

  mongoose.set('debug', config.db.debug);

  mongoose.connect(config.db.uri, options, function (err) {
    if (err) {
      console.error(chalk.red('Could not connect to MongoDb! #fh3924'));
      return;
    }
    console.log(chalk.green('Connected to MongoDB'));
    if (callback) {
      callback();
    }
  });

};

module.exports.disconnect = function (callback) {
  mongoose.disconnect(function (err) {
    console.info(chalk.yellow('Disconnected from MongoDB.'));
    callback(err);
  });
};
