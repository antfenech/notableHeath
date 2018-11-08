require('babel-register');

const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');

const { default: serverSettings } = require('./settings/server-settings.js');
const { default: viewSettings } = require('./settings/view-settings.js');
const { default: routes } = require('./server/routes/routes.js');

const server = new Hapi.Server(serverSettings);

const main = async () => {
  await server.register([Vision, Inert]);

  server.route(routes);
  server.views(viewSettings);

  await server.start();

  console.log('Server running at:', server.info.uri);
};

main();

process.on('uncaughtException', function (err) {
  console.log('err', err);
});
