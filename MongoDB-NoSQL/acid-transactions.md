# ACID Transactions

An ACID transaction involves a group of database operations that must happen together successfully or not at all.
Used for Value Transactions like `Cash`.

1. **Atomicity:** Guarantees that every transaction is "all or nothing" when committing data to a database. For example, we don't want money to be taken from an account but not successfully added to another.

1. **Consistency:** Guarantees that the data written to the database is consistent with database constraints. For example, if an account balance cannot be less than 0, a transaction would fail before violating this constraint.

1. **Isolation:** Guarantees that each transaction that is run concurrently leaves the database in the same state as if the transactions were run sequentially. In other words, multiple transactions can happen at the same time without affecting the outcome of the other transactions.

1. **Durability:** Guarantees that data is never lost. Data is saved to non-volatile memory, so any modifications made to data by a successful transaction will persist, even in the event of a power or hardware failure.

e.g In the case of a bank account transfer, the database operations MUST happen atomically. This scenario requires the use of ACID properties to guarantee that all operations happen successfully and securely, or that they don't happen at all.

In most scenarios involving the transfer of value, inventory, or ownership of goods, database operations MUST happen atomically. This scenario requires the use of ACID properties to guarantee that both the inventory and shopping cart records are updated together or not at all.

## Multi Document Transactions

- A multi-document must be used to ensure that database operations that affect more than one document in a MongoDB database have ACID properties.

- Multi-document transactions can incur a performance cost. It's important to follow best practices and use multi-document transactions only when ACID properties are essential.
- Using a multi-document transaction guarantees that operations have ACID properties and, therefore, that the database will be in a consistent state once the transaction is complete.
- Using a multi-document transaction guarantees that operations have ACID properties and, therefore, that the database will be in a consistent state once the transaction is complete.
- Unlike single-document operations, multi-document operations are not inherently atomic in MongoDB. Because the group of database operations will be performed on multiple documents and require ACID properties.

## Creating MongoDB Transactions in Node.js Applications

Review the following code, which demonstrates how to create multi-document transactions in MongoDB with Node.js.

### Creating a Transaction

In this section, we'll go through the code to create a transaction step by step. We start the transaction by using the session’s `withTransaction()` method. We then define the sequence of operations to perform inside the transactions, passing the `session` object to each operation in the transactions.

1. Create variables used in the transaction.

   ```js
   // Collections
   const accounts = client.db("bank").collection("accounts");
   const transfers = client.db("bank").collection("transfers");

   // Account information
   let account_id_sender = "MDB574189300";
   let account_id_receiver = "MDB343652528";
   let transaction_amount = 100;
   ```

1. Start a new session.

   ```js
   const session = client.startSession();
   ```

1. Begin a transaction with the `WithTransaction()` method on the session.

   ```js
   const transactionResults = await session.withTransaction(async () => {
     // Operations will go here
   });
   ```

1. Update the `balance` field of the sender’s account by decrementing the `transaction_amount` from the `balance` field.

   ```js
   const senderUpdate = await accounts.updateOne(
     { account_id: account_id_sender },
     { $inc: { balance: -transaction_amount } },
     { session }
   );
   ```

1. Update the `balance` field of the receiver’s account by incrementing the `transaction_amount` to the `balance` field.

   ```js
   const receiverUpdate = await accounts.updateOne(
     { account_id: account_id_receiver },
     { $inc: { balance: transaction_amount } },
     { session }
   );
   ```

1. Create a transfer document and insert it into the `transfers` collection.

   ```js
   const transfer = {
     transfer_id: "TR21872187",
     amount: 100,
     from_account: account_id_sender,
     to_account: account_id_receiver,
   };

   const insertTransferResults = await transfers.insertOne(transfer, {
     session,
   });
   ```

1. Update the `transfers_complete` array of the sender’s account by adding the `transfer_id` to the array.

   ```js
   const updateSenderTransferResults = await accounts.updateOne(
     { account_id: account_id_sender },
     { $push: { transfers_complete: transfer.transfer_id } },
     { session }
   );
   ```

1. Update the `transfers_complete` array of the receiver’s account by adding the `transfer_id` to the array.

   ```js
   const updateReceiverTransferResults = await accounts.updateOne(
     { account_id: account_id_receiver },
     { $push: { transfers_complete: transfer.transfer_id } },
     { session }
   );
   ```

1. Log a message regarding the success or failure of the transaction.

   ```js
   if (transactionResults) {
     console.log("Transaction completed successfully.");
   } else {
     console.log("Transaction failed.");
   }
   ```

1. Catch any errors and close the session.

   ```js
   } catch (err) {
     console.error(`Transaction aborted: ${err}`)
     process.exit(1)
   } finally {
     await session.endSession()
     await client.close()
   }
   ```

---

ACID transactions ensure that database operations, such as transferring funds from one account to another, happen together or not at all. ACID transactions work with the document model in MongoDB. Finally, you learned how to create and use multi-document transactions by using the startTransaction() and commitTransaction() commands, and how to cancel multi-document transactions by using the abortTransaction() command.

```js
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    await collection.deleteOne({ _id: 1 }, { session });
    await collection.deleteOne({ _id: 2 }, { session });
    await collection.updateOne(
      { _id: 3 },
      { $set: { name: "New Name" } },
      { session }
    );
    await collection.insertOne({ _id: 4, name: "New Document" }, { session });
  });
} catch (error) {
  console.log(error);
} finally {
  await session.endSession();
}
```
