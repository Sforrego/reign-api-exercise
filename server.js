const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { createMany } = require("./app/controllers/article.controller");
db.sequelize.sync(); 
// db.sequelize.sync({ force: true }).then(() => {console.log("Drop and re-sync db.");});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sforrego server." });
});

require("./app/routes/article.routes")(app);

const controller = require("./app/controllers/article.controller");
// update db with latest posts
async function updateData(){
  axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
  .then(response => {
      controller.createMany(response.data.hits);
      //console.log(response.data);
  })
  .catch(error=> {
      console.log(error);
  })}

setInterval(updateData,3600000) // 1 hour 


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});