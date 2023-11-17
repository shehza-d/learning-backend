# Introduction to MongoDB Aggregation

This section contains key definitions for this lesson, as well as the code for an aggregation pipeline.

## Definitions

- **Aggregation**: Collection and summary of data.

- **Stage**: One of the built-in methods that can be completed on the data, but does not permanently alter it.

- **Aggregation pipeline**: A series of stages completed on the data in order.

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
