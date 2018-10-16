const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);
  app.get('/page4', controllers.page4);
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);
  app.get('/increaseDog', controllers.increaseDog);

  // Dog code
  app.get('/dogByName', controllers.getName);

  app.get('/', controllers.index);

  app.get('/*', controllers.notFound);

  app.post('/setName', controllers.setName);
  app.post('/setDog', controllers.setDog);

  app.post('/updateLast', controllers.updateLast);
};

module.exports = router;
