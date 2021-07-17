import React, { useState } from "react";
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { MatchesList } from "../../components/MatchesList";

import { matches } from '../../utils/matches';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectCategory = (categoryId: string) => {
    selectedCategory === categoryId ? setSelectedCategory('') : setSelectedCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonIcon>
          <MaterialCommunityIcons name="plus" size={26} />
        </ButtonIcon>
      </View>

      <View>
        <CategoryList
          selectedCategory={selectedCategory}
          onSetCategory={handleSelectCategory} />
      </View>

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle={`Total ${matches.length}`} />
        <MatchesList matches={matches} />
      </View>

    </View>
  )
}
