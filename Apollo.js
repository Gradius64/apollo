import { getMainDefinition } from '@apollo/client';

import { ApolloClient } from '@apollo/client';

import { InMemoryCache } from '@apollo/cache/InMemoryCache';

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
}

)
