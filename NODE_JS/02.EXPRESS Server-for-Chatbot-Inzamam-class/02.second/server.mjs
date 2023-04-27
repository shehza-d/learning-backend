import { response } from "express";

const port = process.env.PORT || 3000;

let todos =[]
app.use(express.json());
app.use(cors())
app.post('/todo', (request, response) => {

	todos.push(request.body.text);

	response.send({
		message: "your todo is saved",
		data: todos
	})
})

app.get('/todos', (request, response) => {


	response.send({
		message: "here is you todo list",
		data: message
	})

)