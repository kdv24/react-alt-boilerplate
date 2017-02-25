const fs = require('fs');

let register = (Server, options, next) => {
  let files = fs.readdirSync(__dirname + '/route_definitions');

  files.forEach((filename) => {
    if (~filename.indexOf('.js')) {
      let route = require(__dirname + '/route_definitions/' + filename);

      console.log('Initialize route:', route.path);
      Server.route(route);
    }
  });

  next();

}

register.attributes = {
  name: "router",
  version: "1.0.0"
};

module.exports = register;
