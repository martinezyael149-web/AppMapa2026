
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator()



import VisGPS from './Front-end/VisGPS'
import VisMapa from './Front-end/VisMapa'


function MyStack(){
  return(
   <Stack.Navigator>
    <Stack.Screen name="VGPS" component={VisGPS} options={{title: 'Vista de detalle'}} /> 
    <Stack.Screen name="VMapa" component={VisMapa} options={{title: 'Vista de detalle'}} /> 


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

export default App;