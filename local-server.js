const http = require('http')
const port = 3013
const server = http.createServer((request, response) => {
	response.write("Assalam-O-Alaikum to NODE World!")
	console.log(`Shehzad is in NODE World!`)
	response.end()
})
server.listen(port, (error) => {
	if (error) console.log("something went wrong", error)
	else console.log("Server listening on port" + port)
})
// 11 Lines ma local Server ban gya