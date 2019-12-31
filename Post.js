import React, {Component} from 'react';
import {ScrollView, View, Text, Image, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default class Post extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        };
        this.getPost();
    }
    getPost = async () => {
        try {
            const snap = await firebase 
            .firestore()
            .collection('posts')
            .onSnapshot(snap => {
                let docs = [];
                snap.forEach(doc => docs.push({ ...doc.data(), id: doc.id}));
                this.setState({posts: docs});
                console.log(this.state.posts);
            });

        }catch (error){}
    };
    deletePost = (id) => {
        firebase.firestore().collection('posts').doc(id).delete().then(() => {
            alert('Data Berhasil Dihapus!!!')
        })
    }
    
    render(){
        return(
            <View>
                <ScrollView>
                    {this.state.posts.map(data => {
                        return(
                            <View>
                                <Text>Title : {data.title}</Text>
                                <Text>Desc : {data.description}</Text>
                                <Image source={{uri: data.image}}  style={{height: 200, width: 200}}/>
                                <Button 
                                    title= "Delete" 
                                    color= "#194f34" 
                                    onPress= {() => this.deletePost(data.id)} 
                                />
                                <Button
                                    title='Update Page'
                                    onPress={() => this.props.navigation.navigate('Update',{post:data})}
                                />
                            </View>
                        );

                    })}
                </ScrollView>
            </View>
        );
    }


}