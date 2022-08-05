import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  console.log("SAVING TO ASYNCSTORAGE ::: ", key, value);
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const merge = async (key, value) => {
  console.log("EDITING TO ASYNCSTORAGE ::: ", key, value);
  const serialized = JSON.stringify(value);
  return await AsyncStorage.mergeItem(key, serialized);
};

export const get = async (key) => {
  console.log("LOADING FROM ASYNCSTORAGE ::: ", key);
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return { error: "Failed to load from asyncStorage" };
  }
};

export const clear = async () => {
  return await AsyncStorage.clear();
};
