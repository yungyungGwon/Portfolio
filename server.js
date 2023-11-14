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


const http = require('http')
const next = require('next')
const express = require('express')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV === 'development'
const PORT = 4040

const app = next({ dev })
const handle = app.getRequestHandler()

if (dev) {
    app.prepare().then(async () => {
        const server = express()
        server.use(cookieParser())

        // HMR event process setting according to 'nextJS' version update
        server.all('/_next/webpack-hmr', (req, res) => {
            nextjsRequestHandler(req, res)
        })

       http.createServer().listen(PORT, err => {
        if (err) throw console.err(err)
        else {
            console.log(`Server Listening http://localhost:${PORT}`)
        }
       })
    })
}