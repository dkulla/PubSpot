
module.exports.addEndpoints = function api(app) {
  app.get('/hello', function (req, res) {
    res.send(process.env.NODE_ENV);
  });
}