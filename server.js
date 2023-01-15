import express from "express";
import listEndpoints from "express-list-endpoints";
import {
  badRequestHanlder,
  genericErrorHandler,
  notFoundHandler,
  unauthorizedHandler,
} from "./src/errorHAndler";
const app = express();
const port = process.env.PORT;

// Error handler



app.listen(port, () => {
  console.table(listEndpoints(app));
  console.log("Sever is working", port);
});
