import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';
import { View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Produto from './src/telas/Produtos/';
import Sobre from './src/telas/Produtos';
import mock from './src/mocks/produto';
import mock2 from './src/mocks/sobre';

import mock3 from './src/mocks/prod';
import Prod  from './src/telas/prod';




function MenuKit2(){
  return <Produto {...mock}/>
}
function MenuKit(){
  return <Sobre {...mock2}/>
}

function MenuKit3(){
  return <Prod {...mock3}/>
}

const Tab = createBottomTabNavigator();
function TabsMenu(){
  return <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>{
              let iconName;

              if(route.name === "Kit"){
                iconName = focused
                ? 'star'
                : 'star-outline';

              } else if (route.name === "Sobre nós"){
                iconName = focused
                ? 'home'
                : 'home-outline';

              }else if (route.name === "Produtos"){
                iconName = focused
                ?'list'
                :'list-outline'

              }else if (route.name === "Lista de Desejos"){
                iconName = focused
                ?'heart'
                :'heart-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
          })}>
            
            <Tab.Screen name="Sobre nós" component={MenuKit2} />
            <Tab.Screen name="Kit" component={MenuKit} />
            <Tab.Screen name="Produtos" component={MenuKit3} />
            <Tab.Screen name="Lista de Desejos" component={MenuKit} />

    </Tab.Navigator>
}



export default function App() {

//Carrega a fonte para o projeto
const [ fonteCarregada ] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return <> 
  
  

   <NavigationContainer> 
            <TabsMenu />
    </NavigationContainer></>
 
}