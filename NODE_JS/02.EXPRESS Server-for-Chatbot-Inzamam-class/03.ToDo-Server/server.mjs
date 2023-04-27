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
