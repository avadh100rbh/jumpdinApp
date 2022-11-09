import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {images} from '../../theme';
export default function Profile({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="white" />
      <View style={styles.image}>
        <Image source={images.ots} />
        <Text style={styles.txt}> Login </Text>
      </View>
      <View style={{width: '90%'}}>
        <Text style={styles.emltxt}> Email Address </Text>
        <TextInput
          style={styles.txtinput}
          placeholder="Email Address"
          placeholderTextColor="grey"
          onChangeText={email => setEmail(email)}
        />
        <Text style={styles.emltxt}> Password </Text>
        <TextInput
          style={styles.txtinput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          maxLength={10}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 8}}>
        <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold'}}>
          Login using phone
        </Text>
      </TouchableOpacity>
      <View style={styles.crtvw}>
        <TouchableOpacity
          style={{paddingVertical: 8}}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.emltxt}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingVertical: 8}}
          onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.emltxt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.brdrvw}></View>
      <View style={styles.or}>
        <Text style={{fontWeight: '700', fontSize: 14}}>OR</Text>
      </View>
      <Text style={styles.emltxt}>Sign in using</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.fbvw}>
          <Text style={styles.fbtxt}> f </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbvw}>
          <Text style={styles.fbtxt}> G </Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
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
    fontSize: 16,
    color: 'white',
  },
  crtvw: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: 10,
  },
  brdrvw: {
    width: '90%',
    borderWidth: 0.7,
    marginTop: 22,
    borderStyle: 'dashed',
    borderColor: 'grey',
  },
  or: {
    height: 40,
    width: 40,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'grey',
    bottom: 22,
    backgroundColor: 'white',
  },
  fbvw: {
    borderWidth: 1.5,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 24,
    marginTop: 8,
  },
  fbtxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});
