import { readFileSync } from "fs-extra";
import { resolvers } from "./resolvers/resolvers";

const objects = readFileSync(
  require.resolve("./typeDefs/objects.graphql"),
  "utf-8"
);
const queries = readFileSync(
  require.resolve("./typeDefs/queries.graphql"),
  "utf-8"
);
const mutations = readFileSync(
  require.resolve("./typeDefs/mutations.graphql"),
  "utf-8"
);

// Combine the schema strings
const typeDefs = [objects, queries, mutations];

export { typeDefs, resolvers };
