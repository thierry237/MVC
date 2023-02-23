

let express = require('express');
let app = express();


let session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
})
);

app.use(express.static('public'));

let routes = require('./routes');
app.use('/', routes);

let port = 8008;
app.listen(port, function () {
    console.log('Server running on port ' + port);
});