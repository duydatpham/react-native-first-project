import { AsyncStorage } from 'react-native';

const getCart = async () =>{
    try {
        const value = await AsyncStorage.getItem('@cart:key');
        if (value !== null){
          // We have data!!
          console.log('++++++++++++++++++++++++++++++++++++++');
          console.log('123123');
          console.log('++++++++++++++++++++++++++++++++++++++');
          console.log(value);
          return JSON.parse(value);
        }
      } catch (error) {
          console.log('====================================');
          console.log('123123');
          console.log('====================================');
        // Error retrieving data
      } finally {
        return [];
      }
      
};
export default getCart;