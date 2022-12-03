const express = require('express')
const app = express()
const port = 3000

app.all('*', (req, res) => {
    return res.redirect(301,`https://ruth-dm.co.uk${req.path}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})