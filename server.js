const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Result');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));