import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Alert, Platform } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { CategoryList } from "../../components/CategoryList";
import { DoubleField } from "../../components/DoubleField";
import { TextArea } from "../../components/TextArea";
import { ButtonTextIcon } from "../../components/ButtonTextIcon";
import { ModalView } from "../../components/ModalView";
import { GuildsList } from "../../components/GuildsList";
import { GuildIcon } from "../../components/GuildIcon";
import Loading from "../../components/Loading";

import { GuildModel, MatchModel } from "../../models/MatchModel";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function MatchCreate() {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [guildsModalVisible, setGuildsModalVisible] = useState(false);
  const [loadingGuilds, setLoadingGuilds] = useState(true);
  const [guilds, setGuilds] = useState<GuildModel[]>([]);
  const [selectedGuild, setSelectedGuild] = useState<GuildModel>({} as GuildModel);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const handleSelectCategory = (categoryId: string) => {
    selectedCategory === categoryId ? setSelectedCategory('') : setSelectedCategory(categoryId);
  };

  const handleOpenGuild = async () => {
    setGuildsModalVisible(true);
    await fetchGuilds();
  };

  const handleCloseModal = () => {
    setGuildsModalVisible(false);
  }

  const fetchGuilds = async () => {
    try {
      setLoadingGuilds(true);
      const { data } = await api.get<GuildModel[]>('/users/@me/guilds');
      setGuilds(data);
    } catch (error) {
    } finally {
      setLoadingGuilds(false);
    }
  };

  const handleSelectGuild = (selectedGuild: GuildModel) => {
    setSelectedGuild(selectedGuild);
    setGuildsModalVisible(false);
  };

  const handleDayMonthChange = (values: string[]): void => {
    const [day, month] = values;
    setDay(day);
    setMonth(month);
  }

  const handleHourMinuteChange = (values: string[]): void => {
    const [hour, minute] = values;
    setHour(hour);
    setMinute(minute);
  }

  const handleDescriptionChange = (description: string): void => {
    setDescription(description);
  }

  const handleSaveAppointment = async (): Promise<void> => {
    const newAppointment: MatchModel = {
      id: String(uuid.v4()),
      guild: selectedGuild,
      category: selectedCategory,
      date: `${day}/${month} ??s ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    Alert.alert('Sucesso', `Partida agendada para ${newAppointment.date}`);

    navigate('Home');
  }

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
                <GuildIcon guildId={selectedGuild.id} iconId={selectedGuild.icon} />
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
            <DoubleField label="Dia e m??s" divider="/" keyboardType="number-pad" maxLength={2} onValuesChange={handleDayMonthChange} />
            <DoubleField label="Hora e minuto" divider=":" keyboardType="number-pad" maxLength={2} onValuesChange={handleHourMinuteChange} />
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
            onChangeText={handleDescriptionChange}
          />
        </View>

        <View style={styles.footer}>
          <ButtonTextIcon title="Agendar" onPress={handleSaveAppointment} />
        </View>
      </ScrollView>

      <ModalView visible={guildsModalVisible} onCloseModal={handleCloseModal}>
        {
          loadingGuilds
            ? <Loading />
            : <GuildsList guilds={guilds} onSelectGuild={handleSelectGuild} />
        }
      </ModalView>
    </KeyboardAvoidingView>
  );
}




