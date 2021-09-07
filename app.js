const express = require('express');
const app = express();
require('./database/db');
app.use(express.json());
app.use(require('./router/contactRouter'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
{
    console.log('Server Running on Port', PORT);
})



