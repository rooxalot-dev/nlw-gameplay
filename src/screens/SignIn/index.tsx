import React, { useContext } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { ButtonTextIcon } from '../../components/ButtonTextIcon';
import illustrationImg from '../../assets/illustration.png';
import DiscordImg from '../../assets/discord.png';


export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useAuth();


  const handleSignIn = async () => {
    try {
      await signIn();
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        resizeMode="stretch"
        style={styles.illustration}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>

      <View style={{ width: '100%', paddingHorizontal: 24 }}>
        <ButtonTextIcon
          title="Entrar com Discord"
          icon={DiscordImg}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}
