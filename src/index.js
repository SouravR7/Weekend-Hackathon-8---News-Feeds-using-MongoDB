const express = require("express");
const app = express();
const port = 8080;

const onePageArticleCount = 10;

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { newsArticleModel } = require("./connector");

app.get("/newFeeds", (req, res) => {
  let limitReceived = req.query.limit;
  let offsetReceived = req.query.offset;
  let limit = parseInt(Number(limitReceived));
  let offset = parseInt(Number(offsetReceived));
  if (!limitReceived) {
    limit = onePageArticleCount;
  }
  if (!offsetReceived) {
    offset = 0;
  }
  if (isNaN(offset)) {
    offset = 0;
  }
  if (isNaN(limit) || limit < 0) {
    limit = onePageArticleCount;
    if (!offsetReceived) {
      offset = 0;
    }
  }

  const options = {};
  options.skip = offset;
  options.limit = limit;
  newsArticleModel.countDocuments({}, function (err) {
    newsArticleModel.find({}, {}, options, function (err, result) {
      if (err) {
        res.status(500).send({ message: err.message });
        return;
      } else {
        res.send(result);
      }
    });
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;