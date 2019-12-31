import React, {Component} from 'react';
import {ScrollView,StyleSheet, View, Text,TouchableOpacity, Image, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default class Kategori extends Component {
    
    render(){
        return(
            <View>
                
                            <View style={styles.container}>

                            <ScrollView>
                                
                                <View style={styles.subContainer}>

                                    <View style={styles.Kategori}>
                                        <Image source={require("../img/fashion.png")} style={styles.img}/>
                                    </View> 
                                </View>

    
                            </ScrollView>   
                            </View>
                
            </View>
        );
    }


}

const styles = StyleSheet.create({  
    subContainer:{ 
        flex: 1,
        flexDirection: 'row',  
        justifyContent: 'center',
        marginTop : 70,
        paddingTop: 15,  
        borderColor : 'black',
        borderRadius: 4,
        borderWidth: 0.1,
    },
    img: {     
        width : 60,
        height : 60,
},
    Kategori : {
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 10,
        
},
subContainer1:{   
    justifyContent: 'center',
    marginTop : 100,
    paddingTop: 15,  
    borderColor : 'black',
    borderRadius: 1,
    borderWidth: 0.1,
},
  brand : {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    
    
} 
});