var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id":"232kAk",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frogs Legs"
    }
];

app.get('/', function(req, res) {
   res.send(ingredients); 
});

app.get('/funions', function(req, res) {
    res.send('Yo give me some funions foo!');
})

app.pos('/', function(req, res) {
   var = ingredient = req.body;
    if (!ingredient || ingredient.text === "") {
        res.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        res.status(200).send(ingredient);
    }
});

app.listen(3000, function() {
    console.log("First API running on port 3000!");
});