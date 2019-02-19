import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { FlatList, Text } from 'react-native';

const QUERY_RESERVATIONS = gql`
query  {
  reservations {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}
`;

interface Data {
  reservations: Array<{
    id: string;
    name: string;
    hotelName: string;
    arrivalDate: string;
    departureDate: string;
  }>;
}

class QueryReservations extends Query<Data> {}

const ReservationList = () => (
  <QueryReservations query={QUERY_RESERVATIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error:{error}</Text>;
      if (!data) return <Text>No Data</Text>;
      return (
        <FlatList
          data={data.reservations}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      );
    }}
  </QueryReservations>
);

export default ReservationList;
