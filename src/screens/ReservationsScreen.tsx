import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import { NavigationScreenProp } from 'react-navigation';
import ReservationList from '../components/ReservationList';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'darkgray',
    width: '100%',
    textAlign: 'center',
    marginVertical: 20,
  },
});

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {}

class ReservationsScreen extends React.PureComponent<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, styles.title]}>RESERVATIONS</Text>

        <Button
          onPress={() => this.props.navigation.navigate('NewReservation')}
          title="Make Reservation"
          color="#841584"
          accessibilityLabel="Make Reservation"
        />

        <ReservationList />

      </View>);
  }
}

export default ReservationsScreen;
