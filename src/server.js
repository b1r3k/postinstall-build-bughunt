var path = require('path');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

console.log('Root path: ', config.output.path);

var server = new WebpackDevServer(webpack(config), {
  path: config.output.path,
  contentBase: config.output.contentBase,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});

server.use('/:file', function(req, res) {
    var file = req.params.file;

    res.sendFile(path.join(config.output.path, file));
});


server.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
