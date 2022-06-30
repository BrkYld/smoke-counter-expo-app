import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fetch } from '../components';

const baseUrl = 'http://104.198.199.113:3000/api';
const endPoints = {
  smoke: `${baseUrl}/user/smoke`,
  daily: `${baseUrl}/user/daily`
};

const header = async () => {
  const user = await AsyncStorage.getItem('user');
  if (user) {
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${user}` };
  }
  return { 'Content-Type': 'application/json' };
};
export const UserService = {
  Smoke: async (body: SmokeRequest): Promise<ApiResponse<null>> => {
    const requestOptions = {
      method: 'PUT',
      headers: await header(),
      body: JSON.stringify(body),
    };
    return Fetch(endPoints.smoke, requestOptions);
  },
  GetDailyReport: async (): Promise<ApiResponse<DailyReport>> => {
    const requestOptions = {
      method: 'GET',
      headers: await header(),
    };
    return Fetch(endPoints.daily, requestOptions);
  },
  GetSmokingReport: async (): Promise<ApiResponse<SmokingReport>> => {
    const requestOptions = {
      method: 'GET',
      headers: await header(),
    };
    return Fetch(endPoints.smoke, requestOptions);
  },
};
