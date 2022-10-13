
import express, { response } from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/',(request, response)=>{
	response.send("Server hello world shehzad")
})
// console.log("sh");//to remove

app.listen(PORT, () => {
	console.log(`Examples app listening on port ${PORT}`)
  })


  console.log(`Im sever file from Shehzad`)
// deploped on Cyclic with repo of https://github.com/shehza-d/starter-express-api


// code from Express Website  https://expressjs.com/en/starter/hello-world.html

import express from 'express' //new way
const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.log(`someone is requesting on this server `,new Date());
	
	
	setTimeout( () => {
		res.send('Assalam-O-Alaikum World from SHEHZAD Server written in ExpressJS hosted on Cyclic Cloud! 1')
	}, 4000);
//	res.send('Assalam-O-Alaikum World from SHEHZAD Server written in ExpressJS hosted on Cyclic Cloud! 2')
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


import express, { response } from "express";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

let todos = [];

app.use(express.json());

app.post("/todo", (request, response) => {
  todos.push(request.body.text);
  response.send({
    message: "your data is saved",
    data: todos,
  });
});

app.get("/todos", (request, response) => {
  response.send({
    message: "here is your todo list",
    data: todos,
  });
});

// app.get("/sd", (request, response) => {
//   response.send("testing / routes");
//   console.log(`testing / routes`);
// });

app.listen(PORT, () => {
  console.log(`Examples app listening on port ${PORT}`);
});
