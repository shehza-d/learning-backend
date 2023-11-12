# Finding Documents by Using Logical Operators

Review the following logical operators: implicit `$and`, `$or`, and `$and`.

## Find a Document by Using Implicit `$and`

Use implicit $and to select documents that match multiple expressions. For example:

```js
db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } });
```

## Find a Document by Using the `$or` Operator

Use the `$or` operator to select documents that match at least one of the included expressions. For example:

```js
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
});
```

## Find a Document by Using the `$and` Operator

Use the `$and` operator to use multiple `$or` expressions in your query.

```js
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ],
});
```
