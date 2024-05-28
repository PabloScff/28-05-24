import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';
import styles from "./prod_css";

export default function Index({topo, detalhes, itens}) {

  
  return <FlatList 
          data={itens.lista}
          renderItem={Item}
          keyExtractor={itens.lista.nome}
          ListHeaderComponent={() =>{
            return <>
              <Topo {...topo}/>
              <View>
                <Detalhes {...detalhes}/>
                <Texto style={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          }}
      />


}


