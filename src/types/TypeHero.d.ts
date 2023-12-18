export type TypeHeroApp = {
  response: string;
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
};

export type TypePowerStats = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export type TypeFetchAppResponse = {
  message: string;
  data: TypeHeroApp | null;
  status: number;
}

export type TypeFetchAppSearchResponse = {
  response: 'success' | 'error'; // El servidor devuelve 'success' o 'error'
  'results-for': string; // 'results-for' es una cadena según tu respuesta
  results: TypeHeroApp[]; // 'results' es un array de objetos TypeHeroApp según tu respuesta
  message?: string; // Mensaje opcional, si el servidor proporciona un mensaje
  status?: number; // Estado opcional, si el servidor proporciona un estado
}

export type TypeSocialNetworks = {
  id: number;
  social_network: string;
  url: string;
  icon: string;
}

export type TypeBiography = {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
  [key: string]: string|string[];
}

export type TypeAppearance = {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
  [key: string]: string|string[];
}

export type TypeWork = {
  occupation: string;
  base: string;
  [key: string]: string;
}

export type TypeConnections = {
  "group-affiliation": string;
  relatives: string;
  [key: string]: string;
}

export type AddHeroAction =  {
  type: 'ADD_HERO';
  payload: TypeHeroApp;
}

export type SetHerosAction =  {
  type: 'SET_HEROS';
  payload: TypeHeroApp[];
}

export type DeleteHeroAction = {
  type: 'DELETE_HERO';
  payload: TypeHeroApp;
}