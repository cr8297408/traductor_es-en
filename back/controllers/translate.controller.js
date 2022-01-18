const translate = require('node-google-translate-skidz');

const traducir = async (req, res) => {
    const { texto } = req.body;
    await translate({
        text: texto,
        source: 'es',
        target: 'en'
      }, function(result) {
            res.send(result)
            console.log(result);
      });
};

const hello = (req, res) => {
    res.send('HELLO WORLD');
}

module.exports = {traducir, hello};