import React, { useState, useCallback, useEffect } from "react";
import { Alert, Image, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../../hooks/auth";

import Loading from "../../components/Loading";
import { Profile } from "../../components/Profile";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { MatchesList } from "../../components/MatchesList";

import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { MatchModel } from "../../models/MatchModel";

import LogoImg from '../../../assets/logo.png';
import { styles } from "./styles";

import { theme } from "../../global/styles/theme";
import { ModalView } from "../../components/ModalView";


export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loadingMatches, setLoadingMatches] = useState<boolean>(false);
  const [matches, setMatches] = useState<MatchModel[]>([]);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

  const { navigate, isFocused } = useNavigation();

  const { signOut } = useAuth();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFocused()) {
        setShowLogoutModal(true);
      }

      return isFocused();
    })
  }, []);

  useFocusEffect(useCallback(() => {
    loadMatches();
  }, [selectedCategory]));

  const loadMatches = async () => {
    try {
      setLoadingMatches(true);

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = (storage ? JSON.parse(storage) : []) as MatchModel[];

      if (selectedCategory) {
        setMatches(appointments.filter((appointment) => appointment.category === selectedCategory));
      } else {
        setMatches(appointments);
      }
    } catch (error) {
      Alert.alert('Houve um erro ao carregar as partidas agendadas. Tente novamente em breve!');
    } finally {
      setLoadingMatches(false);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    selectedCategory === categoryId ? setSelectedCategory('') : setSelectedCategory(categoryId);
  };

  const handleCreateMatch = () => {
    navigate('MatchCreate');
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  }

  const handleLogoutApp = async () => {
    setShowLogoutModal(false);
    await signOut();
  }

  function renderMatches() {
    if (loadingMatches) return <Loading />;
    if (matches.length > 0) return <MatchesList matches={matches} />

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: theme.colors.heading, fontFamily: theme.fonts.text400, fontSize: 16 }}>
          Não foram encontradas partidas :(
        </Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonIcon onPress={handleCreateMatch}>
            <MaterialCommunityIcons name="plus" size={26} />
          </ButtonIcon>
        </View>

        <View style={{ paddingLeft: 24 }}>
          <CategoryList
            hasCheck
            selectedCategory={selectedCategory}
            onSetCategory={handleSelectCategory} />
        </View>

        <View style={styles.content}>
          <ListHeader title="Partidas Agendadas" subtitle={`Total ${matches.length}`} />
          {renderMatches()}
        </View>
      </View>

      <ModalView
        visible={showLogoutModal}
        showBar={false}
        size="small"
        onCloseModal={handleCloseLogoutModal}
      >
        <View style={styles.modalContainer}>

          <View style={styles.logoutHeader}>
            <Text style={styles.logoutText}>Deseja sair do</Text>
            <Image style={styles.logoutLogoImage} source={LogoImg} resizeMode="contain" />
          </View>

          <View style={styles.logoutButtonOptions}>
            <TouchableOpacity
              onPress={handleCloseLogoutModal}
              activeOpacity={0.7}
              style={[styles.logoutButton, styles.logoutNo]}
            >
              <Text style={styles.logoutButtonText}>Não</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogoutApp}
              activeOpacity={0.7}
              style={[styles.logoutButton, styles.logoutYes]}
            >
              <Text style={styles.logoutButtonText}>Sim</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ModalView>
    </>
  )
}
