'use client';
import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { signOutCustomAction, signOutAction } from '../actions';

export function LogOutButton() {
  const onSingOut = () => {
    signOutCustomAction();
    // * pirate solution
    // window.location.href = '/dashboard/profile';
    // window.location.reload()
  };

  return (
    <form action={onSingOut}>
      <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
        <CiLogout />
        <span className='group-hover:text-gray-700'>Sign Out</span>
      </button>
    </form>
  );
}
