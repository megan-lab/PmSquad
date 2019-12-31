import React, { Component }  from   'react' ;     
import { StyleSheet, View, Text, TouchableOpacity, ScrollView,Image, TextInput, Button, ActivityIndicator }  from   'react-native' ;   
import { firebase } from '@react-native-firebase/auth';
import ImagePicker from "react-native-image-picker";
import OneSignal from 'react-native-onesignal';
import axios from 'axios';


export default class Home extends Component {
    constructor(properties){
        super(properties);
        OneSignal.init("43d24e55-1a5d-412a-a77a-e80d3aeb80e6");
            this.state ={
                namaProduk: '',
                sizeReady: '',
                hargaProduk: '',
                image: null            
        },
            this.state ={
                kategori: [],
                katalog: [],

            };
            this.getPost();
            this.getPostKatalog();
    }

    getPost = async () => {
        try {
            const snap = await firebase 
            .firestore()
            .collection('kategori')
            .onSnapshot(snap => {
                let docs = [];
                snap.forEach(doc => docs.push({ ...doc.data(), id: doc.id}));
                this.setState({kategori: docs});
                console.log(this.state.kategori);
            });

        }catch (error){}
    };
    getPostKatalog = async () => {
        try {
            const snap = await firebase 
            .firestore()
            .collection('katalog')
            .onSnapshot(snap => {
                let docs = [];
                snap.forEach(doc => docs.push({ ...doc.data(), id: doc.id}));
                this.setState({katalog: docs});
                console.log(this.state.katalog);
            });

        }catch (error){}
    };
    handleLogout = async() =>{
        await firebase.auth().signOut();
        this.props.navigation.navigate('Login');
    };
    
    handleTextInput = field => text => {
        this.setState({
            [field]: text
        });
    }
    
    handleSave = () => {
        firebase.firestore().collection('posts').add(this.state);
        this.setState({
            title: '',
            description: '',
            image: null
        });
        this.handleNotif(); //Panggil fungsi
    }
    handleSaveKategori = () => {
        firebase.firestore().collection('kategori').add(this.state);
        this.setState({
            image: null
        });
        this.handleNotif(); //Panggil fungsi
    }
    handleSaveKatalog = () => {
        firebase.firestore().collection('katalog').add(this.state);
        this.setState({
            namaProduk: '',
            sizeReady: '',
            hargaProduk: '',
            image: null
        });
        this.handleNotif(); //Panggil fungsi
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
        ImagePicker.showImagePicker(options, respone => {
            if(respone.data){
                this.setState({
                    image: 'data:image/jpeg;base64,' + respone.data
                });
            }
        });
    };

    handleNotif = async() => {
        axios.defaults.headers.common['Authorization'] = 'Basic NjU5NjI4YmQtNGRhNy00ZGZjLTgyNTItNGRlNWE5ZTM2MDU1'; 
        axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        await axios({
            method: 'post',
            url: 'https://onesignal.com/api/v1/notifications',
            data: {
                app_id: "43d24e55-1a5d-412a-a77a-e80d3aeb80e6",
                contents: { "en" : "Lihat Postingan Terbaru!!!"},
                included_segments: ["All"]
            }
        });
    }

    render(){
        return(
            
            <View style={styles.wrapper}>
                <ScrollView>
                <View style={styles.header}>
                    <View style={styles.subHeader}>
                        {/* <Image source={require("../img/fashion.png")} style={{  width : 35,height : 35,marginLeft: 15,}}/> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Keranjang')}>
                             <Image source={require("../img/keranjang3.png")} style={{  width : 30,height : 30, marginLeft: 315}}/>      
                        </TouchableOpacity>
                        
                    </View>
                </View>
          
                {/* And Header */}
                </ScrollView>
                <ScrollView>
                <View style={styles.katalog}>
                    <View style={styles.iconContainer}>
                            
                            <View style={styles.icon}>
                                <Image source={require("../img/fashion.png")} style={styles.imgKategori}/>  
                            </View>
                            <View style={styles.icon}>
                                <Image source={require("../img/fashion.png")} style={styles.imgKategori}/>  
                            </View>
                            <View style={styles.icon}>
                                <Image source={require("../img/fashion.png")} style={styles.imgKategori}/>  
                            </View>
                            <View style={styles.icon}>
                                <Image source={require("../img/fashion.png")} style={styles.imgKategori}/>  
                            </View>
                    </View>
                </View>
                <View style={styles.imglogoContainer}>
                    <View>
                         <Image source={require("../img/converse.png")} style={styles.imglogo}/>
                         <Image source={require("../img/converse1.png")} style={styles.imglogotext}/>
                    
                    </View>
                </View>
                <View style={styles.brand}>
                    <View style={styles.brandTitle}>
                        <TouchableOpacity>
                            <Text style={{marginLeft: 5}}>Brand</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewKategori')}>
                            <Text style={{marginLeft: 220}}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbrand}>
                        <ScrollView horizontal={true}>
                                {this.state.kategori.map(data => {
                                return(
                                    <View style={styles.imgbrang}>
                                        <Image source={{uri: data.image}}  style={{height: 75, width: 100}}/>
                                    </View>
                                );

                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.brandTitle}>
                        <TouchableOpacity onPress={this.handleSaveKategori}>
                            <Text style={{marginLeft: 5}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleSelectImage.bind(this)}>
                            <Text style={{marginLeft: 220}}>Pilih Gambar</Text>
                        </TouchableOpacity>
                    </View>
                </View>   
            
                <View style={styles.katalog}>
                    <View style={styles.subkatalog}>
                        <ScrollView horizontal={true}>
                                {this.state.katalog.map(data => {
                                return(
                                    <View style={styles.subKatalog1}>
                                        <View>
                                            <Image source={{uri: data.image}}  style={{height: 200, width: 175}}/>
                                        </View>
                                        <View style={styles.produk}>
                                            <Text>{data.namaProduk}</Text>
                                            <Text>{data.sizeReady}</Text>
                                            <Text>{data.hargaProduk}</Text>
                                        </View>
                                    </View>
                                );

                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.brandTitle}>
                        <TouchableOpacity onPress={this.handleSaveKatalog}>
                            <Text style={{marginLeft: 5}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleSelectImage.bind(this)}>
                            <Text style={{marginLeft: 220}}>Pilih Gambar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.produkTitle}>
                        <TextInput 
                            onChangeText={this.handleTextInput('namaProduk')}
                            placeholder= 'Nama Produk' value={this.state.namaProduk}
                        />
                        <TextInput 
                            onChangeText={this.handleTextInput('sizeReady')}
                            placeholder= 'Size Ready' value={this.state.sizeReady}
                        />
                        <TextInput 
                            onChangeText={this.handleTextInput('hargaProduk')}
                            placeholder= 'Harga Produk' value={this.state.hargaProduk}
                        />


                        
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
container:{ 
    marginHorizontal: 10
},
wrapper: {     
    textAlign: 'center',
  
},
header:{
    backgroundColor : '#fac825',
},

subHeader:{
    flex: 1,
    flexDirection: 'row',
    padding: 10,
},
imgHeader:{
    width : 35,
    height : 35,

},
iconContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
},
icon :{ 
    justifyContent: 'center',
    padding: 10,  
    margin: 2.5,
    borderColor : 'black',
    borderRadius: 4,
    borderWidth: 0.1,
    backgroundColor : '#f0f0f0',
},
imglogoContainer:{
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 30,
},
imglogo:{
    marginLeft: 70,
    // padding: 30,
    width: 180,
    height: 130,
},
imglogotext:{
    marginLeft: 70,
    marginTop: -50,
    width: 180,
    height: 130,
},
kategori:{ 
    margin: 50, 
    borderColor : 'black',
    borderRadius: 4,
    borderWidth: 0.1,
    backgroundColor : '#f0f0f0',
},
subKategori : {
    flex: 1,
    flexDirection: 'row',      
},
imgKategori: {     
    width : 35,
    height : 35,
    marginHorizontal: 10,
},
img: {     
    width : 60,
    height : 35,
    marginHorizontal: 10,
},
brand:{   
    justifyContent: 'center',
    marginTop : -50,
    padding: 15,  
    borderColor : 'black',
    borderRadius: 1,
    borderWidth: 0.1,
},
brandTitle:{   
    flex: 1,
    flexDirection: 'row',  
},
subbrand : {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
},
imgbrang : {
    marginRight: 10,
},
katalog:{   
    justifyContent: 'center',
    // marginTop : 10,
    padding: 15,  
    borderColor : 'black',
    borderRadius: 1,
    borderWidth: 0.1,
},
subkatalog : {
    // marginTop: 10,
    // marginLeft: 5,
    // marginBottom: 10,
},
subKatalog1 :{ 
    justifyContent: 'center',
    marginBottom: 1,
    marginRight: 5,
    padding: 5,  
    borderColor : 'black',
    borderRadius: 4,
    borderWidth: 0.1,
    // backgroundColor : '#f0f0f0',
},
produk: {
    backgroundColor: '#fff',
    padding: 3,
    textAlign : 'center',
}

});