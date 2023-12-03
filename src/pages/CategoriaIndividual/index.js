import react from "react";
import { Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


const CategoriaIndividual = () => {
    const route = useRoute();
    const { categoriaId } = route.params;
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    }

    return(
        <View>
            <Ionicons name="arrow-back-sharp" size={30} color="#3F3F3F" onPress={handleVoltar} />
            <Text>itens da sua categoria de id = {categoriaId}</Text>
        </View>
    )
}

export default CategoriaIndividual