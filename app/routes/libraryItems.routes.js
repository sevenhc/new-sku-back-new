module.exports = (app) => {
  const library = require("../controllers/libraryItems.controller");

  app.post("/library/items/addNew", library.create);

  app.get("/library/items/getAll/:LibraryID", library.getAll);

  app.delete("/library/items/delete/:LibraryItemID", library.delete);
};
