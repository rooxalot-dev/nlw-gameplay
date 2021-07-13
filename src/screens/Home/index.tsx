import React from "react";
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CategoryList } from "../../components/CategoryList";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonIcon
          icon={<MaterialCommunityIcons name="plus" size={26} />}
        />
      </View>

      <View>
        <CategoryList />
      </View>

    </View>
  )
}
