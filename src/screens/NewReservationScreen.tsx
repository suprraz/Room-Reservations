import * as React from "react";
import {Button, DatePickerIOS, Platform, StyleSheet, Text, TextInput, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        // flex: 1,
    },
});


//input ReservationCreateInput {
//   name: String!
//   hotelName: String!
//   arrivalDate: String!
//   departureDate: String!
// }

class NewReservationScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            text: null,
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }

    render() {


        return (
            <View style={styles.container}>
                <Text>New Reservation</Text>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />

                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />

                <Button
                    onPress={() => this.props.navigation.navigate('NewReservation')}
                    title="Book"
                    color="#841584"
                    accessibilityLabel="Book Reservation"
                />
            </View>);
    }
}

export default NewReservationScreen;
