import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationScreenProp } from 'react-navigation';
import ReservationList from '../components/ReservationList';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // flex: 1,
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

        <Button
          onPress={() => this.props.navigation.navigate('NewReservation')}
          title="New Reservation"
          color="#841584"
          accessibilityLabel="New Reservation"
        />

        <ReservationList/>

      </View>);
  }
}

export default ReservationsScreen;
