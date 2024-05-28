import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Texto from '../../componentes/Texto';


import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'

export default function Produto({topo, detalhes, itens}){
    
    return <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={itens.lista.id}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo} />

                <View>
                    <Detalhes {...detalhes} />
                    <Texto style={styles.titulo}>{itens.titulo}</Texto>
                </View>
                </>
            }}
        />
}

const styles = StyleSheet.create({
    titulo: {
        margin: 20,
        fontSize: 23,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: "",
      },
      
  
})
