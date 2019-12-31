import React, { Component }  from   'react' ;   
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button }  from   'react-native' ;   
import { firebase } from '@react-native-firebase/auth';   
 
export  default   class   Login   extends   Component  {  
 constructor ()   { 
   super ()  ;  this 
   .state = {        
    email: '' ,        
    password: ''  
   }; 
 }   handleChangeInput = field => text => { 
     this .setState({ [field]: text });   
 };  handleOnSubmit = async  () => {  
   const  { email, password } =  this .state;   
   await  firebase.auth().signInWithEmailAndPassword(email, password);  
   this .props.navigation.navigate(  'Home'  )  ; 
 };
 render() {
     return  ( 
      <View style={styles.container}>
        <View style={styles.wrapper}> 
          <Text style={styles.title}>LOGIN</Text> 
          <TextInput style={styles.input} 
          placeholder="Email"
          onChangeText={this.handleChangeInput('email')} 
          /> 
          <TextInput style={styles.input}
          placeholder="Password"
          onChangeText={this.handleChangeInput('password')}  
          secureTextEntry={true}/> 
          <Button title="Submit" color="#194f34" onPress={this.handleOnSubmit} /> 
        
        </View>

        <View style={styles.textAccount}>
          <Text>Doesn't have an account?</Text> 
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Signup Now</Text>
          </TouchableOpacity>
        </View>
      
        
      </View> 
   ); 
 } 
}  const styles = StyleSheet.create({  
wrapper: {    
    display: 'flex',    
    justifyContent: 'center',    
    marginTop: 100,    
    padding: 16 
 },
 container: {
  color: "#194f34",
 },
 title: {    
     fontWeight: 'bold',    
     fontSize: 32,    
     textAlign: 'center',    
     marginBottom: 24 
 },  
 input: {    
     borderColor: 'grey',    
     borderWidth: 1,    
     marginBottom: 16, 
     borderRadius : 10
 },  
 textAccount: {    
    flexDirection: "row",
    justifyContent: 'center',
    marginTop : 300
  } 
}); 
 
