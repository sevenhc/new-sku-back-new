module.exports = (app) => {
  const mail = require("../controllers/forget.password");

  app.post("/client/forgetPassword/:email", mail.mail);
};
