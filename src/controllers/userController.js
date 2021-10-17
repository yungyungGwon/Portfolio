import path from "path";

const __dirname = path.resolve();

export const getHome = (req, res) => {
    res.sendFile(__dirname + "/src/views/home.html");
};
export const getProfile = (req, res) => {
    res.sendFile(__dirname + "/src/views/profile.html", {pageTitle:"Profile"});
};
export const getProject = (req, res) => {
    res.sendFile(__dirname + "/src/views/project.html");
};
export const getContact = (req, res) => {
    res.sendFile(__dirname + "/src/views/contact.html");
};