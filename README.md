# PeP Reservation Application


### Environment setup:

1. Clone repository

1. Install dependencies 
    ```
     yarn 
    ```
1. Start application with

    ``` 
    react-native run-ios
    ```

    or

    ``` 
    react-native run-android
    ```



### App Screenshots

![Reservations Screenshot](docs/thumb/reservations-screenshot-ios.jpg?raw=true "Reservations")
.
![New Reservation Screenshot](docs/thumb/new-reservation-screenshot-ios.jpg?raw=true "Reservations")


![Reservations Screenshot](docs/thumb/reservations-screenshot-android.jpg?raw=true "Reservations") 
.
![New Reservation Screenshot](docs/thumb/new-reservation-screenshot-android.jpg?raw=true "Reservations")


### Folder structure

The folder structure is set up as follows:

    
    ├── ...
    ├── docs                   # Docs folder
    ├── src                    # Primary source file directory
    │   ├── __snapshots__      # Jest test snapshots
    │   ├── assets             # Images and media
    │   ├── components         # Reusable components folder
    │   ├── screens            # Screen components
    │   ├── types              # Type definitions
    │   ├── App.tsx            # App entry point
    │   ├── AppNavigator.tsx   # Router
    │   └── ...
    └── ...


### Architecture and Design

The application is fully functional on iOS and Android.  The goal of the folder structure was to keep the project 
modular and easy to navigate.  Styles were bundled with their respective component files for encapsulation. In an app 
that has further style reuse across components we could have separate style files. While there isn't much state to
maintain, insertions of new reservations is done via an update to the graphql cache.  This makes reloading the 
reservations list faster after insertion at the risk of an expired cache.  We have some basic validation in place for
form submission which could be extended for a production system.  For code style, we have `tslint` enabled and using the
airbnb recommended styles.  While the infrastructure for testing is in place, due to time constraints, this feature is 
incomplete. Given time, database models would be mocked, all screens would have automatic snapshots, and unit testing 
coverage would be comprehensive.


