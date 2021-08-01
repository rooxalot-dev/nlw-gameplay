import React from "react";
import { SvgProps } from "react-native-svg";

export interface MatchModel {
  id: string;
  guild: GuildModel;
  game: string,
  category: string;
  date: string;
  description: string;
}

export type GuildModel = {
  id: string;
  icon: string;
  name: string;
  owner: boolean
}
