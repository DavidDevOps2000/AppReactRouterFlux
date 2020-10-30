import React, {Components} from 'react';
import {Text, View} from 'react-native';

const SobreJogo: () => React$Node = () => {
  return (
    <View>
      <Text style={{flex: 1, backgroundColor: '#61BD8C'}}>
        Aqui pode ser apresentadas informações sobre outros jogos do
        desenvolvedor
      </Text>
    </View>
  );
};

export default SobreJogo;
