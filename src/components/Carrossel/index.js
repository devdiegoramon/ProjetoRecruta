import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import imagem1 from "../../../assets/bannerslide.png"


//Pega a altura da tela para fazer um calculo no banner, para o banner funcionar corretamente, as imagens devem ter o mesmo tamanho 
const width = Dimensions.get("screen").width


const Carrossel = () =>{
    return(
        <View >
          <PagerView style={styles.viewPager} initialPage={0}>
              <View style={styles.page} key="1">
                <Image style={styles.imagemSlide} source={imagem1}/>
              </View>
              <View style={styles.page} key="2">
                <Text>Second page</Text>
              </View>
              <View style={styles.page} key="3">
                <Text>Third page</Text>
              </View>
          </PagerView>
        </View>
    )
}

export default Carrossel;


const styles = StyleSheet.create({
    viewPager: {
      width: "100%",
      //Calculo usando a altura total da tela
      height: 203 / 414 * width,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagemSlide:{
      borderRadius: 30
    }
});