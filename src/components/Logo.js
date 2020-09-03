import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
{/*   <Image source={{require('../assets/logo.png')}} style={styles.image} /> */}

const Logo = () => (
  <Image source={{uri:'https://portaldetiendas.cl/wp-content/uploads/2020/08/IMG_20200825_210822693.jpg'}} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(Logo);
