module.exports = (app) => {
  const mail = require("../controllers/contact.mail");

  app.post("/contact", mail.mail);
};
