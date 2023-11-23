# MongoDB

- s should be in the name of the collection (this is a convention)

Organization > Project > Cluster > Database > Collection > Document > Felids

Associate Developer Certification

## Overview of MongoDB and the Document Model

In this unit, you learned about the relationship between MongoDB and Atlas. MongoDB is a general-purpose database that can be used for a variety of use cases. It’s part of Atlas, the developer data platform. You also learned about the MongoDB document model. Specifically, you learned about these key features:

- Data is organized into documents, collections, and databases.
- Documents are stored in BSON, which supports a large range of data types, including all JSON data types, dates, numbers, and ObjectIds.
- Every document requires an \_id field, which acts as a primary key or unique identifier. If an inserted document doesn’t have an \_id field, MongoDB automatically generates one.
- MongoDB has a flexible schema, which means that documents with different structures can be stored in the same collection.

| Terms      | Definition                            |
| ---------- | ------------------------------------- |
| Filter     | selection criteria for the document.  |
| Cursor     | Pointer to the result set of a query. |
| Projection | Selection fields to return in result. |

### What would happen if you ran the following query on the zips collection?

Note: there is currently no document for the city of Taos.

```js
db.zips.findAndModify({
  query: { zip: 87571 },
  update: { $set: { city: "TAOS", state: "NM", pop: 40000 } },
  upsert: true,
  new: true,
});
```

### Answer

A new document would be inserted because the upsert option is set to true. When the upsert option is set to true, a new document will be inserted if one does not already exist. For existing documents, the upsert option will cause the document to be updated.

---

### [A Spotify Song and Playlist Recommendation Engine (Case studies)](https://www.mongodb.com/developer/code-examples/python/song-recommendations-example-app)
