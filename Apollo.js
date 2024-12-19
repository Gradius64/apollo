

import { InMemoryCache } from '@apollo/cache/InMemoryCache';

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
}

)
