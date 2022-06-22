import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqific0u9r01xkdlxwc3e4/master',
  cache: new InMemoryCache()
})