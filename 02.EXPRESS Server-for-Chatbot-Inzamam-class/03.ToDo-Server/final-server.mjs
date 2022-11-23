import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// await mongoose.connect('mongodb+srv://shehza-d:web123@cluster0.egqvqca.mongodb.net/firstdatabase?retryWrites=true&w=majority');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

let todoSchema = new mongoose.Schema({
  text: { type: String, require: true },
  classID: String,
  createdDate: { type: Date, default: Date.now },
});
const todoModel = mongoose.model("todos", todoSchema);

app.get("/", (request, response) => {
  response.send("Shehzad test first server");
  console.log(`Shehzad test first server`);
});

app.get("/todos", (req, res) => {
  todoModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "here is you todo list",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

app.post("/todo", (request, response) => {
  todoModel.create({ text: request.body.text }, (err, saved) => {
    if (!err) {
      console.log("saved");
      response.send({
        message: "your data is saved",
      });
    } else {
      response.status(500).send({
        message: "error hy koi server ma",
      });
    }
  });
});

app.put("/todo/:id", async (req, res) => {
  try {
    let updatedData = await todoModel
      .findByIdAndUpdate(req.params.id, { text: req.body.text })
      .exec();
    console.log(updatedData);

    res.send({
      message: "todo has been updated successfully",
      data: updatedData,
    });
  } catch (err) {
    res.status(500).send({
      message: "server errror",
    });
  }
});

//empty object mtlb sab kuxh all (on line 59)
app.delete("/todos", (req, res) => {
  todoModel.deleteMany({}, (err) => {
    if (!err) {
      res.send({
        message: "all todos deleted successfully",
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

//to delete selected todo
//:id is URL parameter
app.delete("/todo/:id", (req, res) => {
  todoModel.deleteOne({ _id: req.params.id }, (err, deletedData) => {
    console.log("deleted: ", deletedData);

    if (!err) {
      if (deletedData.deletedCount !== 0) {
        res.send({
          message: "One Todo has been deleted successfully",
        });
      } else {
        res.send({
          message: "No todo found with this id ",
        });
      }
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Examples app listening on port ${PORT}`);
});

//MongoDB
const dbURI =
  "mongodb+srv://shehza-d:web123@cluster0.egqvqca.mongodb.net/firstdatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI);

//for status of DB
////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Mongoose is connected");
  // process.exit(1);
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
