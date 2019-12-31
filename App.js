// App.js 
import { createAppContainer, createSwitchNavigator }  from   'react-navigation' ;
import { createStackNavigator } from 'react-navigation-stack';   
import SplashScreen  from   './pages/SplashScreen' ;   
import Signup  from   './pages/Signup' ;   
import Login  from   './pages/Login' ;      
import Screend from './pages/Screen';
// import HomeScreen from './pages/Home';
// import PostScreen from './pages/Post';
// import LikeScreen from './pages/Like';
// import UpdateScreen from './pages/Update';
// import ProfileScreen from './pages/Profile';
// import KategoriScreen from './pages/Kategori';

const AuthStack = createStackNavigator(  
{ 
  SplashScreen: { screen: SplashScreen }, 
  Login: { screen: Login }, 
  Signup: { screen: Signup } 
},  
{    
  headerMode: 'none' 
} 
); 

const MainStack = createStackNavigator({  
Screend: {screen : Screend},
},
{    
    headerMode: 'none' 
  }
);  

const menu = createSwitchNavigator({  
Auth: { screen: AuthStack }, 
Main: { screen: MainStack } 
}); 

export default createAppContainer(menu);

