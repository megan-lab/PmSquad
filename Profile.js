import React, {Component} from 'react';
import {ScrollView,TextInput,StyleSheet, View, Text,TouchableOpacity, Image, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from "react-native-image-picker";
import OneSignal from 'react-native-onesignal';
import axios from 'axios';

export default class Kategori extends Component {
    constructor(properties){
        super(properties);
        OneSignal.init("43d24e55-1a5d-412a-a77a-e80d3aeb80e6");
            this.state ={
                nama: '',
                username: '',
                image: null            
        },
            this.state ={
                setProfile: [],

            };
            this.getSetProfile();
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
    
    handleSelectImage = () => {
        const options = {
            quality: 0.5,
            maxHeight: 100,
            maxWieght: 100,
            storageOption : {
                skipBackup : true
            }
        };
        ImagePicker.showImagePicker(options, respone => {
            if(respone.data){
                this.setState({
                    image: 'data:image/jpeg;base64,' + respone.data
                });
            }
        });
    };
    getSetProfile = async () => {
        try {
            const snap = await firebase 
            .firestore()
            .collection('setProfile')
            .onSnapshot(snap => {
                let docs = [];
                snap.forEach(doc => docs.push({ ...doc.data(), id: doc.id}));
                this.setState({setProfile: docs});
                console.log(this.state.setProfile);
            });

        }catch (error){}
    };
    handleSaveSetProfile = () => {
        firebase.firestore().collection('setProfile').add(this.state);
        this.setState({
            nama: this.state.nama,
            username: this.state.username,
            image: this.state.image,
        });
        // this.handleNotif(); //Panggil fungsi
    }
    deletePost = (id) => {
        firebase.firestore().collection('setProfile').doc(id).delete().then(() => {
            alert('Data Berhasil Dihapus!!!')
        })
    }
    render(){
        return(
                <View tyle={styles.container}>
                    <View style={styles.header}>
                            {this.state.setProfile.map(data => {
                                return(
                                    <View style={styles.profile}>
                                        <Image source={{uri: data.image}} style={styles.myProfile}/>
                                        <Button 
                                    title= "Delete" 
                                    color= "#194f34" 
                                    onPress= {() => this.deletePost(data.id)} 
                                />
                                    </View>
                               );
                            })}
                        <View style={styles.setFoto}>
                            <TouchableOpacity onPress={this.handleSelectImage.bind(this)}>
                                <Text style={styles.camera}>Ganti Foto Profile</Text>
                                {/* <Image source={require("../img/camera.png")} style={styles.camera}/>     */}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleSaveSetProfile}>
                                <Text style={{marginLeft: 5}}>Save</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    <View style={styles.setProfile}>
                        <View style={styles.subSetProfile}>
                            <TextInput 
                                onChangeText={this.handleTextInput('namaProfile')}
                                placeholder= 'Nama' value={this.state.namaProduk}
                            />
                        </View>
                        <View style={styles.subSetProfile}>
                            <TextInput 
                                onChangeText={this.handleTextInput('username')}
                                placeholder= 'Username' value={this.state.namaProduk}
                            />
                        </View>                        
                    </View>
                </View>
                

            
        );
    }


}

const styles = StyleSheet.create({  
container:{
    backgroundColor : '#fac825',
    // justifyContent: 'center',
    // alignItems:'center',
    // alignContent : 'center',
},
header:{
    // backgroundColor : '#333',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    borderRadius: 100,
    width : 200,
    height : 200,
    marginTop: 80,
    marginLeft: 80,
},
myProfile:{
    width : 100,
    height : 100,
    borderRadius: 100,
},
camera:{
    padding: 10,
},
profile:{
    alignItems: 'center',
},
setFoto:{
    alignItems: 'center',

},
setProfile:{
    // borderBottomWidth: 1,

}, 
subSetProfile: {
    borderBottomWidth: 1,
}
});