var express = require('express')
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.redirect('javascript.html');
});

app.get('/hyperbrowser.html', function(req, res) {
    res.redirect('javascript.html');
});

app.get('/javascript', function(req, res) {
    res.redirect('javascript.html');
});

app.get('/temporal', function(req, res) {
    res.redirect('temporal.html');
});

app.get('/shaders', function(req, res) {
    res.redirect('shaders.html');
});

//stats handler (copying them to a file)
app.post('/statsHandler', function(req, res) {

    // open tail for live tracking
    // $ heroku logs (--tail) (--source app) (--num 200) (up to 1500)
    // copy to file
    // $ heroku logs --source app --num 1000 > stats.log

    console.log(JSON.stringify(req.body));
    res.status(200).end();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
