import { AsyncStorage } from 'react-native';

const saveCart = async (cartArray) => {
    await AsyncStorage.setItem('@cart:key',JSON.stringify(cartArray))
};
export default saveCart;