import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import moment from 'moment'

import Reservation from "../types/ReservationType";

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


interface Props {
  reservation: Reservation
}

const ReservationListItem = (props: Props) => (
  <View
    style={reservationStyles.container}>
    <View style={reservationStyles.itemLeft} >
      <Text style={reservationStyles.primaryText}>{props.reservation.hotelName}</Text>
      <Text>{props.reservation.name}</Text>
    </View>
    <View style={reservationStyles.itemRight} >
      <Text style={{color: 'black'}}>{moment(props.reservation.arrivalDate).format("MMM Do 'YY")} to {moment(props.reservation.arrivalDate).format("MMM Do 'YY")}</Text>
    </View>
  </View>
);

const ReservationList = () => (
  <QueryReservations query={QUERY_RESERVATIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error:{error}</Text>;
      if (!data) return <Text>No Data</Text>;

      const filteredReservations = data.reservations.filter(r => (
        moment(r.arrivalDate).isValid() &&
        moment(r.departureDate).isValid()));

      const sortedReservations = filteredReservations.sort(
        (a, b) => moment(b.arrivalDate) > moment(a.arrivalDate) ? 1 : -1);
      return (
        <FlatList
          style={ reservationStyles.list }
          data={sortedReservations}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <ReservationListItem reservation={item} />}
        />
      );
    }}
  </QueryReservations>
);


const reservationStyles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  itemLeft: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#DDD',
    flex: 0.4,
    marginHorizontal: 1,
    paddingHorizontal: 10,
  },
  itemRight: {
    alignItems: 'flex-start',
    justifyContent: 'center' ,
    backgroundColor: '#EEE',
    flex: 0.6,
    paddingHorizontal: 10,
  },
  primaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});



export default ReservationList;
