/* eslint-disable import/no-cycle */
import { AuthService } from './AuthService';
import { UserService } from './UserService';

export const Service = {
  Auth: AuthService,
  User: UserService,
};
