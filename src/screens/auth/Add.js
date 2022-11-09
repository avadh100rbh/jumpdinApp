import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default function Add({navigation}) {

  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="white" />
      <View style={styles.top}>
        <Text style={styles.jump}>Jumpd</Text>
        <Text style={styles.in}>in</Text>
      </View>
      <Text style={styles.add}>Add your name</Text>
      <View style={{width: '90%'}}>
        <Text style={styles.emltxt}> First name </Text>
        <TextInput
          style={styles.txtinput}
          placeholder="First name"
          placeholderTextColor="grey"
          onChangeText={name => setName(name)}
        />
       <Text style={styles.emltxt}>Last name</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="Last name"
          placeholderTextColor="grey"
          onChangeText={lastName => setLastname(lastName)}
        />
        <Text style={styles.emltxt}>Email</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="Email address"
          placeholderTextColor="grey"
          onChangeText={email => setEmail(email)}
        />
        
      </View>
      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  txt: {
    marginTop: 20,
    fontWeight: '400',
    color: 'black',
    fontSize: 25,
  },
  emltxt: {
    fontSize: 16,
    marginTop: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  txtinput: {
    borderBottomWidth: 1.5,
    fontSize: 16,
    borderBottomColor: 'grey',
  },
  loginBtn: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: '#4199e1',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  top: {
    flexDirection: 'row',
    marginTop:40,
    marginBottom:40
  },
  jump: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#4199e1',
  },
  in: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    backgroundColor: '#4199e1',
    marginLeft: 5,
    width: 50,
    textAlign: 'center',
    borderRadius: 10,
  },
  add: {
    fontWeight:'bold',
    fontSize:28, 
    marginBottom:40
  },
});
