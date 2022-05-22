import { envToStringOrDefault } from '../utils';

export const jwtConstants = {
  secret: envToStringOrDefault('AUTH_SECRET', 'secretKey'),
};
