const express = require('express');
const app = express();
const port = 4000; // port 4000 as required

//error handling to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});