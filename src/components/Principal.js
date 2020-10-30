import React from 'react';
import {View, Image} from 'react-native';

import logo from '../imgs/logo.png'; /*Adicionando o caminho da IMG para ser usadoa como Var na IMG */
import btnJogar from '../imgs/botao_jogar.png';
import btnSobre from '../imgs/sobre_jogo.png';
import btnOutrosJogos from '../imgs//outros_jogos.png';

const Principal: () => React$Node = () => {
  return (
    <View style={estilo.cenaPrincipal}>
      <View style={estilo.apresentacaoJogo}>
        <Image source={logo} />
        <Image source={btnJogar} />
      </View>

      <View style={estilo.rodape}>
        <Image source={btnSobre} />
        <Image source={btnOutrosJogos} />
      </View>
    </View>
  );
};
const estilo = {
  /* Declarando Estilos SEM O STYLESHEETS*/
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default Principal;
