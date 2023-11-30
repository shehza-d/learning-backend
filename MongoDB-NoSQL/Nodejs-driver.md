- MongoDB drivers establish secure connections to a MongoDB cluster and execute database operations on behalf of client applications.

- db.collection.insertMany() is used to insert multiple documents and db.collection.insertOne() is used to insert a single document in MongoDB.

### BSON

- BSON documents allow for more data types than JSON documents. This is because BSON is a superset of JSON, which means that it can represent all the data types that JSON can represent, plus additional data types.
- BSON-encoded documents are converted automatically by the driver. This means that you can use the data immediately in your application as normal JSON and access properties by using dot notation. The driver handles the conversion from BSON to JSON for you.
- BSON documents are binary-encoded serialized documents. This means that they are stored in a binary format, which is more compact than text-based JSON documents. This makes them more efficient for storage and transmission.
