import express from "express"

const app = express()

app.get('/', (request, response) => {

	readFile('./home.html', 'utf8', (error, html) => {

		if (error) {
			response.status(500).send('send, order nhi hy😕')
		}

		response.send(html);
	})
})

