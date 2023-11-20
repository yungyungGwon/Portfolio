// import express from "express";
// import path from "path";
// import logger from "morgan";
// import cookieParser from "cookie-parser";

// const app = express();
// const __dirname = path.resolve();


// app.use(logger('dev'));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'./public')));
// app.use(express.static(path.join(__dirname,'./js')));

// export const getHome = (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// };

// const rootRouter = express.Router();
// rootRouter.get("/",getHome);

// app.use("/", rootRouter);

// export default app;

const http = require('http');
const next = require('next');
const { parse } = require('url');
const express = require('express');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = 4040;

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() =>
{
    const server = express();
    server.disable("x-powered-by");
    server.use(cookieParser());

    // HMR event process setting according to 'nextJS' version update.
    server.all('/_next/webpack-hmr',(req,res) => {
        nextjsRequestHandler(req,res);
    });

    if (dev)
    {
        http.createServer(async (req, res) =>
        {
            const parseUrl = parse(req.url, true)
            await handle(req, res, parseUrl)
        }).listen(port, (err) =>
        {
            if (err) throw  err;
            console.log(`Server Listening https://localhost:${port}`)
        })
    }
})