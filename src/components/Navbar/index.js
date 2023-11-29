import React from "react";
import { View, Text, Image } from 'react-native';
import { useAuth } from '../../../App';  // Substitua pelo caminho correto para o arquivo App.js

const Navbar = () => {
  const { dia, user } = useAuth();

  return (
    <View style={styles.navbarTitleContainer}>
      <Text style={styles.diaSemana}>{dia}</Text>
      <Text style={styles.navbarTitle}>{user.nome}</Text>
      <Image source={require('../../../assets/recruta.jpg')} style={styles.navbarImage} />
    </View>
  );
};



export default Navbar