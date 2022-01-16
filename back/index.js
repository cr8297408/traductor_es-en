const express = require('express');
const translate = require('node-google-translate-skidz');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.post('/translate', async (req, res) => {
    const { texto } = req.body;
    translate({
        text: texto,
        source: 'es',
        target: 'en'
      }, function(result) {
            res.send(result)
            console.log(result);
      });
});

app.listen(PORT, () => {
    console.log(`listen in port: ${PORT}`);
});