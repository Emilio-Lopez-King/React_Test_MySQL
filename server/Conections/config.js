module.exports = (app) => {
    //Settings
    app.set("port", process.env.PORT || 5000);
  
    return app;
  };
  