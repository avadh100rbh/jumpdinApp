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
import {images} from '../../theme';
import CheckBox from '@react-native-community/checkbox';
export default function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white"/>
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.jump}>Jumpd</Text>
          <Text style={styles.in}>in</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signin}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Sign in</Text>
      <View style={{width: '90%', alignSelf: 'center'}}>
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
        <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('drawer')}>
          <Text style={styles.loginText}>Continue</Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.remb}>Remember me.</Text>
          <Text style={styles.more}>Learn more</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password</Text>
        </TouchableOpacity>

        <View style={styles.brdrvw}></View>
        <View style={styles.or}>
          <Text style={{fontWeight: '700', fontSize: 18}}>or</Text>
        </View>
        <View style={styles.gbtn}>
          <Image style={styles.img} source={images.download}/>
          <TouchableOpacity>
            <Text style={styles.gtxt}>Signin with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gbtn}>
          <Image style={styles.img} source={images.apple} />
          <TouchableOpacity>
            <Text style={styles.gtxt}>Signin with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
  },
  jump: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4199e1',
  },
  in: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#4199e1',
    marginLeft: 5,
    width: 20,
    textAlign: 'center',
    // borderRadius: 10,
  },
  signin: {
    fontSize: 20,
    color: '#4199e1',
    // paddingVertical:25,
    fontWeight: 'bold',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    // marginTop: 10,
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
  txt: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: '#4199e1',
    alignSelf: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  brdrvw: {
    width: '100%',
    borderWidth: 0.7,
    marginTop: 22,
    // borderStyle: 'dashed',
    borderColor: 'grey',
    alignSelf: 'center',
    marginTop: 28,
  },
  or: {
    height: 40,
    width: 40,
    // borderRadius: 22,
    // borderWidth: 1,
    // borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 10,
    // shadowColor: 'grey',
    bottom: 22,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  gbtn: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
    // backgroundColor: '#4199e1',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  gtxt: {
    fontSize: 20,
    color: 'grey',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  img: {
    height: 35,
    width: 35,
  },
  checkbox: {
    // alignSelf: "center",
  },
  remb: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  more: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4199e1',
  },
  forgot: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4199e1',
    marginTop: 15,
  },
});
