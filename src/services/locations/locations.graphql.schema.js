export default [
  `
  type LocationsWithPagination {
    total: Int
    items: [Locations]
  }
  
  type Locations {
    _id: String!
    title: String!
    country: Country
  }

  type Country {
    _id: String!,
    title: String!
  }
`,
];
