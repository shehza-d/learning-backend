console.log(`Im sever file from Shehzad`)
// deploped on Cyclic with repo of https://github.com/shehza-d/starter-express-api


// code from Express Website  https://expressjs.com/en/starter/hello-world.html
// old way of importing const express = require('express')

import express from 'express' //new way
const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.log(`someone is requesting on this server `,new Date());
	
	res.send('Assalam-O-Alaikum World from SHEHZAD Server written in ExpressJS hosted on Cyclic Cloud!')
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
