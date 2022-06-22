import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pwrddo2s5f01w73d2o80e0/master',
    cache: new InMemoryCache()
});