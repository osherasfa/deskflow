const mongoose = require('mongoose');

const { MONGO_DB_URI } = process.env;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(MONGO_DB_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });

    // Create a collection called "cats"
    const Cats = mongoose.model('catv', { name: String });

    // Add one cat to the collection
    const newCat = new Cats({ name: 'Jerry' });

    await newCat.save();

  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

