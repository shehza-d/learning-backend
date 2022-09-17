console.log(`Im sever file from Shehzad`)



// code from Express Website  https://expressjs.com/en/starter/hello-world.html
// old way of importing const express = require('express')

import express from 'express' //new way
const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.log(`someone is requesting on this server `,new Date());
	
	res.send('Assalam-O-Alaikum World from SHEHZAD Server in ExpressJS!')
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})