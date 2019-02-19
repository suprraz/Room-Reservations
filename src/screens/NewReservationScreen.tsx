import * as React from 'react';
import {Mutation} from "react-apollo";
import gql from 'graphql-tag';

import ReservationEntry from '../components/ReservationEntry';
import ReservationCreateInputType from '../types/ReservationCreateInputType';
import {Alert, ScrollView} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import HiltonHeader from "../components/HiltonHeader";

const CREATE_RESERVATION = gql`
  mutation CreateReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

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

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const NewReservationScreen = (props: Props) => (
  <Mutation
    mutation={CREATE_RESERVATION}
    update={(cache, { data : { createReservation }}) => {
      const { reservations } = cache.readQuery({ query: QUERY_RESERVATIONS });
      cache.writeQuery({
        query: QUERY_RESERVATIONS,
        data: { reservations: reservations.concat([createReservation]) },
      });
    }}
  >
    {(createReservation) => {
      const create = (data: ReservationCreateInputType) => {
        createReservation({variables: {data}})
          .then(() => {
            Alert.alert(
              'Registration complete',
              '',
              [
                {text: 'OK', onPress: () => props.navigation.navigate('Reservations')},
              ]);
            ;
          }).catch(() => {
          Alert.alert('There was an error submitting your form, please try again later.');
        });
      };

      return (
        <ScrollView>
          <HiltonHeader title={'NEW RESERVATION'}/>

          <ReservationEntry onSubmit={create} />
        </ScrollView>
      );
    }}
  </Mutation>
);

export default NewReservationScreen;
