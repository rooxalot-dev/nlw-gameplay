import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";

import { MatchModel } from "../../models/MatchModel";
import { ItemSeparator } from "../ItemSeparator";
import { Match } from "../Match";
import { styles } from "./styles";

type MatchesListProps = {
  matches: MatchModel[]
}

export function MatchesList({ matches }: MatchesListProps) {

  const { navigate } = useNavigation();

  function handleMatchDetails(item: MatchModel) {
    navigate('MatchDetails', item);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Match match={item} onPress={() => handleMatchDetails(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 60 }}
        ItemSeparatorComponent={() => (<ItemSeparator />)}

      />
    </View>
  );
}



