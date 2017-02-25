module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, res) => {
    const fs = require('fs');
    let dir = __dirname + '/../../assets/client/index.html';

    let index = fs.readFileSync(dir);

    res(index)
    .type('text/html')
    .header('X-Custom', 'some-value');
  }
}
