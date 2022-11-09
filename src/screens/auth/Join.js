import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {images} from '../../theme';

export default function Join({navigation}) {
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="white" />
      <View style={styles.top}>
        <Text style={styles.jump}>Jumpd</Text>
        <Text style={styles.in}>in</Text>
      </View>
     
        <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('Add')}>
          <Text style={styles.loginText}>Join now</Text>
        </TouchableOpacity>
        <View style={styles.gbtn}>
        <Image style={styles.img} source={images.download} />
        <TouchableOpacity>
          <Text style={styles.gtxt}>Continue with Google</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signin}>Sign in</Text>
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
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '50%',
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
  loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 35,
    backgroundColor: '#4199e1',
    width:"90%",
  },
  loginText: {
    fontSize: 20,
    color: 'white',
    fontWeight:'bold'
  },
  gbtn: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width:"90%",
    // backgroundColor: '#4199e1',
    borderWidth:1.5,
    flexDirection:'row'
  },
  gtxt: {
    fontSize: 20,
    color: 'grey',
    marginHorizontal:10,
    fontWeight:'bold'
  },
  img: {
    height:35,
    width:35,
  },
  signin: {
    fontSize: 20,
    color:'#4199e1',
    paddingVertical:25,
    fontWeight:'bold'
  },
});
