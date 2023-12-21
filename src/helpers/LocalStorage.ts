interface Identifiable {
  id: string; // You can adjust the type of 'id' as needed
}

export const getStorage = <T>(key: string): T | null => {
  if ( localStorage ) {
    const item = localStorage.getItem(key);
    if ( item ) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error(`Error parsing localStorage item with key '${key}':`, error);
      }
    }
    return null;
  } else {
    console.log('LocalStorage not supported');
    return null;
  }
}

/* export const putStorage = <T>(key: string, value: T): void => {
  if ( localStorage ) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error serializing value for localStorage key '${key}':`, error);
    }
  } else {
    console.log('LocalStorage not supported');
  }
}; */

export const putStorage = <T extends Identifiable>(key: string, newItem: T): void => {
  if (localStorage) {
    try {
      const existingData = getStorage<T[]>(key) || [];
      const isIdRegistered = existingData.some((item) => item.id === newItem.id);

      if (!isIdRegistered) {
        const updatedData = [...existingData, newItem];
        const serializedValue = JSON.stringify(updatedData);
        localStorage.setItem(key, serializedValue);
      } else {
        console.log(`ID '${newItem.id}' is already registered.`);
      }
    } catch (error) {
      console.error(`Error updating localStorage key '${key}':`, error);
    }
  } else {
    console.log('LocalStorage not supported');
  }
};
