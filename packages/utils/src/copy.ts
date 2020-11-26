import { User } from '@org/types';

export function copy(o: Record<string, unknown>): Record<string, unknown> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(JSON.stringify(o));
}

export function SafeUserModel(user: User): Partial<User> {
  return {
    email: user.email
  };
}
