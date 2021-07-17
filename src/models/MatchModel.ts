import React from "react";
import { SvgProps } from "react-native-svg";

export interface MatchModel {
  id: string;
  guild: Guild;
  game: string,
  category: string;
  date: string;
  description: string;
}

type Guild = {
  id: string;
  name: string;
  icon: React.FC<SvgProps> | any,
  owner: boolean
}
