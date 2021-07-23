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
  name: string;
  icon: React.FC<SvgProps> | any,
  owner: boolean
}
