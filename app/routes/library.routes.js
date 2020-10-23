module.exports = (app) => {
  const library = require("../controllers/library.controller");

  app.post("/library/addNew", library.create);

  app.get("/library/getAll/:ClientID", library.getAll);

  app.delete("/library/delete/:LibraryNameID", library.delete);
};
