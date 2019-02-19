import * as React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import ReservationList from '../components/ReservationList';
import HiltonHeader from "../components/HiltonHeader";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {}

class ReservationsScreen extends React.PureComponent<Props, State> {
  public render() {
    return (
      <ScrollView>
        <HiltonHeader title={"RESERVATIONS"}/>

        <Button
          onPress={() => this.props.navigation.navigate('NewReservation')}
          title="Make Reservation"
          color="#104c97"
          accessibilityLabel="Make Reservation"
        />

        <ReservationList />

      </ScrollView>);
  }
}

export default ReservationsScreen;
