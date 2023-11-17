# MongoDB CRUD Operations: Modifying Query Results

In this unit, you’ll learn how to modify query results in MongoDB by using sorts, limits, projections, and counts. First, you will learn how to organize query results by sorting and limiting the documents that are returned. Then you'll explore how to use projection to return selected fields from a query. Finally, you’ll learn how to count the number of documents that match a query. Using these query modifications will help enhance the functionality and performance of your applications.

## Sorting and Limiting Query Results in MongoDB

Review the following code, which demonstrates how to sort and limit query results.

### Sorting Results

Use `cursor.sort()` to return query results in a specified order. Within the parentheses of `sort()`, include an object that specifies the field(s) to sort by and the order of the sort. Use 1 for ascending order, and -1 for descending order.

```js
// Syntax
// db.collection.find(<query>).sort(<sort>)

// Return data on all music companies, sorted alphabetically from A to Z.
db.companies.find({ category_code: "music" }).sort({ name: 1 });
```

To ensure documents are returned in a consistent order, include a field that contains unique values in the sort. An easy way to do this is to include the \_id field in the sort. Here's an example:

```js
// Return data on all music companies, sorted alphabetically from A to Z. Ensure consistent sort order
db.companies.find({ category_code: "music" }).sort({ name: 1, _id: 1 });
```

### Limiting Results

Use `cursor.limit()` to return query results in a specified order. Within the parentheses of `limit()`, specify the maximum number of documents to return.

```js
// Syntax
// db.companies.find(<query>).limit(<number>)

// Return the three music companies with the highest number of employees. Ensure consistent sort order.
db.companies
  .find({ category_code: "music" })
  .sort({ number_of_employees: -1, _id: 1 })
  .limit(3);
```

| Terms   | Definition       |
| ------- | ---------------- |
| Sort 1  | Ascending order  |
| Sort -1 | Descending order |

## Projection (Returning Specific Data from a Query in MongoDB)

Review the following code, which demonstrates how to return selected fields from a query.

### Add a Projection Document

To specify fields to include or exclude in the result set, add a projection document as the second parameter in the call to `db.collection.find()`.

**`db.collection.find( <query>, <projection> )`**

### Include a Field

To include a field, set its value to 1 in the projection document.

```js
// Syntax
// db.collection.find( <query>, { <field> : 1 })

// Return all restaurant inspections - business name, result, and _id fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 }
);
```

### Exclude a Field

To exclude a field, set its value to 0 in the projection document.

```js
// Syntax
// db.collection.find(query, { <field> : 0, <field>: 0 })

// Return all inspections with result of "Pass" or "Warning" - exclude date and zip code
db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 }
);
```

While the \_id field is included by default, it can be suppressed by setting its value to 0 in any projection.

```js
// Return all restaurant inspections - business name and result fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1, _id: 0 }
);
```

## Counting Documents in a MongoDB Collection

Review the following code, which demonstrates how to count the number of documents that match a query.

### Count Documents

Use `db.collection.countDocuments()` to count the number of documents that match a query. `countDocuments()` takes two parameters: a query document and an options document.

```js
// Syntax
// db.collection.countDocuments( <query>, <options> )

// Count number of docs in trip collection
db.trips.countDocuments({});
// Count number of trips over 120 minutes by subscribers
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" });
```
