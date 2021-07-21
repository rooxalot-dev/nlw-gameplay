import React from "react";
import { Text, View } from "react-native";

import { Avatar } from "../Avatar";
import { MemberModel } from "../../models/MemberModel";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type MemberProps = {
  data: MemberModel
}

export function Member({ data }: MemberProps) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatar_url} />

      <View>
        <Text style={styles.username}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[styles.statusIndicator, { backgroundColor: isOnline ? on : primary }]} />

          <Text style={styles.statusName}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>

    </View>
  );
};
