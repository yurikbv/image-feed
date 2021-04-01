import React from 'react';
import {Text, View, ColorPropType, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({size, backgroundColor, initials}) => {
  return (
    <View style={[{width: size, height: size, borderRadius: size / 2, backgroundColor}, styles.container]} >
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
};

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    color: 'white'
  }
})

export default Avatar;
