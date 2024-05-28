import React from 'react';
import { View,StatusBar } from 'react-native';

import styles from './Detalhes_css';
import Texto from '../../../componentes/Texto';


export default function Detalhes({nome, detalhes}) {

  return <View style={styles.container}>
    <StatusBar />
    <Texto style={styles.titulo}> {nome}</Texto>
    <Texto style={styles.descricao}>{detalhes}</Texto>
  </View>

}



