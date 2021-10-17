import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

import rootRouter from "./routers/rootRouter.js";

const app = express();
const __dirname = path.resolve();


app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/src/public')));
app.use(express.static(path.join(__dirname,'/src/views')));


app.use("/", rootRouter);
app.use("/profile", rootRouter);
app.use("/project", rootRouter);
app.use("/contact", rootRouter);

export default app;