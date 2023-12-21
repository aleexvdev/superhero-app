import { getStorage } from "../helpers/LocalStorage";
import { TypeHeroApp } from "../types/TypeHero";

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const findItemInLocalStorage = (id: string): number => {
  if (localStorage) {
    const items = getStorage<TypeHeroApp[]>('SuperHero');
    if (items) {
      if (items.find(item => item.id === id)) {
        return 1;
      }else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    console.log('LocalStorage not supported');
    return 0;
  }
  
};

export const deleteHero = (id: string): void => {
  if (localStorage) {
    try {
      const existingData = getStorage<TypeHeroApp[]>('SuperHero') || [];
      const updatedData = existingData.filter((item) => item.id !== id);
      const serializedValue = JSON.stringify(updatedData);
      localStorage.setItem('SuperHero', serializedValue);
    } catch (error) {
      console.error(`Error deleting hero with ID '${id}' from localStorage:`, error);
    }
  } else {
    console.log('LocalStorage not supported');
  }
};
