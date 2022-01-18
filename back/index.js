const express = require('express');
const cors = require('cors');

const translateRoute = require('./routes/translate.route');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/translate', translateRoute);

app.listen(PORT, () => {
    console.log(`listen in port: ${PORT}`);
});