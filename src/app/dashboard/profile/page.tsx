'use client';

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

import { useSession } from 'next-auth/react';
// import { redirect, useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  // const route = useRouter();
  if (!session?.user && status !== 'loading') {
    // redirect('/api/auth/signin');
    // route.refresh();
  }

  return (
    <div>
      <h1>Hello Page Profile client site</h1>
      <div className='flex flex-col'>
        <span>{session?.user?.name}</span>
        <span>{session?.user?.image}</span>
        <span>{session?.user?.email}</span>
      </div>
    </div>
  );
}
