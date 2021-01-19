module.exports = (app) => {
  const mail = require("../controllers/password.changed.mail");

  app.post("/client/passwordChanged", mail.mail);
};
