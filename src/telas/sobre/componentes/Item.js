import React from "react";
import {View, Image} from "react-native";

import styles from "./Item_css";
import Texto from "../../../componentes/Texto"

export default function Item({item:{nome, imagem}}){
   
   return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem}/>
        <Texto style={styles.nome_item}>{nome}</Texto>
    </View>
}

