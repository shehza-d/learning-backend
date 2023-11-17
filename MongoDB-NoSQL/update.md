# Updating MongoDB Documents

`updateOne()`

The `updateOne()` method accepts a filter document, an update document, and an optional options object. MongoDB provides update operators and options to help you update documents. In this section, we'll cover three of them: `$set`, `upsert`, and `$push`.

`updateMany()`

To update multiple documents, use the `updateMany()` method. This method accepts a filter document, an update document, and an optional options object. The following code shows an example:

```js
db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
);
```

**Drawback: If 1 or 2 docs are not updated we can't undone all other docs that were updated (way around: run query again)**

## The `$set` operator

- Adds new fields and values to a document.
- Replace the value of a field with a specified value.

```js
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $set: { subscribers: 98562 } }
);
```

## `Upsert`

The `upsert` option update the documents if matched the filtered criteria else creates a new document.

```js
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
);
```

## The `$push` operator (for arrays)

- Appends a value to an array.
- If absent, `$push` adds the array field with the value as its element.

```js
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
);
```

## Updating MongoDB Documents by Using `findAndModify()`

The `findAndModify()` method is used to find and replace a single document in MongoDB. It accepts a filter document, a replacement document, and an optional options object. The following code shows an example:

```js
db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true, // true will return new updated doc and false will return doc as before modifying state
});
```
