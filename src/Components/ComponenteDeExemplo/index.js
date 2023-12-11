import React from "react";
import { View } from 'react-native';
import styles from "./styles";

const Componente = () => {
    return(
        <View style={styles.Main}>

        </View>
    )
}

export default Componente;


// Para melhor padronização e Eficiência o componente deve ser uma arrow function, a ultima coisa no arquivo deve ser o export default, para facilitar a leitura do codigo
// Todo componente deve herdar de React (o R é maiusculo) e um bloco {} de react-native, alem de importar o estilo do proprio componente