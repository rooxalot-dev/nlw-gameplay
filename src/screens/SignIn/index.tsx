import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { style } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import illustrationImg from '../../assets/illustration.png';
import DiscordImg from '../../assets/discord.png';

export function SignIn() {

  return (
    <View style={style.container}>
      <Image
        source={illustrationImg}
        resizeMode="stretch"
        style={style.illustration}
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>

      <ButtonIcon title="Entrar com Discord" icon={DiscordImg} activeOpacity={.7} />
    </View>
  );
}
