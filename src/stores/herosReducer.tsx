import { putStorage } from "../helpers/LocalStorage";
import { AddHeroAction, DeleteHeroAction, SetHerosAction, TypeHeroApp } from "../types/TypeHero";

const ADD_HERO = 'ADD_HERO';
const SET_HEROS = 'SET_HEROS';
const DELETE_HERO = 'DELETE_HERO';

type Action = AddHeroAction | SetHerosAction | DeleteHeroAction;

export const herosReducer = (state: TypeHeroApp[], action: Action) => {
  switch (action.type) {
    case ADD_HERO:{
      const heroToAdd = action.payload;
      if (!state.some(hero => hero.id === heroToAdd.id)) {
        const updatedHeros = [...state, heroToAdd];
        putStorage('SuperHero', updatedHeros);
        return updatedHeros;
      }
      return state;
    }

    case SET_HEROS:{
      putStorage('SuperHero', action.payload);
      return state;
    }

    case DELETE_HERO:{
      const updateHeros = state.filter(hero => hero.id !== action.payload.id);
      putStorage('SuperHero', updateHeros);
      return updateHeros;
    }

    default:
      return state;
  }
}

