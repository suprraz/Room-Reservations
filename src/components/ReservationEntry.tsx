import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';

import ReservationCreateInputType from '../types/ReservationCreateInputType';

interface Props {
  onSubmit(reservationCreateInput: ReservationCreateInputType): void;
}

interface State {
  arrivalDate: string;
  departureDate: string;
  name: string;
  hotelName: string;
  error: string;
}

const hotels = [
  {
    label: 'Hilton NYC',
    value: 'Hilton NYC',
  },
  {
    label: 'Hilton LAX',
    value: 'Hilton LAX',
  },
  {
    label: 'Hilton Garden Inn',
    value: 'Hilton Garden Inn',
  },
];

class ReservationEntry extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      arrivalDate: '',
      departureDate: '',
      name: '',
      hotelName: '',
      error: '',
    };
  }

  private validateAndSubmit() {
    if(!this.state.hotelName) {
      this.setState({error: 'Please select a hotel'});
      return;
    }
    if(!this.state.arrivalDate) {
      this.setState({error: 'Please choose an arrival date'});
      return;
    }
    if(!this.state.departureDate) {
      this.setState({error: 'Please choose a departure date'});
      return;
    }
    if(!this.state.name || this.state.name.length < 3) {
      this.setState({error: 'Please type the name on the reservation'});
      return;
    }

    this.props.onSubmit({
      hotelName: this.state.hotelName,
      name: this.state.name,
      arrivalDate: this.state.arrivalDate,
      departureDate: this.state.departureDate,
    });
  }

  public render() {
    const placeholder = {
      label: 'Select a hotel...',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Hotel</Text>
        <RNPickerSelect
          placeholder={placeholder}
          items={hotels}
          onValueChange={(value) => {
            this.setState({
              hotelName: value,
            });
          }}
          style={pickerSelectStyles}
          value={this.state.hotelName}
        />

        <Text style={styles.label}>Arrival Date</Text>
        <DatePicker
          style={styles.datePicker}
          date={this.state.arrivalDate}
          mode="date"
          placeholder="Select arrival date"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={customDatePickerStyles}
          onDateChange={arrivalDate => {this.setState({arrivalDate})}}
        />

        <Text style={styles.label}>Departure Date</Text>
        <DatePicker
          style={styles.datePicker}
          date={this.state.departureDate}
          mode="date"
          placeholder="Select departure date"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={customDatePickerStyles}
          onDateChange={departureDate => {this.setState({departureDate})}}
        />


        <Text style={styles.label}>Name on the reservation</Text>
        <TextInput
          placeholder={'Client Name'}
          style={[styles.input, styles.textInput]}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />

        <Text style={styles.error}>{this.state.error}</Text>

        <Button
          onPress={() => this.validateAndSubmit()}
          title="Book Reservation"
          color="#104c97"
          accessibilityLabel="Book Reservation"
        />
      </View>);
  }

}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 15,
    width: '100%',
    textAlign: 'center'
  },
  input: {
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },
  textInput: {
    height: 44,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
  },
  error: {
    marginTop: 20,
    marginBottom: 20,
    color: 'red',
    width: '100%',
    textAlign: 'center',
  },
  datePicker: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 4,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    alignSelf: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    alignSelf: 'center',
  },
});

const customDatePickerStyles = StyleSheet.create({
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    borderRadius: 4,
  }
});

export default ReservationEntry;
