# Querying on Array Elements in MongoDB

Review the following code, which demonstrates how to query array elements in MongoDB.

## Find Documents with an Array That Contains a Specified Value

In the following example, "InvestmentFund" is not enclosed in square brackets, so MongoDB returns all documents within the `products` array that contain the specified value.

```js
db.accounts.find({ products: "InvestmentFund" });
```

## Find a Document by Using the `$elemMatch` Operator

Use the `$elemMatch` operator to find all documents that contain the specified subdocument. For example:

```js
db.sales.find({
  items: {
    $elemMatch: {
      name: "laptop",
      price: { $gt: 800 },
      quantity: { $gte: 1 },
    },
  },
});
```
