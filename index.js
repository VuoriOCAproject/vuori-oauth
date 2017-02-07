const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Lightspeed will call this endpoint
app.post('/oauthcallback', (req, res) => {
	console.log('-- PARAMS --');
	console.log(JSON.stringify(req.params));

	console.log('-- BODY --');
	console.log(JSON.stringify(req.body));

	res.sendStatus(200);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});