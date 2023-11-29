import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const navigationItems = [
  { id: 'home', icon: 'home', text: 'Home' },
  { id: 'courses', icon: 'play-circle', text: 'Meus cursos' },
  { id: 'blog', icon: 'book', text: 'Blog' },
  { id: 'profile', icon: 'person-circle', text: 'Perfil' },
];

const BottomNavigation = () => {
  return (
    <View style={styles.navigationAll}>
      {navigationItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.itemAll}>
          <Ionicons name={item.icon} size={30} />
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  navigationAll: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
  },
  itemAll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap"
  },
});
