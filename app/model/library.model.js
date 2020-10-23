const sql = require("./db.js");

const Library = function (library) {
  this.LibraryName = library.LibraryName;
  this.ClientID = library.ClientID;
  this.LibraryNameID = library.LibraryNameID;
};
Library.getAll = (newLibrary, result) => {
  sql.query("CALL GetLibraries(?)", [newLibrary.ClientID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Library: ", res);
    result(null, res);
  });
};

Library.create = (newLibrary, result) => {
  sql.query(
    "CALL AddLibrary(?,?)",
    [newLibrary.LibraryName, newLibrary.ClientID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Library: ", { id: res.insertId, ...newLibrary });
      result(null, { id: res.insertId, ...newLibrary });
    }
  );
};

Library.delete = (newLibrary, result) => {
  console.log("delete client", newLibrary.ClientID);
  sql.query("CALL DeleteLibrary(?)", [newLibrary.LibraryNameID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete  client: ", { id: res.insertId, ...newLibrary });
    result(null, { id: res.insertId, ...newLibrary });
  });
};

module.exports = Library;
