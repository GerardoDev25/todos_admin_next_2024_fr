'use server';

import { cookies } from 'next/headers';

import { revalidatePath } from 'next/cache';
import { signIn, signOut } from '../auth';

export const signInAction = async () => {
  await signIn();
};

export const signOutAction = async () => {
  await signOut({ redirect: true });
  revalidatePath('/dashboard/profile');
};

export const signOutCustomAction = () => {
  const cookiesStore = cookies();

  cookiesStore.delete('authjs.session-token');

  revalidatePath('/dashboard/profile');
  console.log('signOutCustomAction');
};
