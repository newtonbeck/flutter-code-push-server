const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.get('/health', (_, res) => res.sendStatus(200));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))