import { GuildModel, MatchModel } from '../models/MatchModel';
import RedDeadRedemption2Svg from '../assets/rdr2.svg';

export const guilds: GuildModel[] = [
  {
    id: '1',
    name: 'Yeah, boy!',
    icon: RedDeadRedemption2Svg,
    owner: false
  },
  {
    id: '2',
    name: 'Lenny? LENNY?!!!',
    icon: RedDeadRedemption2Svg,
    owner: true
  },
];
