import { split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjbn2jmfr2ks50186u47e01hg',
});

const wsLink = WebSocketLink({
  uri: 'wss://subscriptions.us-west-2.graph.cool/v1/cjbn2jmfr2ks50186u47e01hg',
  options: { reconnect: true },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefiniton' && operation === 'subscription';
  },
  wsLink, // if the subscription return a websocket link
  httpLink, // else return a httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
