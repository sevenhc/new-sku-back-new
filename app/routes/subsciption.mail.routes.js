module.exports = (app) => {
  const mail = require("../controllers/subscription.mail");

  app.post("/client/subscription/:email", mail.mail);
};
