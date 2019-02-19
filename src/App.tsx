import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from './AppNavigator';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev',
});

export default class App extends React.PureComponent {
  public render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator/>
      </ApolloProvider>
    );
  }
}
