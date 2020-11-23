module.exports = {
  client: {
    tagName: "gql",
    includes: ["**/*.tsx"],
    service: {
      localSchemaFile: __dirname + "/graphql/schema.json",
    },
  },
};
