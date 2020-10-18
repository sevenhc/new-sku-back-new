const sql = require("./db.js");

const Insights = function (insights) {
  this.InsightTitle = insights.InsightTitle;
  this.InsightID = insights.InsightID;
  this.ThumbnailImage = insights.ThumbnailImage;
  this.Description = insights.Description;
  this.UserID = insights.UserID;
};
Insights.getAll = (result) => {
  sql.query("CALL GetAllInsights", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categorys: ", res);
    result(null, res);
  });
};

Insights.create = (newInsights, result) => {
  sql.query(
    "CALL AddInsight(?,?,?,?)",
    [
      newInsights.InsightTitle,
      newInsights.ThumbnailImage,
      newInsights.Description,
      newInsights.UserID,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Category: ", { id: res.insertId, ...newInsights });
      result(null, { id: res.insertId, ...newInsights });
    }
  );
};

Insights.update = (newInsights, result) => {
  console.log("model", newInsights);
  sql.query(
    "CALL EditInsight(?,?,?,?,?)",
    [
      newInsights.InsightID,
      newInsights.InsightTitle,
      newInsights.ThumbnailImage,
      newInsights.Description,
      newInsights.UserID,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("Updated  Category: ", { id: res.insertId, ...newInsights });
      result(null, { id: res.insertId, ...newInsights });
    }
  );
};
Insights.delete = (InsightID, result) => {
  sql.query("CALL DeleteInsight(?)", [InsightID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete: ", { id: res.insertId, ...InsightID });
    result(null, { id: res.insertId, ...InsightID });
  });
};
module.exports = Insights;
