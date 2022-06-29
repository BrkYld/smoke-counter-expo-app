/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Fetch = (url: string, requestOptions: any) => (fetch(url, requestOptions)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      AsyncStorage.removeItem('user');
      return false;
    }
    throw new Error('NewError');
  })
  .then(json => json)
  .catch(() => false)
);
