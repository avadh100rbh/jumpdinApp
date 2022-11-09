import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {images} from '../../theme';

export default function Home({navigation}) {
  const [search, setSearch] = useState('');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  

  

  const renderItem = ({item}) => (
    <>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          // height: 600,
          alignSelf: 'center',
          marginTop: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center',paddingLeft:8}}>
          <Image style={{width: 25, height: 25}} source={images.download} />
          <Text style={{fontSize:16,color:'black',fontFamily:'SFProText-Medium'}}>Ranveer likes this</Text>
        </View>
        <View
          style={{
            width: '94%',
            borderWidth:0.5,
            backgroundColor: 'grey',
            marginTop:10,
            alignSelf:'center'
          }}>
            
          </View>
        <View style={{flexDirection:'row',marginTop:10,paddingLeft:7}}>
          <Image style={{width: 50, height: 50}} source={images.download}/>
          <View>
          <Text style={{fontSize:16,color:'black',fontFamily:'SFProText-Medium'}}>Harshil karia</Text>
          <Text style={{color:'black',fontFamily:'SFProText-Medium'}}>3 Time Enterpreneur</Text>
          </View>
        </View>
        <Text style={{fontSize:14,paddingHorizontal:15,fontFamily:'SFProText-Medium',color:'black',marginTop:5}}>Exciting collaboration in the works with Mumbai Traffic Police for dusshera!</Text>
        <Image style={{width: "100%", height: 350,marginTop:8}} source={images.mahadev} />
        <View style={{flexDirection:'row' }}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',width:'50%',marginLeft:10,marginTop:8,alignItems:'center'}}>
        <Image style={{width: 20, height: 20}} source={images.like} />
        <Text style={{marginLeft:5,fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}}>2548</Text>
        </View>
        <View style={{flexDirection:'row',marginRight:15,marginTop:8,alignItems:'center',justifyContent:'flex-end'}}>
        <Text style={{marginLeft:5,fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}}>89 comments.</Text>
        <Text style={{marginLeft:5,fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}}>51 shares</Text>
        </View>
        </View>
        <View
          style={{
            width: '94%',
            borderWidth:0.5,
            backgroundColor: 'grey',
            marginTop:10,
            alignSelf:'center'
          }}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:10,width:'90%',alignSelf:'center', paddingBottom:2}}>
            <View style={{alignItems:'center'}}>
          <Image style={{width: 18, height: 18}} source={images.likes} />
          <Text style={{fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}} >Like</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Image style={{width: 18, height: 18}} source={images.comment} />
          <Text style={{fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}}>Comment</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Image style={{width: 18, height: 18}} source={images.share} />
          <Text style={{fontSize:12,color:'grey',fontFami30ly:'SFProText-Medium'}}>Share</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Image style={{width: 18, height: 18}} source={images.send} />
          <Text style={{fontSize:12,color:'grey',fontFamily:'SFProText-Medium'}}>Send</Text>
          </View>
         </View>
      </View>
    </>
  );


  

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View
        style={{
          backgroundColor: 'white',
          height: 44,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          
        //   paddingBottom:8,
        //   paddingTop:10
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} 
          
            style={{
              height: 35,
              width: 35,
              borderRadius: 18,
            }}>
              
            <Image
              style={{width: 35, height: 35, borderRadius: 18}}
              source={images.mahadev}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#add8e6',
            width: '70%',
            height: 40,
            justifyContent: 'center',
            borderRadius:5,
            marginBottom:8
           
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '35%',
              justifyContent: 'space-between',
              paddingLeft: 8,
              alignContent: 'center',
            }}>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 14,
                top: 8,
              }}>
              <Image style={{width:25,height:25,borderRadius: 14}} source={images.search} />
            </View>
            <TextInput
              style={styles.txtinput}
              placeholder="Search"
              placeholderTextColor="grey"
              onChangeText={search => setSearch(search)}
            />
          </View>
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'red',
            borderRadius: 14,
          }}>
          <Image style={{width:30,height:30, borderRadius: 14}} source={images.message} />
        </View>
      </View>
      <FlatList
        style={{width: '100%'}}
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
  },
  txtinput: {
    fontSize: 16,
    borderBottomColor: 'grey',
  },
});
