import {Image, StyleSheet, Text, View} from "react-native";
import * as React from "react";

import Logo from "../assets/Hilton_logo.png";

interface Props {
  title: string;
}

const HiltonHeader = (props: Props) => (
  <View>
    <View style={styles.header}></View>
    <Image
      style={styles.logo}
      source={Logo}
    />
    <Text style={[styles.label, styles.title]}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#104c97',
    height: 20,
  },
  title: {
    fontSize: 20,
    color: 'darkgray',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    marginVertical: 20,
    resizeMode: 'contain',
  }
});

export default HiltonHeader;
