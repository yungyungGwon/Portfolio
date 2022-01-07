import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

const app = express();
const __dirname = path.resolve();


app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./js')));

export const getHome = (req, res) => {
    res.sendFile(__dirname + "/index.html");
};

const rootRouter = express.Router();
rootRouter.get("/",getHome);

app.use("/", rootRouter);

export default app;