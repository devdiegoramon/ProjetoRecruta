import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const CursoDetalhe = () => {
    const route = useRoute();
    const { itemId } = route.params;
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.cursoDetalheMain}>
            <Ionicons name="arrow-back-sharp" size={30} color="#3F3F3F" onPress={handleVoltar} />
            <Text>Detalhes do Curso de id = {itemId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default CursoDetalhe;
