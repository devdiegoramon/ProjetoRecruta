import React from "react";
import { View, Text, ScrollView } from "react-native";
import Carrossel from "../../components/Carrossel";
import { StyleSheet } from "react-native";

const Home = ()=>{
    return(
        <ScrollView style={styles.mainContent}>
            <Carrossel/>
            <Text style={styles.contentTitle}>Conteúdo Principal</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
      },
      mainContent:{
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
      }
})

export default Home;