import express, { response } from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/',(request, response)=>{
	response.send("Server hello world shehzad")
	console.log(`Im sever file from Shehzad`)
})
app.get('/sd',(request, response)=>{
	response.send("testing / routes")
	console.log(`testing / routes`)
})
app.post('/sd',(request, response)=>{
	response.send("testing / routes with post")
	console.log(`testing / routes with post`)
})


app.listen(PORT, () => {
	console.log(`Examples app listening on port ${PORT}`)
