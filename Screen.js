import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {ScrollView, View, Text, Image, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import Home from './Home';
import Post from './Post';
import Like from './Like';
import Update from './Update';
import Profile from './Profile';
import Kategori from './Kategori';
import ViewKategori from './ViewKategori';
import Brand from './Brand';
import Keranjang from './Keranjang';
import Animasi from './animation';
import Produk from './produk';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  Home : {screen : Home},
  Post : {screen : Post},
  ViewKategori : {screen :ViewKategori},
  Brand : {screen : Brand},
  Keranjang : {screen : Keranjang},
  Produk: {screen: Produk},
});
const ProdukStack = createStackNavigator({
  Produk: {screen: Produk},
  Post : {screen : Post},
  Animasi: {screen: Animasi},
  
});

const KategoriStack = createStackNavigator({
  Kategori : Kategori,
  View : {screen : ViewKategori},
  
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Post: Post,
  // Like: Like,
  Profile: Profile,
  // Kategori : KategoriStack,
  // Animasi : Animasi,
  Produk: ProdukStack,
});



export default createAppContainer(TabNavigator);
