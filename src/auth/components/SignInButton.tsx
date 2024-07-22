'use client';
import { CiLogout } from 'react-icons/ci';
import { signInAction } from '../actions';

export function SignInButton() {
  const onSignIn = async () => {
    await signInAction();
  };

  return (
    <form action={onSignIn}>
      <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
        <CiLogout />
        <span className='group-hover:text-gray-700'>Sign In</span>
      </button>
    </form>
  );
}
