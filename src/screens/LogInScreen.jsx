import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput, ActivityIndicator, Alert } from 'react-native';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  function onSubmit() {
    setLoading(true);
    return(
      fetch(`https://zone-web-mikey.herokuapp.com/api/login.json?account_id=${accountId.text}&password=${password.text}`)
        .then((response) => response.json())
        .then((jsonData) => {
          setLoading(false);
          if (jsonData['api_token']) {
            navigation.navigate('Main');
          }
          else {
            setFailed(true)
          }
        })
        .catch((error) => Alert.alert(error))
    );
  };

  function loginButton() {
    if (loading) {
      return <ActivityIndicator size="small" />
    } else {
      return <Button title="ログイン" onPress={onSubmit} />
    }
  };

  return(
    <View style={styles.container}>
      {failed && <Text>ログインに失敗しました。</Text>}

      <TextInput
        style={styles.textInput}
        placeholder="アカウントID"
        onChangeText={(text) => setAccountId({text})}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="パスワード"
        onChangeText={(text) => setPassword({text})}
      />
      {loginButton()}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 60,
    width: 300,
    paddingLeft: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
  }
})