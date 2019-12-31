import React, { Component }  from   'react' ;   
import { StyleSheet, View, ActivityIndicator }  from   'react-native' ;   
import { firebase } from '@react-native-firebase/auth';   

 export default class SplashScreen extends Component  {   
     componentDidMount() {    
         firebase.auth().onAuthStateChanged(user => {      
             setTimeout(() => { 
       if  (user) {  
         this .props.navigation.navigate(  'Home'  )  ; 
       } else  {  
         this .props.navigation.navigate(  'Login'  )  ; 
       } 
     }, 1000 )  ; 
   }); 
 }  
 render() {    
     return  (  
     <View style={  styles.wrapper}>   
       <ActivityIndicator size="large" color= "white"/>  
     </View> 
   ); 
 } 
}  const styles = StyleSheet.create({  
    wrapper: {    
        backgroundColor: 'blue',    
        height: '100%',    
        display: 'flex', 
        justifyContent: 'center' 
 } 
}); 
