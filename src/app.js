const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();
const hbs = require("hbs");
const Product = require("./models/products");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index");
})

app.post("/index", async (req, res) => {
    try {
        const productRegistration = new Product({
            category: req.body.category,
            model: req.body.model,
            serial: req.body.serial,
            calendar: req.body.calendar,
            // file: req.body.file
        });

        const registered = await productRegistration.save();
        res.status(201).render("index");

        console.log(registered);
        res.send(registered);
        console.log(req.body.calendar);
        res.send(req.body.calendar);
        
    }
    catch (error) {
        res.status(400).send(error);
        console.log("the error part page");
    }
})



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})