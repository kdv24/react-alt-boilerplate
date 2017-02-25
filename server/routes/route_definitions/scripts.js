module.exports = {
  method: 'GET',
  path: '/js/{script}',
  handler: function(req, res) {
    const fs = require('fs');

    let file = fs.readFileSync(__dirname + '/../../assets/client/js/' + req.params.script);

    res(file).type('application/javascript');
  }
}
