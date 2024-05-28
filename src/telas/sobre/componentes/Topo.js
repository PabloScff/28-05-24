import React from 'react';
import { View, Image, StatusBar } from 'react-native';

 import Header from '../';
import styles from "./Topo_css";
import { Image } from './';



export default function Topo({titulo}) {

  return <View style={styles.produto}>
    <StatusBar />
    <Image source={Header} style={styles.imagem} resizeMode="contain" />
  </View>

}



  