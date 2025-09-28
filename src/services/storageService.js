import AsyncStorage from '@react-native-async-storage/async-storage';
import Keychain from 'react-native-keychain';

class _StorageService {
  setData(key, value) {
    try {
      const valueStringified =
        typeof value !== 'string' ? JSON.stringify(value) : value;
      return AsyncStorage.setItem(key, valueStringified);
    } catch (error) {
      return false;
    }
  }

  async getData(key) {
    const item = await AsyncStorage.getItem(key);
    if (!item) {
      return undefined;
    }

    try {
      return JSON.parse(item); // Try parsing as JSON
    } catch (e) {
      return item; // Return as string if parsing fails
    }
  }

  setUserAuth(email, token) {
    return Keychain.setGenericPassword(email, token);
  }

  getUserAuth() {
    return Keychain.getGenericPassword();
  }

  clearUserAuth() {
    return Keychain.resetGenericPassword();
  }

  clearData(key) {
    return AsyncStorage.removeItem(key);
  }

  resetData() {
    return AsyncStorage.clear();
  }
}

const StorageService = new _StorageService();

export default StorageService;
