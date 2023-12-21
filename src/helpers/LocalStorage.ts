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

export const putStorage = <T>(key: string, newItem: T): void => {
  if (localStorage) {
    try {
      // Step 1: Retrieve existing data from local storage
      const existingData = getStorage<T[]>(key) || [];

      // Step 2: Modify the data by adding the new item
      const updatedData = [...existingData, newItem];

      // Step 3: Save the modified data back to local storage
      const serializedValue = JSON.stringify(updatedData);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error updating localStorage key '${key}':`, error);
    }
  } else {
    console.log('LocalStorage not supported');
  }
};
