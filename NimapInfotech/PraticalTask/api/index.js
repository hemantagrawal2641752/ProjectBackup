
module.exports = (app, apiBase) => {
    require('./v1')(app, `${apiBase}/api/v1`)
  }
  