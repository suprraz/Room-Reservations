import * as React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';

import AppNavigator from "./AppNavigator";
import {View, Text} from "react-native";

interface Props {}

interface States {}

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev"
});

export default class App extends React.Component<Props, States> {
    public render() {
        return (
            <ApolloProvider client={client}>
                <AppNavigator />
            </ApolloProvider>
        );
    }
}
