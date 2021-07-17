import { MatchModel } from '../models/MatchModel';
import RankedSvg from '../assets/ranked.svg';

export const matches: MatchModel[] = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: RankedSvg,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    game: 'League of Legends',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!'
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: RankedSvg,
      owner: false
    },
    category: '1',
    date: '22/06 às 20:40h',
    game: 'League of Legends',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!'
  },
  {
    id: '3',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: RankedSvg,
      owner: false
    },
    category: '1',
    date: '22/06 às 20:40h',
    game: 'League of Legends',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!'
  }
];
