'use client';
import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { signOutAction } from '../actions';

export function LogOutButton() {
  const onSingOut = async () => {
    await signOutAction();
  };

  return (
    <form action={onSingOut}>
      <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
        <CiLogout />
        <span className='group-hover:text-gray-700'>Logout asasa</span>
      </button>
    </form>
  );
}
