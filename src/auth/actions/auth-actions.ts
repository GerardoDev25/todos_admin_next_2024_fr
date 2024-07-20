'use server';

import { signIn, signOut } from '../auth';

export const signInAction = async () => {
  // 'use server';
  await signIn();
};

export const signOutAction = async () => {
  // 'use server';
  await signOut();
};
