import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fetch } from '../components';

const baseUrl = 'http://104.198.199.113:3000/api';
const endPoints = {
  login: `${baseUrl}/auth/login`,
  register: `${baseUrl}/auth/register`,
};

const header = async () => {
  const user = await AsyncStorage.getItem('user');
  if (user) {
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${user}` };
  }
  return { 'Content-Type': 'application/json' };
};
export const AuthService = {
  Login: async (body:UserInfo) : Promise<ApiResponse<string>> => {
    const requestOptions = {
      method: 'POST',
      headers: await header(),
      body: JSON.stringify(body),
    };
    return Fetch(endPoints.login, requestOptions);
  },
  Register: async (body:UserInfo) : Promise<ApiResponse<UserInfo>> => {
    const requestOptions = {
      method: 'POST',
      headers: await header(),
      body: JSON.stringify(body),
    };
    return Fetch(endPoints.register, requestOptions);
  },
};
