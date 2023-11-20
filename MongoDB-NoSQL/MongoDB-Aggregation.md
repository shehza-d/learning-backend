# Introduction to MongoDB Aggregation

A way to filter, sort, group, reshape, and analyze data.

## Definitions

- **Aggregation**: Collection and summary of data.

- **Stage**: One of the built-in methods that can be completed on the data, but does not permanently alter it.

- **Aggregation pipeline**: A series of stages completed on the data in order.

**Order of stages matter!**

## Structure of an Aggregation Pipeline

```js
db.collection.aggregate([
  {
    $stage1: {
      { expression1 },
      { expression2 }
    },
    $stage2: {
      { expression1 }
    },
  },
]);
```

| Stages     | Definition                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `$match`   | Filter for docs matching criteria (place early as possible)                                                                            |
| `$group`   | Create a single docs for each distinct value , groups docs by a group key and output is 1 doc for each unique value of the group key.  |
|`$sort`|Sorts all input docs and passes them through pipeline in sorted order.|
|`$limit`|Limits the number of docs passes to the next aggregation stage.|
| `$project` | Determines output doc shape. (Should be last stage)                                                                                    |
| `$set`     | Useful for adjusting existing fields or adding new ones in the pipeline, especially when preparing for upcoming stages in the process. |
| `$count`   | Returns total docs in pipeline.                                                                                                        |
| `$out`     | Store the aggregation output in a collection. (Should be last stage)                                                                   |

## Using `$match` and `$group` Stages in a MongoDB Aggregation Pipeline

Review the following sections, which show the code for the `$match` and `$group` aggregation stages.

### `$match`

The `$match` stage filters for documents that match specified conditions. Here's the code for `$match`:

```ts
{
  $match: { "field_name": "value" }
}
```

### `$group`

The `$group` stage groups documents by a group key.

```js
{
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
}
```

### `$match` and `$group` in an Aggregation Pipeline

The following aggregation pipeline finds the documents with a field named "state" that matches a value "CA" and then groups those documents by the group key "$city" and shows the total number of zip codes in the state of California.

```js
db.zips.aggregate([
  {
    $match: {
      state: "CA",
    },
  },
  {
    $group: {
      _id: "$city",
      totalZips: { $count: {} },
    },
  },
]);
```

## Using `$sort` and `$limit` Stages in a MongoDB Aggregation Pipeline

Review the following sections, which show the code for the `$sort` and `$limit` aggregation stages.

### `$sort`

The `$sort` stage sorts all input documents and returns them to the pipeline in sorted order. We use 1 to represent ascending order, and -1 to represent descending order.

```js
{
  $sort : { "field_name" : 1 }
}
```

### `$limit`

The `$limit` stage returns only a specified number of records.

```
{ $limit: 5 }
```

### `$sort` and `$limit` in an Aggregation Pipeline

The following aggregation pipeline sorts the documents in descending order, so the documents with the greatest `pop` value appear first, and limits the output to only the first five documents after sorting.

```js
db.zips.aggregate([
  {
    $sort: { pop: -1 },
  },
  { $limit: 5 },
]);
```

## Using `$project`, `$count`, and `$set` Stages in a MongoDB Aggregation Pipeline

Review the following sections, which show the code for the `$project`, `$set`, and `$count` aggregation stages.

### `$project`

The `$project` stage specifies the fields of the output documents. 1 means that the field should be included, and 0 means that the field should be supressed. The field can also be assigned a new value.

```js
{
  $project: {
    state: 1,
    zip: 1,
    population: "$pop",// pop value will be returned under population
    _id: 0,
  },
}
```

### `$set`

The `$set` stage creates new fields or changes the value of existing fields, and then outputs the documents with the new fields.

```js
{
  $set: {
    place: {
      $concat: ["$city", ",", "$state"],
    },
    pop: 10000,
  },
}
```

### `$count`

The `$count` stage creates a new document, with the number of documents at that stage in the aggregation pipeline assigned to the specified field name.

```php
{ $count: "total_zips" }
```

`$set` is used to create or change values of new or existing fields. `$project` can be used to create or change the value of fields, but it can also be used to specify which fields to show in the documents in the aggregation pipeline. `$set` and `$project` can both create and assign values to fields, but only `$project` can be used to reshape the data.
