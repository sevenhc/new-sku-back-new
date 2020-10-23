const sql = require("./db.js");

const LibraryItems = function (libraryItems) {
  this.LibraryID = libraryItems.LibraryID;
  this.ProductID = libraryItems.ProductID;
  this.LibraryItemID = libraryItems.LibraryItemID;
};
LibraryItems.getAll = (newLibraryItems, result) => {
  sql.query(
    "CALL GetLibraryItems(?)",
    [newLibraryItems.LibraryID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("Library Items: ", res);
      result(null, res);
    }
  );
};

LibraryItems.create = (newLibraryItems, result) => {
  sql.query(
    "CALL AddLibraryItem(?,?)",
    [newLibraryItems.LibraryID, newLibraryItems.ProductID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created LibraryItems: ", {
        id: res.insertId,
        ...newLibraryItems,
      });
      result(null, { id: res.insertId, ...newLibraryItems });
    }
  );
};

LibraryItems.delete = (newLibraryItems, result) => {
  console.log("delete client", newLibraryItems.LibraryItemID);
  sql.query(
    "CALL DeleteLibraryItem(?)",
    [newLibraryItems.LibraryItemID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("Delete  client: ", { id: res.insertId, ...newLibraryItems });
      result(null, { id: res.insertId, ...newLibraryItems });
    }
  );
};

module.exports = LibraryItems;
