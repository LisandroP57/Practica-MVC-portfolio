const express = require('express')
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

/* Enrutador: */

const mainRouter = require("./routers/main.js");

const aboutRouter = require("./routers/about.js");

app.use("/", mainRouter);
app.use("/about", aboutRouter);

app.listen( 3000, ()=>{
    console.log('Servidor funcionando');
});