'use client';
import { signInAction } from '../actions';

export function SignInButton() {
  const onSignIn = async () => {
    await signInAction();
  };

  return (
    <form action={onSignIn}>
      <button type='submit'>Signin with GitHub</button>
    </form>
  );
}
