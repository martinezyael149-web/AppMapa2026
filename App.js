import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator()

import VisMapa from './Front-End/VisMapa'
import VisGPS from './Front-End/VisGPS'



function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='VGPS' component={VisGPS} options={{title:'GPS'}}  />
      <Stack.Screen name='VMapa' component={VisMapa} options={{title: 'Mapa' }}  />
     
    </Stack.Navigator>
  )
}

function App(){
  return(
  <NavigationContainer>
    <MyStack />  
  </NavigationContainer>
  )
}
