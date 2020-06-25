const express = require('express');
const app = express();
const PORT = 5000;
const user = require("./routes/user");

app.use('/user',user);

app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}`);
});

