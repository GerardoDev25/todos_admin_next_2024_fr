'use client';

import { getProviders, useSession } from 'next-auth/react';

import { LogOutButton, SignInButton } from '.';
import { CiLogout } from 'react-icons/ci';
import { useEffect } from 'react';

export const SessionButton = () => {
  const { data, status } = useSession();
  // getProviders().then((providers) => {
  //   console.log({ providers });
  // });

  // useEffect(() => {
  //   const see = update(data);

  //   console.log(see);
  // }, [data, update]);

  useEffect(() => {
    console.log({ data, status });
  }, [status, data]);

  if (status === 'authenticated') {
    return <LogOutButton />;
  }

  if (status === 'unauthenticated') {
    return <SignInButton />;
  }

  return (
    <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
      <CiLogout />
      <span className='group-hover:text-gray-700'>Wait...</span>
    </button>
  );
};
