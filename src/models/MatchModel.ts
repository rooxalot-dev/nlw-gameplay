export interface MatchModel {
  id: string;
  guild: GuildModel;
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
