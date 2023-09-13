const express = require('express')
// const Person = require('./models/person')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000;

const app = express()

// paste form data
app.use(express.urlencoded({extended: false }))
// paste json
app.use(express.json())

// Connect to MongoDB 

mongoose.connect('mongodb+srv://HNG_1:HNG1234@hng.9a3ndke.mongodb.net/HNG?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log('Connected to db'))
  .catch((err) => console.log(err))


  // Define the Person schema and model

  const personSchema = new mongoose.Schema({
    name: String,
    user_id: Number,
    email: {
      type: String,
      required: true,
      unique: true, // Ensures that each email is unique in the collection
      trim: true, // Removes leading/trailing white spaces from the email
      lowercase: true, // Converts the email to lowercase before saving
      match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, // Regular expression for a valid email format
    },
  });
  
   const Person = mongoose.model('Person', personSchema);
//add-new person




// Create a new person
// Create a new person
app.post('/api', async (req, res) => {
    try {
      const person = new Person(req.body);
      const savedPerson = await person.save();
      res.status(201).json(savedPerson);
    } catch (error) {
      res.status(500).json({ message: 'Error creating person' });
    }
  });
  
  // Retrieve all persons
  app.get('/api', async (req, res) => {
    try {
      const persons = await Person.find();
      res.json(persons);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving persons' });
    }
  });
  
  // Retrieve a person by name
  app.get('/api/:name', async (req, res) => {
    const { name } = req.params;
    try {
      const person = await Person.findOne({ name });
      if (!person) {
        return res.status(404).json({ message: 'Person not found' });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving person' });
    }
  });
  
  // Update a person by name
  app.put('/api/:name', async (req, res) => {
    const { name } = req.params;
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name },
        req.body,
        { new: true }
      );
      if (!updatedPerson) {
        return res.status(404).json({ message: 'Person not found' });
      }
      res.json(updatedPerson);
    } catch (error) {
      res.status(500).json({ message: 'Error updating person' });
    }
  });
  
  // Delete a person by name
  app.delete('/api/:name', async (req, res) => {
    const { name } = req.params;
    try {
      const deletedPerson = await Person.findOneAndDelete({ name });
      if (!deletedPerson) {
        return res.status(404).json({ message: 'Person not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting person' });
    }
  });
  




  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });