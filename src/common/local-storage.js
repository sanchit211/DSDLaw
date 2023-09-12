import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.log(e);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }

  console.log('Done.');
};

const removeKeyData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }

  console.log(key, 'Removed');
};

export {storeData, getData, clearAll, removeKeyData};
