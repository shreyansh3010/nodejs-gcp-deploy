const express = require('express');

const app = express();

const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    res.send('Deployed on GCP App Engine')
})

app.listen(port, (err) => {
    if (err)
        console.log('Failed to lift application ->',err);
    else
        console.log(`Server is runing on ${port}`);
})