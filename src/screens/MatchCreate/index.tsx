import React, { useState } from "react";
import { View, Text, TextInputProps, KeyboardAvoidingView, Platform, Modal, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { Header } from "../../components/Header";
import { CategoryList } from "../../components/CategoryList";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { ButtonTextIcon } from "../../components/ButtonTextIcon";
import RedDeadRedemption2Svg from '../../assets/rdr2.svg';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildModel } from "../../models/MatchModel";
import { guilds } from "../../utils/guids";
import { LinearGradient } from "expo-linear-gradient";
import { ModalView } from "../../components/ModalView";
import { GuildsList } from "../../components/GuildsList";




export function MatchCreate() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [guildsModalVisible, setGuildsModalVisible] = useState(false);
  const [selectedGuild, setSelectedGuild] = useState<GuildModel | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    selectedCategory === categoryId ? setSelectedCategory('') : setSelectedCategory(categoryId);
  };

  const handleOpenGuild = () => {
    setGuildsModalVisible(true);
  };

  const handleCloseModal = () => {
    setGuildsModalVisible(false);
  }

  const handleSelectGuild = (selectedGuild: GuildModel) => {
    setSelectedGuild(selectedGuild);
    setGuildsModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <Header title="Agendar Partida" />

        <View style={{ marginLeft: 24, marginTop: 32 }}>
          <Text style={[styles.label, { marginBottom: 18 }]}>
            Categoria
          </Text>
          <CategoryList
            hasCheck
            selectedCategory={selectedCategory}
            onSetCategory={handleSelectCategory}
          />
        </View>

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuild}>
            <View style={styles.serverSelect}>

              {!selectedGuild ? <LinearGradient style={styles.serverImage} colors={[theme.colors.secondary70, theme.colors.secondary40]} />
                :
                <RedDeadRedemption2Svg />
              }

              <View style={styles.serverSelectBody}>
                <Text style={styles.label}>
                  {selectedGuild?.name ? selectedGuild.name : 'Selecione um servidor'}
                </Text>
              </View>

              <Feather name="chevron-right" size={18} color={theme.colors.heading} />
            </View>
          </RectButton>


          <View style={styles.fieldGroup}>
            <DoubleField label="Dia e mês" divider="/" keyboardType="number-pad" maxLength={2} />
            <DoubleField label="Hora e minuto" divider=":" keyboardType="number-pad" maxLength={2} />
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={[styles.label, { marginVertical: 18 }]}>
              Categoria
            </Text>

            <Text style={styles.maxCharacters}>
              Max. 100 caracteres
            </Text>
          </View>
          <TextArea
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
        </View>

        <View style={styles.footer}>
          <ButtonTextIcon title="Agendar" />
        </View>
      </ScrollView>

      <ModalView visible={guildsModalVisible} onCloseModal={handleCloseModal}>
        <GuildsList guilds={guilds} onSelectGuild={handleSelectGuild} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}

type DoubleFieldProps = TextInputProps & {
  label: string;
  divider: string;
}

function DoubleField({ label, divider, ...rest }: DoubleFieldProps) {
  return (
    <View style={styles.field}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.fieldRow}>
        <SmallInput {...rest} />
        <Text style={styles.divider}> {divider} </Text>
        <SmallInput {...rest} />
      </View>
    </View>
  )
}



