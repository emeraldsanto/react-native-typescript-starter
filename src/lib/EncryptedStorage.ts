import { NativeModules } from "react-native";

const { RNEncryptedStorage } = NativeModules;

export default class EncryptedStorage {

    /**
     * Writes data to the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that will be associated to the value for later retrieval.
     * @param {Object} value - The data to store.
     */
    static store = async (key : string, value : Object) : Promise<boolean> => {
        try {
            await RNEncryptedStorage.store(key, JSON.stringify(value));
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Retrieves data from the disk, using SharedPreferences or KeyChain, depending on the platform and returns it as the specified type.
     * @param {string} key - A string that is associated to a value.
     */
    static retrieve = async <T>(key : string) : Promise<T | undefined> => {
        try {
            const savedValue = await RNEncryptedStorage.retrieve(key);
            return JSON.parse(savedValue) as T;
        } catch (error) {
            return undefined;
        }
    }

    /**
     * Deletes data from the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that is associated to a value.
     */
    static remove = async (key : string) : Promise<boolean> => {
        try {
            await RNEncryptedStorage.remove(key);
            return true;
        } catch (error) {
            return false;
        }
    }
}