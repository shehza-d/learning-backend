# MongoDB Indexes

Improve MongoDB performance by learning how to create single, compound, and multikey indexes as well as how to delete indexes.

**Indexes improve query performance at the cost of write performance.**

### Types

- **Single field index:** A single field index is an index on a single field of a document. MongoDB creates a single field index on the \_id field by default, but additional indexes may be needed for other fields as well. A single field index can also be a multikey index if it operates on an array field.

- **Compound index:** MongoDB supports compound indexes, where a single index structure holds references to multiple fields within a collection's documents. A compound index is created by specifying the fields that the index should reference, followed by the order in which the fields should be sorted. The order of the fields in the index is important because it determines the order in which the documents are returned when querying the collection. A compound index can also be a multikey index if one of the fields is an array.

- **Multikey index:** A multikey index is an index on an array field. Each element in the array gets an index key, which supports efficient querying against array fields. Both single field and compound indexes can have an array field, so there are both multikey single field indexes and multikey compound indexes.

## Creating a Single Field Index

Review the code below, which demonstrates how to create a single field index in a collection.

### Create a Single Field Index

Use `createIndex()` to create a new index in a collection. Within the parentheses of `createIndex()`, include an object that contains the field and sort order.

```js
db.customers.createIndex({ birthdate: 1 });
```

### Create a Unique Single Field Index

Add `{ unique: true }` as a second, optional, parameter in `createIndex()` to force uniqueness in the index field values. Once the unique index is created, any inserts or updates including duplicated values in the collection for the index field/s will fail.

```js
db.customers.createIndex({ email: 1 }, { unique: true });
```

### View the Indexes used in a Collection

Use `getIndexes()` to see all the indexes created in a collection.

```js
db.customers.getIndexes();
```

## Check if an index is being used on a query

Use `explain()` in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

- The `IXSCAN` stage indicates the query is using an index and what index is being selected.
- The `COLLSCAN` stage indicates a collection scan is perform, not using any indexes.
- The `FETCH` stage indicates documents are being read from the collection.
- The `SORT` stage indicates documents are being sorted in memory.

```js
db.customers.explain().find({
  birthdate: { $gt: ISODate("1995-08-01") },
});

//

db.customers
  .explain()
  .find({
    birthdate: { $gt: ISODate("1995-08-01") },
  })
  .sort({ email: 1 });
```
