import React, { Component }  from   'react' ;     
import { StyleSheet, View, Text, TouchableOpacity, ScrollView,Image, TextInput, Button, ActivityIndicator }  from   'react-native' ;   
import { firebase } from '@react-native-firebase/auth';
import ImagePicker from "react-native-image-picker";
import OneSignal from 'react-native-onesignal';
import axios from 'axios';


export default class Produk extends Component {

    render(){
        return(
            
            <View style={styles.container}>
                
                
                    <Image source={require("../img/converse.png")} style={styles.headerimg}/>
                
                <ScrollView>
                    <View style={styles.imglogoContainer}>
                        <View style={styles.imglogo1}>
                            <Image source={require("../img/converse.png")} style={styles.imglogo}/>
                        </View>
                    </View>

                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                            <ScrollView horizontal={true}>
                                    <View style={styles.imgFeaturedSlide}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                                <View style={styles.imgFeaturedSlide}>
                                    <View>
                                        <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                    </View>
                                    <View  style={styles.produka}>
                                        <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                    </View>
                                </View>
                                <View style={styles.imgFeaturedSlide}>
                                    <View>
                                        <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                    </View>
                                    <View style={styles.produka}>
                                        <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                                    <View style={styles.imgFeatured1}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                        </View>
                    </View>
                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                                    <View style={styles.imgFeatured1}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                        </View>
                    </View>
                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                                    <View style={styles.imgFeatured1}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                        </View>
                    </View>
                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                                    <View style={styles.imgFeatured1}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                        </View>
                    </View>
                    <View style={styles.furnitured}>
                        <View style={styles.textFeaturedContainer}>
                            <Text style={styles.textFeatured}>FURNITURED</Text>
                        </View>
                        <View style={styles.imgFeaturedContainer}>
                                    <View style={styles.imgFeatured1}>
                                        <View>
                                            <Image source={require("../img/converse.png")} style={styles.imgFeatured}/>
                                        </View>
                                        <View style={styles.produka}>
                                            <Text style={styles.textFeaturedItem}>LOVE YOUR STYLE</Text>
                                        </View>
                                    </View>
                        </View>
                    </View>





                
                
                <View><Text></Text></View>
                <View><Text></Text></View>
                <View><Text></Text></View>
                <View><Text></Text></View>
                <View><Text></Text></View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
container: {     
    // maxWidth: 360,
    backgroundColor: 'white',
  
},
headerimg: {     
    width: 50,
    height: 50,
    marginLeft: 300,
    
},
imglogo:{
    width:360,
    height: 250,
    backgroundColor: 'green',

},
imglogo1:{
    textAlign:'center',
    backgroundColor: 'blue',
},
furnitured: {
    borderTopWidth: 0.5,
},
textFeaturedContainer:{
    // width: 150,
    justifyContent: 'center',
    width: 120,
    marginTop: 30,
},
imgFeaturedContainer:{
    marginBottom: 20,
    borderColor : 'black',
    borderWidth: 0.1,
},
textFeatured:{
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    fontSize: 20,
    marginLeft: 130,
    padding: 5,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    width: 120,
},
imgFeatured:{
    // marginTop: 10,
    width:360,
    height: 250,
    padding: 10,
},
imgFeaturedSlide:{
    justifyContent: 'center',
    marginBottom: 1,
    marginRight: 5,
    padding: 5,  
    borderColor : 'black',
    borderWidth: 1,
},
imgFeatured1:{
    justifyContent: 'center',
    marginBottom: 1,
},
textFeaturedItem: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
},
produka: {
    backgroundColor: '#fff',
    padding: 3,
    textAlign : 'center',
}




});