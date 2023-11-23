# Atlas Search

<img src='./atlas-search.png'/>

- Relevance-based search on MongoDB is where the user searched for "Pakistan" and the results returned were relevant to that search term.

- A search index is used to describe how the application search algorithm should work. You can customize this with Atlas Search.
- A search with a dynamic index will query against all of the fields, including nested fields, with equal weight placed on all fields.

## Using `$search` and Compound Operators

The compound operator within the `$search` aggregation stage allows us to give weight to different field and also filter our results without having to create additional aggregation stages. The four options for the compound operator are "must", "mustNot, "should", and "filter".

"must" will exclude records that do not meet the criteria. "mustNot" will exclude results that do meet the criteria. "should" will allow you to give weight to results that do meet the criteria so that they appear first. "filter" will remove results that do not meet the criteria.

```js
[
  {
    $search: {
      compound: {
        must: [
          {
            text: {
              query: "field",
              path: "habitat",
            },
          },
        ],
        should: [
          {
            range: {
              gte: 45,
              path: "wingspan_cm",
              score: { constant: { value: 5 } },
            },
          },
        ],
      },
    },
  },
];
```

https://learn.mongodb.com/learn/course/mongodb-atlas-search/lesson-2-creating-a-search-index-with-dynamic-mapping/learn?client=customer

// apply this vector search in youtube..remove
