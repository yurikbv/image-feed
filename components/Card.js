import React, {useState} from 'react';

import {Text, View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import AuthorRow from "./AuthorRow";

const Card = ({fullName, image, linkText, onPressLinkText}) => {
  
  const [loading, setLoading] = useState(true);
  
  const handleLoad = () => setLoading(false);
  
  return (
    <View>
      <AuthorRow linkText={linkText} fullName={fullName} onPressLinkText={onPressLinkText}/>
      <View style={styles.image}>
        {loading && <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} color="#0000ff"/>}
        <Image style={StyleSheet.absoluteFill} source={image} onLoad={handleLoad}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});

export default Card;
