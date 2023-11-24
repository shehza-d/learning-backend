# Data Modeling

Data that is accessed together should be stored together.

<img src='./relationships.png'/>

## Points

- Defining how data is stored is one function of data modeling. Data modeling helps you use your data effectively to meet information needs.
- The document model does not enforce any document structure by default. This means that documents, even in the same collection can have different structures.
- Structure your data to match the ways that your application queries and update it (data).

- Defining the relationships that exist among different entities in your data is one function of data modeling. Data modeling enables you to document data requirements for applications and identify errors in development plans before any code is written.
- A proper data model makes it easier to manage your data. It will sustain growing data volumes and adjust easily to the addition or deletion of data.
- A proper data model makes queries more efficient. It helps developers understand the database and tune it for fast performance, which makes reading and writing to the database faster.
- A proper data model uses less memory and CPU. Data modeling helps you better estimate and model memory requirements.
- A proper data model can reduce costs by using your database more efficiently. Data modeling catches errors and oversights early, when they are easier to fix.

## Relations

1. **One to one:** A relationship where a data entity in one set is connected to exactly one data entity in another set.

2. **One to Many:** A relationship where a data entity in one set is connected to any number of data entities in another set.
3. **Many to Many:** A relationship where any number of data entity in one set are connected to any number of data entities in another set.

## Embedding vs. Referencing

These are 2 primary way to model relationships in MongoDB

Here's a quick summary of the pro's and con's of embedding vs. referencing in MongoDB:
<img src='./embedding.png'/>

1. **Embedding:** We take related data and insert it into our document. Also called `Nested Documents` (i.e this is not vector embedding)

1. **Referencing:** We refer to documents in another collection in our document.

<img src='./Embedding-Referencing-example.png'/>
