const express = require(`express`);
const path = require(`path`);
const app = express();
const log = require(`./modules/log.js`);
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('../public'));
const formHandler = require(`./modules/formHandler.js`);;

const db = require(`./modules/db.js`);
(async function() {
    await db.init;
}());

const listener = app.listen(80, function() {
    log.info(`Listening on Port ${listener.address().port} for requests\n`);
});


//form handler
app.post(`/submitForm`, function(req, res){
    const body = req.body;
    log.info(`Attempted Submission\n`);
    formHandler.handle(body, res, path);
});

//site server
app.get(`/`, function(req, res){
    res.sendFile(path.join(__dirname, `../public/pages/index.html`));
});

app.get(`/join`, function(req, res){
    res.sendFile(path.join(__dirname, `../public/pages/form.html`));
});

app.get(`/posters`, function(req, res){
    res.sendFile(path.join(__dirname, `../public/pages/poster.html`));
});