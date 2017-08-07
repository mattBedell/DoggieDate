module.exports = function(router, baseRoute) {
  router.get(`/${baseRoute}`, (req, res, next) => {
    res.send('/members')
  })
};