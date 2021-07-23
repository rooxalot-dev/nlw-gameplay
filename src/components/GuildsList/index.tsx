import React from "react";
import { FlatList, View } from "react-native";

import { GuildModel } from "../../models/MatchModel";
import { Guild } from "../Guild";
import { ItemSeparator } from "../ItemSeparator";

type GuildsListProps = {
  guilds: GuildModel[];
  onSelectGuild: (guild: GuildModel) => void;
}

export function GuildsList({ guilds, onSelectGuild }: GuildsListProps) {
  return (
    <View>
      <FlatList
        data={guilds}
        keyExtractor={(guild) => guild.id}
        renderItem={({ item }) => (
          <Guild
            guild={item}
            onPress={() => onSelectGuild(item)}
          />
        )}
        ItemSeparatorComponent={() => (<ItemSeparator />)}
      />
    </View>
  );
}
