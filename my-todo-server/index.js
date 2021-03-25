const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const uri = `mongodb+srv://organicUser:qMtIUh2zIHymXuTP@cluster0.2jkon.mongodb.net/Tasks?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res) => {
    res.send("This is working");
})


client.connect(err => {
  const todosCollection = client.db("Tasks").collection("todos");
  console.log("connected");

  app.post('/createTodo', (req, res) => {
      const myTask = req.body;
      todosCollection.insertOne(myTask)
      .then(result => {
          if(result.insertedCount>0){
              res.send({"message": "Data added successfully."});
          }
          else{
            res.send({"message": "Failed to add data."});
          }
      })
      
  })

//   client.close();
});


app.listen(port, () =>{
    console.log("Listening to port", port);
})