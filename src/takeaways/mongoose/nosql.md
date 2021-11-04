---
layout: layouts/page.njk
title: Getting started with NoSQL
---
:::terms
### Terminology
Document Database
: A type of NoSQL (Not-only SQL) database that stores its data as documents on the file system. MongoDB is a `json` document database.

Database
: Holds one or more collections.

Collection
: A collection of documents (i.e. a fancy folder). Collections are analogous to tables in relational databases.

Document
: MongoDB stores data in the form of `json` Documents (technically BSON documents). Each document is analagous to a row in a relational database.
:::

## Materials
- [What is NoSQL?](https://www.mongodb.com/nosql-explained)
- [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

## Key Takeaways
- MongoDB is a file database engine. It literally stores its data as a folder (i.e. Collection) of `json` files (i.e. Documents).
- Working with MongoDB is a little messy so we use the `mongoose` package to:
  - use a simpler syntax;
  - ensure the documents in a collection have the same structure;
  - hide the gritty details like promises and asynchronous things.