import { readFileSync } from "fs";

// Read the contents of each GraphQL schema file
const objects = readFileSync(
  require.resolve("./typeDefs/objects.graphql")
).toString("utf-8");
const queries = readFileSync(
  require.resolve("./typeDefs/queries.graphql")
).toString("utf-8");
const mutations = readFileSync(
  require.resolve("./typeDefs/mutations.graphql")
).toString("utf-8");

// Combine the schema strings
const typeDefs = [objects, queries, mutations];

export { typeDefs };
