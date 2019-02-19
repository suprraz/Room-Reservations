import * as React from 'react';
import {Mutation} from "react-apollo";
import gql from 'graphql-tag';

import ReservationEntry from '../components/ReservationEntry';
import ReservationCreateInputType from '../types/ReservationCreateInputType';

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

const NewReservationScreen = () => (
  <Mutation mutation={CREATE_RESERVATION}>
    {(createReservation) => {
      const create = (data: ReservationCreateInputType) =>
        createReservation({ variables: { data } });

      return (
        <ReservationEntry onSubmit={create} />
      );
    }}
  </Mutation>
);

export default NewReservationScreen;
