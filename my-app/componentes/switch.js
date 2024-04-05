import React, { useState } from 'react';
import { StatusBar, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  const getGreeting = () => {
    return isDay ? 'Noite' : 'Dia';
  };

  const getBackgroundColor = () => {
    return isDay ? '#222823' : '#F4F7F5';
  };

  const handleButtonClick = () => {
    toggleDayNight(); 
  };

  return (

    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>

      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>

      
        <Image 
          source={isDay ? require('../assets/lua.png') : require('../assets/sol.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

    
      <TouchableOpacity onPress={handleButtonClick} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Aperte</Text> 
      </TouchableOpacity>

      {/* //botao para modificar texto */}
      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  toggleButton: {

    marginBottom: 15,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#14bdeb',
    top: 150,
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
    marginHorizontal: 5,
  },

  icon: {
    width: 200,
    height: 200,
  },

  greeting: {
    fontSize: 54,
    fontWeight: 'bold',
  },

});