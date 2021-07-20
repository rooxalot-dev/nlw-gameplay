import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";

import { MatchModel } from "../../models/MatchModel";
import { Match } from "../Match";
import { styles } from "./styles";

type MatchesListProps = {
  matches: MatchModel[]
}

function ItemSeparator() {
  return (
    <View style={{
      height: StyleSheet.hairlineWidth,
      width: '75%',
      alignSelf: 'flex-end',
      marginTop: -10,
      marginBottom: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.secondary40,
    }} />
  )
};

export function MatchesList({ matches }: MatchesListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Match match={item} />)}
        ItemSeparatorComponent={() => (<ItemSeparator />)}

      />
    </View>
  );
}
