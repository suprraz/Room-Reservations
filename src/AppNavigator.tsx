import { createAppContainer, createStackNavigator } from 'react-navigation';

import NewReservationScreen from './screens/NewReservationScreen';
import ReservationsScreen from './screens/ReservationsScreen';

const AppNavigator = createStackNavigator(
  {
    Reservations: {
      screen: ReservationsScreen,
    },
    NewReservation: {
      screen: NewReservationScreen,
    },
  },
  {
    initialRouteName: 'Reservations',
  },
);

export default createAppContainer(AppNavigator);
