# MongoDB Indexes

Improve MongoDB performance by learning how to create single, compound, and multikey indexes as well as how to delete indexes.

## Points

- Recreating an index takes time and resources.

- Hide the index before deleting it.
- Unique indexes ensure that indexed fields do not store duplicate values. In this example, MongoDB will return a duplicate key error if you attempt to insert a new document with an email that already exists in the collection, as the unique constraint was set to true.
- The performance of the query will be negatively affected by the deletion of the only index that is currently supporting that query.
- Indexes generally improve the performance and time efficiency of queries by reducing the number of times that the database needs to be accessed.
- **Indexes improve query performance at the cost of write performance.**

## Types

- **Single field index:** A single field index is an index on a single field of a document. MongoDB creates a single field index on the \_id field by default, but additional indexes may be needed for other fields as well. A single field index can also be a multikey index if it operates on an array field.

- **Compound index:** A single index structure holds references to multiple fields within a collection's documents. A compound index is created by specifying the fields that the index should reference, followed by the order in which the fields should be sorted. A compound index can also be a multikey index if one of the fields is an array.

Index on multiple fields

- **Multikey index:** A multikey index is an index on an array field. Each element in the array gets an index key, which supports efficient querying against array fields. Both single field and compound indexes can have an array field, so there are both multikey single field indexes and multikey compound indexes.

## Single Field Index

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

## Multikey Indexes

Multikey indexes support efficient queries against array fields by creating an index key for each element in the array. This allows MongoDB to search for the index key of each element in the array rather than scan the entire array, which results in dramatic performance gains in your queries.
The maximum number of array fields per multikey index is 1. If an index has multiple fields, only one of them can be an array.

Review the code below, which demonstrates how multikey indexes work. If a single field or compound index includes an array field, then the index is a multikey index.

### Create a Single field Multikey Index

Use `createIndex()` to create a new index in a collection. Include an object as parameter that contains the array field and sort order. In this example `accounts` is an array field.

```js
db.customers.createIndex({ accounts: 1 });
```

## Compound Index

- A compound index is an index that contains references to multiple fields within a document. Compound indexes are created by adding a comma-separated list of fields and their corresponding sort order to the index definition.

- Index on multiple fields, MongoDB supports compound indexes, where a single index structure holds references to multiple fields within a collection's documents. A compound index is created by specifying the fields that the index should reference, followed by the order in which the fields should be sorted. The order of the fields in the index is important because it determines the order in which the documents are returned when querying the collection.

- A compound index can also be a multikey index if one of the fields is an array, maximum of one array field per index, support queries that match on the prefix of the index fields.
- The order of the fields in a compound index matters
  - Follow this order: `Equality`, `Sort`, `Range`
    (Optimized queries use the first field in the index, Equality, to determine which documents match the query. The second field in the index, Sort, is used to determine the order of the documents. The third field, Range, is used to determine which documents to include in the result set.)
- Sort order of the field values in the index matters.



### Create a Compound Index

Use `createIndex()` to create a new index in a collection. Within the parentheses of `createIndex()`, include an object that contains two or more fields and their sort order.

```js
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})
```

### Order of Fields in a Compound Index

The order of the fields matters when creating the index and the sort order. It is recommended to list the fields in the following order: Equality, Sort, and Range.

- Equality: field/s that matches on a single field value in a query
- Sort: field/s that orders the results by in a query
- Range: field/s that the query filter in a range of valid values

The following query includes an equality match on the active field, a sort on birthday (descending) and name (ascending), and a range query on birthday too.

```js
db.customers.find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
    active:true
    }).sort({
      birthdate:-1, 
      name:1
      })
```

Here's an example of an efficient index for this query:

```js
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})
```





---

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

https://www.mongodb.com/docs/manual/reference/explain-results

## Deleting an Index

Make sure the index is not being used, Deleting an index that's the only index supporting a query will affect the performance of the query.

### Hiding Indexes

If hiding index is affecting performance unhide it, i.e Unhiding is faster than deleting and recreating it.

```js
db.collection.hideIndex(<index>)
```

### Delete an Index

Use `dropIndex()` to delete an existing index from a collection. Within the parentheses of `dropIndex()`, include an object representing the index key or provide the index name as a string.

Delete index by name:

```js
db.customers.dropIndex("active_1_birthdate_-1_name_1");
```

Delete index by key:

```js
db.customers.dropIndex({
  active: 1,
  birthdate: -1,
  name: 1,
});
```

### Delete Indexes

Use `dropIndexes()` to delete all the indexes from a collection, with the exception of the default index on \_id.

```js
db.customers.dropIndexes();
```

The `dropIndexes()` command also can accept an array of index names as a parameter to delete a specific list of indexes.

```js
db.collection.dropIndexes(["index1name", "index2name", "index3name"]);
```
