import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function Sobre() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="First">
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen
                  name="Settings"
                  component={SettingsScreen}
                />
                <SettingsStack.Screen name="Profile" component={ProfileScreen} />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
          
          <Tab.Screen name="Second">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
const styles = StyleSheet.create({
    
})