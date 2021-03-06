const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	console.log(req.query.code);

	axios
		.post('https://cloud.merchantos.com/oauth/access_token.php', {
			client_id: process.env.LIGHTSPEED_CLIENT_ID,
            client_secret: process.env.LIGHTSPEED_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code'
		})
		.then((response) => {
			console.log(JSON.stringify(response.data));
			res.sendStatus(200);
		})
		.catch((error) => {
			console.error(error);
			res.sendStatus(500);
		});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});