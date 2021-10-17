import express from "express";
import {getHome,getProfile, getProject,getContact} from "../controllers/userController.js"

const rootRouter = express.Router();

rootRouter.get("/",getHome);
rootRouter.get("/profile",getProfile);
rootRouter.get("/project",getProject);
rootRouter.get("/contact",getContact);

export default rootRouter