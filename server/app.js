const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 4000;

mongoose.connect(
  "mongodb+srv://Hafsa_ahmed:ifeelfree6525@cluster0.40zyh.mongodb.net/graphQL?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => {
  console.log("Now Listening to requests!");
});
