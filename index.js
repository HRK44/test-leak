var express = require('express');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

let api = express.Router();

api.post('/test', (req, res) => {
    let data = req.body.data;
    res.end('ok...');
});

app.use(api);

app.listen(8000, () => console.log('started api'));
