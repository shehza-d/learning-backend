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

---


 ACID transactions ensure that database operations, such as transferring funds from one account to another, happen together or not at all. ACID transactions work with the document model in MongoDB. Finally, you learned how to create and use multi-document transactions by using the startTransaction() and commitTransaction() commands, and how to cancel multi-document transactions by using the abortTransaction() command.
