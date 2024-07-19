// 'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
// import { auth } from '../auth';

interface Props {
  children: React.ReactNode;
}

export default async function AuthProvider({ children }: Props) {
  // const session = await auth();
  return <SessionProvider>{children}</SessionProvider>;
}
