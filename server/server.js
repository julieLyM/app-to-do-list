const express = require('express');
const app = express();
const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

const PORT = process.env.PORT || 4999;
app.listen(PORT, () => console.log(`listenning server ${PORT}`));
