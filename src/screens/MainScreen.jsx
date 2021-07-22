import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MainScreen(props) {
  const { navigation } = props;
  return(
    <View style={styles.container}>
      <Button
      title='ログアウト'
      onPress={() => { navigation.navigate('Login') }}
      >
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})