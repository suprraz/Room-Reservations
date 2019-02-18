import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import ReservationList from '../components/ReservationList';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // flex: 1,
  },
});

class ReservationsScreen extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>Res Lis 2t</Text>

                <ReservationList/>

                <Button
                    onPress={() => this.props.navigation.navigate('NewReservation')}
                    title="New Reservation"
                    color="#841584"
                    accessibilityLabel="New Reservation"
                />
            </View>);
    }
}

export default ReservationsScreen;
