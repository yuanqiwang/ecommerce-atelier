const express = require('express');
let app = express();
let PORT = 1234;

app.use(express.static('public'))


app.listen(PORT, () => console.log(`Listen on port ${PORT}`))