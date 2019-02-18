import { createAppContainer, createStackNavigator } from 'react-navigation';

import ReservationsScreen from './screens/ReservationsScreen';
import NewReservationScreen from './screens/NewReservationScreen';

const AppNavigator = createStackNavigator({
        Reservations: {
            screen: ReservationsScreen
        },
        NewReservation: {
            screen: NewReservationScreen
        },
    },
    {
        initialRouteName: "Reservations"
    }
);

export default createAppContainer(AppNavigator);
