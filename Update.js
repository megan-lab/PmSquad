import React, { Component }  from   'react' ;     
import { StyleSheet, View, Text, TextInput, Button,Image, ActivityIndicator }  from   'react-native' ;   
import { firebase } from '@react-native-firebase/auth'; 
import ImagePicker from "react-native-image-picker";

export default class Home extends Component {
    constructor(){
        super();
            this.state ={
                post: null,
                id: '',
                title: '',
                description: '',
                image: ''
            
        }
    }

    componentWillMount(){
        if(this.props.navigation.getParam('post') != null){
            let data = this.props.navigation.getParam('post');
            this.setState({
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image
            })
        }
    }

    
    handleTextInput = field => text => {
        this.setState({
            [field]: text
        });
    }
    
    handleSave = () => {
        let id = this.state.id;
        firebase.firestore().collection('posts').doc(id).set({
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
        }).then(() => {
            alert('Berhasil Diupdate');
        });
        this.props.navigation.navigate('Post');

    }

    handleSelectImage = () => {
        const options = {
            quality: 0.5,
            maxHeight: 200,
            maxWieght: 200,
            storageOption : {
                skipBackup : true
            }
        };
        ImagePicker.showImagePicker(options, response => {
            if(response.data){
                this.setState({
                    image: 'data:image/jpeg;base64,' + response.data
                });
            }
        });
    };

    render(){
        return(
            <View style={styles.wrapper}>
                <Text>Home</Text>
                <Text>Title</Text>

                <TextInput
                    onChangeText={this.handleTextInput('title')}
                    placeholder='title' value={this.state.title}
                />
                <Text>description</Text>
                <TextInput
                    onChangeText={this.handleTextInput('description')}
                    placeholder='description'
                    value={this.state.description}
                />
                <Image
                    source={{uri: this.state.image}}
                    style={{height: 200, widht: 200}}
                />                
                <Button 
                    title='Ganti Image'
                    onPress={this.handleSelectImage.bind(this)}
                />

                <Button 
                    title='Save' 
                    color= "#194f34" 
                    onPress={this.handleSave}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container:{ 
      marginHorizontal: 10
    },
    wrapper: {     
      textAlign: 'center',
  
  } 
}); 